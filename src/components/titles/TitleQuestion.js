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
    let taille = ''
    this.props.taille1 ? (taille = styles.taille1) : ''
    this.props.taille2 ? (taille = styles.taille2) : ''
    this.props.taille3 ? (taille = styles.taille3) : ''
    this.props.taille4 ? (taille = styles.taille4) : ''

    if (this.state.fontsLoaded) {
      return (
        <View style={styles.container}>
          <Image
            source={require('../../assets/img/scotch/TitreQuestion.png')}
            style={styles.image}
          />
          <Text style={[styles.text, taille]}>{this.props.content}</Text>
        </View>
      )
    } else {
      return <AppLoading />
    }
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  image: {
    width: '100%',
    height: 80,
    marginTop: 45,
    marginLeft: 40,
  },
  taille1: {
    width: '92%',
    paddingLeft: 50,
    paddingTop: 0,
  },
  text: {
    fontFamily: 'MaimDisfigured',
    textAlign: 'left',
    fontSize: 23,
    color: 'white',
    position: 'absolute',
    width: '70%',
    lineHeight: 26,
    top: 60,
  },
  taille2: {
    width: '60%',
  },
  taille3: {
    width: '60%',
  },
  taille4: {
    width: '60%',
  },
})
