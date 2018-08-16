import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import EditCard from '../components/EditCard'
import ReadCard from '../components/ReadCard'
import EmptyList from '../components/EmptyList'

export default class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      question: '',
      answer: '',
      editing: null
    }
    this.handleEditClick = this.handleEditClick.bind(this)
    this.handleEditSubmit = this.handleEditSubmit.bind(this)
    this.handleInput = this.handleInput.bind(this)
  }

  handleEditClick(i) {
    if (this.state.editing) return
    const { question, answer } = this.props.screenProps.savedCards[i]
    this.setState({ question, answer, editing: i })
  }

  handleEditSubmit(i) {
    const { question, answer } = this.state
    const newCard = { question, answer}
    this.props.screenProps.handleEditSubmit(newCard, i)
    this.setState({ editing: null })
  }

  handleInput(pair) {
    this.setState(pair)
  }

  render() {
    const { editing } = this.state
    const { handleDelete, savedCards } = this.props.screenProps
    const $cards = savedCards.map((card, i) => {
      if (i === editing) {
        return (
          <EditCard
            question={card.question}
            answer={card.answer}
            handleInput={this.handleInput}
            handleEditSubmit={this.handleEditSubmit}
            i={i}
            key={i}>
          </EditCard>
        )
      }
      return (
        <ReadCard
          question={card.question}
          answer={card.answer}
          handleEditClick={this.handleEditClick}
          handleDelete={handleDelete}
          i={i}
          key={i}>
        </ReadCard>
      )
    })
    

    return (
      <ScrollView contentContainerStyle={styles.container}>
        {
          savedCards.length < 1 
            ? <EmptyList navigation={this.props.navigation}></EmptyList> 
            : ''
        }
        {$cards}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'rgb(233, 236, 239)',
    alignItems: 'center',
  }
})
