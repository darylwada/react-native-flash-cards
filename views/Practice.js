import React from 'react'
import { StyleSheet, View, ScrollView, Text, Dimensions, TouchableHighlight, Animated } from 'react-native'
import EmptyList from '../components/EmptyList'
import ProgressBar from '../containers/ProgressBar'

export default class Practice extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      show: null,
      currentIndex: 0
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
  }

  handleClick(i) {
    const { show } = this.state
    if (i !== show) this.animatedValue.setValue(0)
    this.setState({ show: i }, () => this.flipCard())
  }

  flipCard() {
    Animated.timing(
      this.animatedValue, 
      {
        toValue: this.value >= 90 ? 0 : 180,
        duration: 600
      }
    ).start()
  }

  componentWillMount() {
    this.animatedValue = new Animated.Value(0)
    this.value = 0
    this.animatedValue.addListener(({ value }) => {
      this.value = value
     })
    this.frontInterpolate = this.animatedValue.interpolate({ 
      inputRange: [0, 180],
      outputRange: ['0deg', '180deg']
    })
    this.backInterpolate = this.animatedValue.interpolate({ 
      inputRange: [0, 180],
      outputRange: ['180deg', '360deg']
    })
  }

  handleScroll(event) {
    const xOffset = event.nativeEvent.contentOffset.x
    if (xOffset % deviceWidth === 0) this.setState({ currentIndex: xOffset / deviceWidth })
  }

  render() {
    const { show, currentIndex } = this.state
    const { savedCards } = this.props.screenProps
    const frontAnimatedStyle = {
      transform: [
        { rotateX: this.frontInterpolate }
      ]
    }
    const backAnimatedStyle = {
      transform: [
        { rotateX: this.backInterpolate }
      ]
    }
    return (
      <View style={styles.container}>
        {
          savedCards.length < 1 
            ? <EmptyList navigation={this.props.navigation}></EmptyList> 
            : ''
        }
        <ProgressBar 
          currentIndex={currentIndex} 
          length={savedCards.length} />
        <ScrollView 
          horizontal 
          pagingEnabled 
          onScroll={this.handleScroll} >
          {
            savedCards.map((card, i) => {
              const $card = show === i
                ? <View>
                    <Animated.View style={[styles.card, frontAnimatedStyle]}>
                      <Text style={styles.question}>
                        {card.question}
                      </Text>
                    </Animated.View>
                    <Animated.View style={[backAnimatedStyle, styles.card, styles.cardBack]}>
                      <Text style={styles.answer}>
                        {card.answer}
                      </Text>
                    </Animated.View>
                  </View>
                : <View style={styles.card}>
                    <Text style={styles.question}>
                      {card.question}
                    </Text>
                  </View>
              return (
                <View style={styles.cardContainer} key={i}>
                  {$card}
                  <TouchableHighlight onPress={() => this.handleClick(i)} underlayColor="white">
                    <Text style={styles.show}>{'\uf35a Show Answer'}</Text>
                  </TouchableHighlight>
                </View>
              )
            })
          }
        </ScrollView>
      </View>
    )
  }
}

const deviceWidth = Dimensions.get('window').width
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(233, 236, 239)',
    alignItems: 'center'
  },
  cardContainer: {
    backgroundColor: 'rgb(233, 236, 239)',
    width: deviceWidth,
    alignItems: 'center'
  },
  card: {
    backgroundColor: 'white',
    width: 300,
    height: 250,
    marginTop: 20,
    padding: 20,
    shadowColor: 'gray',
    shadowRadius: 5,
    shadowOpacity: 0.1,
    shadowOffset: {
      width: -3,
      height: 3
    },
    justifyContent: 'center',
    alignItems: 'center',
    backfaceVisibility: 'hidden'
  },
  cardBack: {
    position: 'absolute',
    top: 0
  },
  question: {
    marginTop: 2,
    fontSize: 20,
    paddingHorizontal: 10
  },
  answer: {
    paddingVertical: 10,
    paddingHorizontal: 15
  },
  show: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontFamily: 'awesome',
    marginRight: 10,
    color: 'rgb(108, 209, 165)'
  }
})
