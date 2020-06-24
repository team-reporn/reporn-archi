import React from 'react'
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

export default class NextBtn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View>
        <TouchableWithoutFeedback style={{display: "flex", justifyContent: "center", alignItems: "center"}} onPress={this.props.onPress}>
          <Image style={{}} source={require('../../assets/img/btn/Next.png')}></Image>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}

const styles = StyleSheet.create({})
