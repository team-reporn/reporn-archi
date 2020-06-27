import React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'
import { AppLoading } from 'expo'
import * as Font from 'expo-font'

let customFonts = {
  DIN_Regular: require('../../assets/fonts/Din/regular/D-DIN.ttf'),
  DIN_Bold: require('../../assets/fonts/Din/bold/D-DIN-Bold.ttf'),
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
            source={require('../../assets/img/scotch/Feuille.png')}
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
    marginTop: -25,
    zIndex: -1,
    width: '100%',
  },
  image: {
    width: '76%',
    height: 200,
  },
  text: {
    fontFamily: 'DIN_Regular',
    width: '100%',
    textAlign: 'left',
    fontSize: 13,
    color: 'black',
    position: 'absolute',
    width: '52%',
    lineHeight: 15,
  },
})
