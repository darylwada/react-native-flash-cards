import React from 'react'
import { StyleSheet, View, Animated } from 'react-native'

export default class ProgressBar extends React.Component {
  constructor(props) {
    super(props)
    const { currentIndex, length } = this.props
    const progress = (currentIndex + 1) / length * 300
    this.state = {
      progress: new Animated.Value(progress)
    }
  }

  componentDidUpdate() {
    const { currentIndex, length } = this.props
    const progress = (currentIndex + 1) / length * 300
    Animated.timing(
      this.state.progress, 
      { 
        toValue: progress,
        duration: 300
      }
    ).start()
  }

  render() {
    const { progress } = this.state
    return (
      <View style={styles.scrollbar}>
        <Animated.View style={[styles.progress, { width: progress }]}>
        </Animated.View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  scrollbar: {
    marginTop: 20,
    width: 300,
    height: 20,
    borderWidth: 1,
    borderColor: 'rgb(211,211,211)'
  },
  progress: {
    height: '100%',
    backgroundColor: 'rgb(108, 209, 165)'
  }
})