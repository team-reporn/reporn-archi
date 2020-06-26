import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { AppLoading } from 'expo'
import * as Font from 'expo-font'

let customFonts = {
  DIN_Regular: require('../../assets/fonts/Din/regular/D-DIN.ttf'),
  MaimDisfigured: require('../../assets/fonts/MainDisfigured/MaimDisfigured.ttf'),
  DIN_Bold: require('../../assets/fonts/Din/bold/D-DIN-Bold.ttf'),
}

export default class PornnewsFlash extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
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
    if (this.state.fontsLoaded) {
      return (
        <View style={styles.main}>
          <TouchableOpacity
            onPress={() => {
              this.setState({ show: !this.state.show })
            }}
          >
            <Image
              style={styles.picto}
              source={require('../../assets/img/pictos/Flash.png')}
            />
          </TouchableOpacity>
          {this.state.show && (
            <View style={styles.content}>
              <Image
                style={styles.image}
                source={require('../../assets/img/pornNews/Flash.png')}
              />
              <View style={styles.textCtn}>
                <Text style={styles.title}>Pornews Flash</Text>
                <Text style={styles.text}>{this.props.content}</Text>
                <Text style={styles.text2}>
                  POUR SAVOIR PLUS, RDV après la partie, sur pornews à l’accueil
                </Text>
              </View>
            </View>
          )}
        </View>
      )
    } else {
      return <AppLoading />
    }
  }
}

const styles = StyleSheet.create({
  main: {
    // position: 'absolute',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  content: {
    position: 'absolute',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: '100%',
    zIndex: -1,
    height: 480,
  },
  picto: {
    width: 90,
    height: 90,
  },
  textCtn: {
    position: 'absolute',
    padding: '5%',
  },
  title: {
    fontFamily: 'MaimDisfigured',
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 20,
  },
  text: {
    fontFamily: 'DIN_Regular',
    color: 'white',
    textAlign: 'left',
    fontSize: 13,
    marginBottom: 13,
  },
  text2: {
    fontFamily: 'DIN_Regular',
    color: 'white',
    textAlign: 'left',
    fontSize: 13,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'stretch',
  },
})
