import React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'
import { AppLoading } from 'expo'
import * as Font from 'expo-font'

let customFonts = {
  MaimDisfigured: require('../../assets/fonts/MainDisfigured/MaimDisfigured.ttf'),
}

export default class TitleQuestion extends React.Component {
  constructor(props) {
    super(props)
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
    if (this.state.fontsLoaded) {
      return (
        <View style={styles.main}>
          <Image
            source={require('../../assets/img/scotch/BonOuMauvais.png')}
            style={styles.image}
          />
          <Text style={styles.text}>{this.props.content}</Text>
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
    width: '100%',
  },
  image: {
    width: '89%',
    height: 85,
    transform: [{ rotate: '10deg' }],
  },
  text: {
    fontFamily: 'MaimDisfigured',
    textAlign: 'center',
    fontSize: 40,
    color: 'white',
    position: 'absolute',
  },
})
