import React from 'react'
import { View, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native'

export default class LinkBtn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View>
        <TouchableWithoutFeedback onPress={this.props.onPress}>
          <Image style={{}} source={this.props.source}></Image>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    color: 'blue',
  },
})
