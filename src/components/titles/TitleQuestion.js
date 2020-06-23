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
        <View style={styles.container}>
          <Image
            source={require('../../assets/img/scotch/TitreQuestion.png')}
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
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginBottom: '10%',
  },
  image: {
    width: '95%',
    height: 80,
    marginLeft: 60,
  },
  text: {
    paddingTop: 15,
    fontFamily: 'MaimDisfigured',
    width: '60%',
    textAlign: 'center',
    fontSize: 28,
    color: 'white',
    position: 'absolute',
  },
})
