import React from 'react'
import { Button, ButtonContainer } from '../../components/Button'
import { View, StyleSheet, Text, Image } from 'react-native'

import useSocket from '../../App/Socket/useSocket'

import TitleAnswer from '../../components/titles/TitleAnswer'
import TitleAnswer2 from '../../components/titles/TitleAnswer2'
import Answer from '../../components/Paragraph/Answer'
import PornnewsFlash from '../../components/Paragraph/pornnewsFlash'
import SelectGame from '../SelectGame'

import content from './content'

const questions = content
let gameIndex = 0

let getAnswerfromGame = ({ game }) => {
  switch (game) {
    case 'tabou':
      return 4
      break

    case 'cultureQ':
      return 0
      break

    case 'acteurX':
      return 2
      break

    case 'ouEst':
      return 1
      break

    default:
      throw 'non reconized game ' + game
      break
  }
}

export default ({ navigation }) => {
  const { changeGame, game } = useSocket()
  gameIndex = getAnswerfromGame(game)
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/img/pictos/Bon.png')}
        style={styles.image}
      />
      <TitleAnswer content="BIeN JOuÉ !" />
      <TitleAnswer2
        content={questions[gameIndex].content}
        content2={questions[gameIndex].content2}
      />
      <Answer content={questions[gameIndex].paragraph} />
      <PornnewsFlash content={questions[gameIndex].pornews}></PornnewsFlash>
      {game.round.laps < 4 ? (
        <Button
          key="QUESTION"
          text="QUESTION"
          onPress={() => {
            changeGame()
            navigation.navigate('SelectGame', {
              title: 'SelectGame',
            })
          }}
        />
      ) : (
        <Button
          key="Shake"
          text="Shake"
          onPress={() => {
            changeGame()
            navigation.navigate('Shake', {
              title: 'Shake',
            })
          }}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    marginBottom: 30,
    width: 64,
    height: 64,
  },
})
