import React from 'react'
import { StyleSheet, View } from 'react-native'
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
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(233, 236, 239)',
    alignItems: 'center',
  }
})
