import React, { useState } from 'react'
import { View, StyleSheet, Image } from 'react-native'
// import useSocket from '../../App/Socket/useSocket'

import TitleQuestion from '../../../components/titles/TitleQuestion'
import ActeurBtn from '../../../components/btn/ActeurBtn'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  image: {
    transform: [{ rotate: '22deg' }],
  },
})

const Quiz = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TitleQuestion
        content="qui ... est connu pour ses vidéos amateur ?"
        taille1
      />
      <ActeurBtn
        source={require('./assets/Amateur_Rep1.png')}
        style={styles.image}
        position1
        onPress={() => {
          navigation.navigate('EndGame', {
            title: 'EndGame',
          })
        }}
      />
      <ActeurBtn
        source={require('./assets/Amateur_Rep2.png')}
        style={styles.image}
        position2
        onPress={() => {
          navigation.navigate('EndGame', {
            title: 'EndGame',
          })
        }}
      />
    </View>
  )
}

export default Quiz
