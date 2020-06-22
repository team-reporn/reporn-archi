import React from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native'
import { Header } from 'react-native/Libraries/NewAppScreen'

export default class GameHeader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    if (this.props.dark) {
      this.bg = require('../../assets/img/title/TitreLargeNoir.png')
    } else {
      this.bg = require('../../assets/img/title/TitreLargeBleu.png')
    }
  }

  render() {
    return (
      <View style={styles.main}>
        <Image
          style={styles.bg}
          source={require('../../assets/img/headers/gameHeaderBg.png')}
        />
        <View style={styles.content}>
          <View style={{ flexDirection: 'row' }}>
            <BackBtn />
            <UserBtn />
          </View>
          <Text>Ok</Text>
          <ParamBtn />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: 150,
    backgroundColor: 'red',
  },
  bg: {
    height: '100%',
    width: '100%',
    resizeMode: 'stretch',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    top: 0,
    width: '100%',
  },
  btnMargin: {
    margin: 10,
  },
  iconSize: {},
})

let UserBtn = () => {
  return (
    <TouchableOpacity style={styles.btnMargin}>
      <Image
        style={styles.iconSize}
        source={require('../../assets/img/headers/userIco.png')}
      />
    </TouchableOpacity>
  )
}

let BackBtn = () => {
  return (
    <TouchableOpacity style={styles.btnMargin}>
      <Image
        style={styles.iconSize}
        source={require('../../assets/img/headers/retourIco.png')}
      />
    </TouchableOpacity>
  )
}

let ParamBtn = () => {
  return (
    <TouchableOpacity style={styles.btnMargin}>
      <Image
        style={styles.iconSize}
        source={require('../../assets/img/headers/reglageIco.png')}
      />
    </TouchableOpacity>
  )
}
