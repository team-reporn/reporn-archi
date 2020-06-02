import React from 'react'
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default class QuizzBtn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.pressed = false

    if (this.props.blue) {
      this.state.startBtn = require('../../assets/img/btn/AnswerBtnBlue.png')
      this.state.pressedBtn = require('../../assets/img/btn/AnswerBtnWhite.png')
    } else {
      this.state.pressedBtn = require('../../assets/img/btn/AnswerBtnBlue.png')
      this.state.startBtn = require('../../assets/img/btn/AnswerBtnWhite.png')
    }
  }

  render() {
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max))
    }

    let textColor,
      textPressedColor,
      rotation = getRandomInt(4)
    if (this.props.blue) {
      textColor = styles.textWhite
      textPressedColor = styles.textBlue
    } else {
      textColor = styles.textBlue
      textPressedColor = styles.textWhite
    }

    if (rotation == 0) {
      rotation = styles.rotation1
    } else if (rotation == 1) {
      rotation = styles.rotation2
    } else if (rotation == 2) {
      rotation = styles.rotation3
    } else if (rotation == 3) {
      rotation = styles.rotation4
    }

    return (
      <View>
        <TouchableOpacity
          style={[styles.main, rotation]}
          onPress={this.props.onPress}
          onPressIn={() => {
            this.setState({ pressed: true })
          }}
          onPressOut={() => {
            this.setState({ pressed: false })
          }}
        >
          <ImageBtn
            pressed={this.state.pressed}
            startBtn={this.state.startBtn}
            pressedBtn={this.state.pressedBtn}
          />
          <Text
            style={[
              styles.text,
              this.state.pressed ? textPressedColor : textColor,
            ]}
          >
            {this.props.content}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  text: {
    position: 'absolute',
    textTransform: 'uppercase',
  },
  textBlue: {
    color: 'black',
  },
  textWhite: {
    color: 'white',
  },
  rotation1: {
    transform: [{ rotate: '-6deg' }],
  },
  rotation2: {
    transform: [{ rotate: '12deg' }],
  },
  rotation3: {
    transform: [{ rotate: '-3deg' }],
  },
  rotation4: {
    transform: [{ rotate: '9deg' }],
  },
})

let ImageBtn = ({ pressed, startBtn, pressedBtn }) => {
  return pressed ? (
    <Image style={styles.child} source={pressedBtn}></Image>
  ) : (
    <Image style={styles.child} source={startBtn}></Image>
  )
}
