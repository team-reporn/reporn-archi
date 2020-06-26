import React from 'react'
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

export default class NextBtn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  playSound = ()=> {
    try {
        const { sound: soundObject, status } = Audio.Sound.createAsync(
          require('../../assets/sound/dechirure_2.wav'),
          { shouldPlay: true }
        );
      } catch (error) {
      }
}

onPress = () => {
  this.playSound()
  this.props.onPress()
}

  render() {
    return (
      <View>
        <TouchableWithoutFeedback style={{display: "flex", justifyContent: "center", alignItems: "center"}} onPress={this.onPress}>
          <Image style={{}} source={require('../../assets/img/btn/Next.png')}></Image>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}

const styles = StyleSheet.create({})
