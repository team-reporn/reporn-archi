import React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'

export default class TitleQuestion extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View>
        <Image
          source={require('../../assets/img/scotch/TitreQuestion.png')}
          style={styles.image}
        />
        <Text style={styles.text}>{this.props.content}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    width: 357,
    height: 80,
    marginLeft: 18,
    marginRight: -15,
  },
  text: {
    fontSize: 28,
    textTransform: 'uppercase',
    color: 'white',
    position: 'absolute',
  },
})
