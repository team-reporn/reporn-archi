import React from 'react'
import { View, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native'

export default class LinkBtn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    let position = ''
    this.props.position1 ? (position = styles.position1) : ''
    this.props.position2 ? (position = styles.position2) : ''

    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.props.onPress}>
          <Image
            style={[styles.image, position]}
            source={this.props.source}
          ></Image>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    color: 'blue',
  },
  image: {
    transform: [{ rotate: '22deg' }],
    width: '90%',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
  },
  position1: {
    marginLeft: 80,
  },
  position2: {
    marginRight: 80,
    marginTop: -280,
  },
})
