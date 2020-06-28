import React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'
import { Audio } from 'expo-av'
import * as Font from 'expo-font'
import { AppLoading } from 'expo'

let customFonts = {
  vcr: require('../assets/fonts/VCR/VCR_OSD_MONO_1.001.ttf'),
}

export default class Chrono extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      timer: null,
      timerLeft: this.props.duration,
      sound: {},
    }
    if (this.props.duration > 20) {
      console.log('oui')
      this.playSound()
    }
    this.startTimer()
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

  startTimer = () => {
    this.state.timer = setInterval(this.timerCheck, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.state.timer)
  }

  timerCheck = () => {
    this.setState({ timerLeft: this.state.timerLeft - 1 })
    if (this.state.timerLeft <= 0) {
      clearInterval(this.state.timer)
      this.setState({ timer: null })
      // this.state.sound.shouldPlay = false
      this.props.onFinish()
      //this.setState({step: 2, win: false})
    }
  }

  timerCheck = () => {
    this.setState({ timerLeft: this.state.timerLeft - 1 })
    if (this.state.timerLeft <= 0) {
      clearInterval(this.state.timer)
      this.setState({ timer: null })
      this.state.sound.shouldPlay = false
      this.props.onFinish()
      //this.setState({step: 2, win: false})
    }
  }

  playSound = () => {
    try {
      this.state.sound = Audio.Sound.createAsync(
        require('../assets/sound/Timer.wav'),
        { shouldPlay: true }
      )
    } catch (error) {}
  }

  render() {
    if (this.state.fontsLoaded) {
      return (
        <View style={styles.main}>
          <Image
            style={{ transform: [{ scale: 0.5 }] }}
            source={require('../assets/img/scotch/Chrono.png')}
          ></Image>
          <Text style={styles.text}>{this.state.timerLeft}:00:00</Text>
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
    transform: [{ rotate: '-9deg' }],
    width: 165,
    height: 63,
  },
  text: {
    color: 'white',
    position: 'absolute',
    fontFamily: 'vcr',
    fontSize: 20,
  },
})
