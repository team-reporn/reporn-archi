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
        <View>
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
  image: {
    width: '95%',
    height: 80,
    marginRight: 0,
    marginLeft: 40,
    marginBottom: '10%',
  },
  text: {
    fontFamily: 'MaimDisfigured',
    width: '100%',
    paddingLeft: 100,
    paddingRight: 70,
    textAlign: 'center',
    fontSize: 28,
    color: 'white',
    position: 'absolute',
  },
})
