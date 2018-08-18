import React from 'react'
import { StyleSheet, View, ScrollView, Text, Dimensions, TouchableHighlight } from 'react-native'
import EmptyList from '../components/EmptyList'

export default class Practice extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      show: null
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(i) {
    if (i === this.state.show) this.setState({ show: null })
    else this.setState({ show: i })
  }

  render() {
    const { show } = this.state
    const { savedCards } = this.props.screenProps
    return (
      <View style={styles.container}>
        {
          savedCards.length < 1 
            ? <EmptyList navigation={this.props.navigation}></EmptyList> 
            : ''
        }
        <ScrollView
          horizontal
          pagingEnabled>
          {
            savedCards.map((card, i) => {
              return (
                <View style={styles.card} key={i}>
                  <Text style={styles.question}>{card.question}</Text>
                  <TouchableHighlight onPress={() => this.handleClick(i)} underlayColor="white">
                    <Text style={styles.show}>{'\uf35a Show Answer'}</Text>
                  </TouchableHighlight>
                  <Text style={styles.answer}>{show === i ? card.answer : ''}</Text>
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
  },
  card: {
    backgroundColor: 'white',
    width: deviceWidth,
    height: 100,
    marginTop: 20,
    shadowColor: 'black',
    shadowRadius: 2,
    shadowOpacity: 0.1,
    justifyContent: 'flex-start'
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
