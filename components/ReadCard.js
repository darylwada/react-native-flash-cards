import React from 'react'
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native'
import Swipeout from 'react-native-swipeout'

export default function ReadCard({ question, answer, handleEditClick, handleDelete, i }) {
  const swipeoutBtns = [
    {
      component: (
        <View style={styles.delete}>
          <Text style={styles.deleteText}>Delete</Text>
        </View>
      ),
      onPress: () => handleDelete(i),
    }
  ]
  return (
    <Swipeout right={swipeoutBtns} autoClose={true} style={styles.card}>
      <Text style={styles.question}>{question}</Text>
      <Text style={styles.answer}>{answer}</Text>
      <View style={styles.buttons}>
        <TouchableHighlight onPress={() => handleEditClick(i)} underlayColor="white">
          <Text style={styles.edit}>{'\uf044'}</Text>
        </TouchableHighlight>
      </View>
    </Swipeout>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    width: 300,
    minHeight: 100,
    marginTop: 20,
    shadowColor: 'gray',
    shadowRadius: 5,
    shadowOpacity: 0.1,
    shadowOffset: {
      width: -3,
      height: 3
    },
    justifyContent: 'flex-start'
  },
  question: {
    marginTop: 10,
    fontSize: 18,
    paddingHorizontal: 15
  },
  answer: {
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 15
  },
  edit: {
    fontFamily: 'awesome',
    marginRight: 10,
    color: 'rgb(108, 209, 165)'
  },
  delete: {
    backgroundColor: 'rgb(255, 128, 128)', 
    height: '100%',
    justifyContent: 'center'
  },
  deleteText: {
    color: 'white',
    textAlign: 'center'
  }
})
