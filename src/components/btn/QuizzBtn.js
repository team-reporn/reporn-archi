import React from 'react'
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { AppLoading } from 'expo'
import * as Font from 'expo-font'

let customFonts = {
  DIN_Regular: require('../../assets/fonts/Din/regular/D-DIN.ttf'),
  MaimDisfigured: require('../../assets/fonts/MainDisfigured/MaimDisfigured.ttf'),
  DIN_Bold: require('../../assets/fonts/Din/bold/D-DIN-Bold.ttf'),
}

export default class QuizzBtn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.pressed = false

    let imagePath = ''

    this.props.image1
      ? (imagePath = require('../../assets/img/btn/BlancReponse1.png'))
      : ''
    this.props.image2
      ? (imagePath = require('../../assets/img/btn/BlancReponse2.png'))
      : ''
    this.props.image3
      ? (imagePath = require('../../assets/img/btn/BlancReponse3.png'))
      : ''
    this.props.image4
      ? (imagePath = require('../../assets/img/btn/BlancReponse4.png'))
      : ''

    if (this.props.blue) {
      this.state.startBtn = imagePath
      this.state.pressedBtn = require('../../assets/img/btn/AnswerBtnWhite.png')
    } else {
      this.state.pressedBtn = require('../../assets/img/btn/AnswerBtnBlue.png')
      this.state.startBtn = imagePath
    }
  }

  state = {
    fontsLoaded: false,
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts)
    this.setState({ fontsLoaded: true })
  }

  componentDidMount() {
    this._loadFontsAsync()
  }

  render() {
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max))
    }

    let textColor,
      textPressedColor,
      rotation = ''
    if (this.props.blue) {
      textColor = styles.textWhite
      textPressedColor = styles.textBlue
    } else {
      textColor = styles.textBlue
      textPressedColor = styles.textWhite
    }

    this.props.rotation1 ? (rotation = styles.rotation1) : ''
    this.props.rotation2 ? (rotation = styles.rotation2) : ''
    this.props.rotation3 ? (rotation = styles.rotation3) : ''
    this.props.rotation4 ? (rotation = styles.rotation4) : ''

    if (this.state.fontsLoaded) {
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
              source={this.imagePath}
              startBtn={this.state.startBtn}
              pressedBtn={this.state.pressedBtn}
              style={styles.image}
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
    } else {
      return <AppLoading />
    }
  }
}

const styles = StyleSheet.create({
  main: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 14,
  },
  image: {
    width: '80%',
  },
  text: {
    position: 'absolute',
    textTransform: 'uppercase',
    fontFamily: 'DIN_Bold',
    letterSpacing: 1.2,
  },
  textBlue: {
    color: '#2B0CE4',
  },
  textWhite: {
    color: 'white',
  },
  rotation1: {
    transform: [{ rotate: '-2deg' }],
  },
  rotation2: {
    transform: [{ rotate: '5deg' }],
  },
  rotation3: {
    transform: [{ rotate: '3deg' }],
  },
  rotation4: {
    transform: [{ rotate: '0deg' }],
  },
})

let ImageBtn = ({ pressed, startBtn, pressedBtn }) => {
  return pressed ? (
    <Image style={styles.child} source={pressedBtn}></Image>
  ) : (
    <Image style={styles.child} source={startBtn}></Image>
  )
}
