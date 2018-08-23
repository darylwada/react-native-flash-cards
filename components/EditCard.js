import React from 'react'
import { StyleSheet, TextInput, View, Text, TouchableHighlight } from 'react-native'

export default function EditCard({ i, handleInput, handleEditSubmit, question, answer }) {
  return (
    <View style={styles.card}>
      <TextInput 
        style={styles.questionInput}
        onChangeText={question => handleInput({ question })}
        value={question}
      />
      <TextInput 
        style={styles.answerInput}
        onChangeText={answer => handleInput({ answer })}
        value={answer}
      />
      <View style={styles.button}>
        <TouchableHighlight onPress={() => handleEditSubmit(i)}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableHighlight>
      </View>
    </View>
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
  questionInput: {
    marginTop: 10,
    fontSize: 18,
    paddingHorizontal: 15,
    borderColor: 'rgb(211,211,211)', 
    borderBottomWidth: 1
  },
  answerInput: {
    marginTop: 2,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderColor: 'rgb(211,211,211)', 
    borderBottomWidth: 1
  },
  button: {
    marginTop: 20,
    marginBottom: 10,
    width: 50,
    height: 30,
    marginLeft: '50%',
    transform: [{ translateX: -30 }],
    justifyContent: 'center',
    backgroundColor: 'rgb(23,41,61)',
    borderRadius: 5
  },
  buttonText: {
    textAlign: 'center',
    color: 'white'
  }
})
