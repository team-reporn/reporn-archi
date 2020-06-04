import React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'

export default class Title2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    if (this.props.dark) {
      this.bg = require('../../assets/img/title/title1-dark.png')
    } else {
      this.bg = require('../../assets/img/title/title1.png')
    }
  }

  render() {
    return (
      <View style={styles.main}>
        <Image source={this.bg} style={styles.image}></Image>
        <Text style={styles.text}>{this.props.content}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    width: 300,
    marginBottom: 30,
    marginLeft: 50,
  },
  image: {
    transform: [{ rotate: '180deg' }],
  },
  text: {
    fontSize: 28,
    textTransform: 'uppercase',
    color: 'white',
    position: 'absolute',
    marginTop: 8,
    marginLeft: 50,
  },
})
