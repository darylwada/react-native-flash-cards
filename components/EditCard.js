import React from 'react'
import { StyleSheet, TextInput, View, Text, TouchableHighlight } from 'react-native'

export default function EditCard({ i, handleInput, handleEditSubmit, question, answer }) {
  return (
    <View style={styles.card}>
      <TextInput 
        underlineColorAndroid='transparent'
        multiline
        style={styles.questionInput}
        onChangeText={question => handleInput({ question })}
        value={question}
      />
      <TextInput 
        underlineColorAndroid='transparent'
        multiline
        style={styles.answerInput}
        onChangeText={answer => handleInput({ answer })}
        value={answer}
      />
      <View style={styles.buttonRow}>
        <TouchableHighlight onPress={() => handleEditSubmit(i)}>
          <Text style={styles.save}>{'\uf058'}</Text>
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
    paddingTop: 0,
    borderColor: 'rgb(211,211,211)', 
    borderBottomWidth: 1,
    maxHeight: 80
  },
  answerInput: {
    paddingBottom: 9,
    paddingTop: 9,
    paddingHorizontal: 20,
    borderColor: 'rgb(211,211,211)', 
    borderBottomWidth: 1,
    maxHeight: 80
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 15
  },
  save: {
    fontFamily: 'awesome',
    marginRight: 10,
    color: 'rgb(108, 209, 165)'
  }
})
