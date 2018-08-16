import React from 'react'
import { StyleSheet, TextInput, View, Button } from 'react-native'

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
        <Button
          onPress={() => handleEditSubmit(i)}
          title="Save"
          color="white"
        />
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
    shadowColor: 'black',
    shadowRadius: 2,
    shadowOpacity: 0.1,
    justifyContent: 'flex-start'
  },
  questionInput: {
    marginTop: 2,
    fontSize: 20,
    paddingHorizontal: 10,
    borderColor: 'rgb(211,211,211)', 
    borderWidth: 1
  },
  answerInput: {
    marginTop: 2,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: 'rgb(211,211,211)', 
    borderWidth: 1
  },
  button: {
    marginTop: 20,
    width: 60,
    marginLeft: '50%',
    transform: [{ translateX: -30 }],
    justifyContent: 'center',
    backgroundColor: 'rgb(23,41,61)',
    borderRadius: 5
  }
})
