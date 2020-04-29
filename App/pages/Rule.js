// in this, define all games and select one randomly - On button go select go to Quiz
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
        navigation.navigate('Question', {
          title: 'Question',
          questions: culture,
          color: '#799496',
        })
      }
    />
  </View>
)
