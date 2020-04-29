import React from 'react'
import { Button, ButtonContainer } from '../components/Button'
import { View, StyleSheet, Text, Image } from 'react-native'

import culture from '../datas/culture'

export default ({ navigation }) => (
  <View>
    <Button
      key="QUESTION"
      text="QUESTION"
      onPress={() =>
        navigation.navigate('Rule', {
          title: 'Quiz',
          questions: culture,
          color: '#799496',
        })
      }
    />
  </View>
)
