import React from 'react'
import { View, Text } from 'react-native'

import useSocket from '../../App/Socket/useSocket'

let Theme = ({ navigation }) => {
  const { game } = useSocket()
  console.log('toto')
  console.log(game)

  return (
    <View>
      <Text>categories</Text>
      <Text>{game.theme}</Text>
    </View>
  )
}

export default Theme
