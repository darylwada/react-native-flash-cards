import React from 'react'
import { StyleSheet, View, ScrollView, Text, Dimensions } from 'react-native'
import EmptyList from '../components/EmptyList'

export default class Practice extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 

    }
  }

  render() {
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
          pagingEnabled
          // showsHorizontalScrollIndicator={false}
          >
          {
            savedCards.map((card, i) => {
              return (
                <View style={styles.card} key={i}>
                  <Text style={styles.question}>{card.question}</Text>
                  <Text style={styles.answer}>{card.answer}</Text>
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
    // alignItems: 'center',
  },
  card: {
    backgroundColor: 'white',
    width: deviceWidth,
    height: 100,
    marginTop: 20,
    // marginRight: 50,
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
  }
})
