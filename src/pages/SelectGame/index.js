// in this, define all games and select one randomly - On button go select go to Quiz
import React from 'react'
import { Button, ButtonContainer } from '../components/Button'
import { View, StyleSheet, Text, Image } from 'react-native'

import culture from '../datas/culture'
import troudumonde from '../datas/troudumonde'
import parodie from '../datas/parodie'

export default ({ navigation }) => (
  <View>
    <Button
      key="QUESTION"
      text="QUESTION"
      onPress={() =>
        navigation.navigate('Quiz', {
          title: 'Quiz',
          questions: culture,
          color: '#799496',
        })
      }
    />
  </View>
)
