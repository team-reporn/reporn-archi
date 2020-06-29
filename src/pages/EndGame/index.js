import React, { useEffect } from 'react'
import { Button, ButtonContainer } from '../../components/Button'
import { View, StyleSheet, Text, Image } from 'react-native'
import { Audio } from 'expo-av'

import useSocket from '../../App/Socket/useSocket'

import TitleAnswer from '../../components/titles/TitleAnswer'
import TitleAnswer2 from '../../components/titles/TitleAnswer2'
import Answer from '../../components/Paragraph/Answer'
import PornnewsFlash from '../../components/Paragraph/pornnewsFlash'

import NextButton from '../../components/btn/NextBtn'

import content from './content'

const questions = content
let gameIndex = 0

let getAnswerfromGame = ({ game }) => {
  const { QuestionIndex } = useSocket()
  switch (game) {
    case 'tabou':
      return 4
      break

    case 'cultureQ':
      return QuestionIndex ? 0 : 3
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

export default ({ navigation, setBackGround }) => {
  const { changeGame, game, setSuccess, success } = useSocket()
  gameIndex = getAnswerfromGame(game)
  useEffect(() => {
    if (success) {
      if (gameIndex == 0) {
        setBackGround(require('../../assets/img/backgrounds/Question1Bon.png'))
      } else if (gameIndex == 1) {
        setBackGround(require('../../assets/img/backgrounds/WiwaldoBon.png'))
      } else if (gameIndex == 2) {
        setBackGround(require('../../assets/img/backgrounds/ActeurXBon.png'))
      } else if (gameIndex == 4) {
        setBackGround(require('../../assets/img/backgrounds/TabouBon.png'))
      }
    } else {
      if (gameIndex == 0) {
        setBackGround(
          require('../../assets/img/backgrounds/Question1Mauvais.png')
        )
      } else if (gameIndex == 1) {
        setBackGround(
          require('../../assets/img/backgrounds/WiwaldoMauvais.png')
        )
      } else if (gameIndex == 2) {
        setBackGround(require('../../assets/img/backgrounds/ActeurXBon.png'))
      } else if (gameIndex == 4) {
        setBackGround(require('../../assets/img/backgrounds/TabouMauvais.png'))
      }
    }
  }, [])
  // playSound = () => {
  //   if (success == 'ou Pas !') {
  //     try {
  //       const {
  //         sound: soundObject,
  //         status,
  //       } = Audio.Sound.createAsync(
  //         require('../../assets/sound/mm_desaccord_1.wav'),
  //         { shouldPlay: true }
  //       )
  //     } catch (error) {}
  //   } else {
  //     try {
  //       const {
  //         sound: soundObject,
  //         status,
  //       } = Audio.Sound.createAsync(
  //         require('../../assets/sound/mm_comprehensif_1.wav'),
  //         { shouldPlay: true }
  //       )
  //     } catch (error) {}
  //   }
  // }
  // playSound()

  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image
          style={styles.picto}
          source={
            success
              ? require('../../assets/img/pictos/Bon.png')
              : require('../../assets/img/pictos/Mauvais.png')
          }
        />
      </View>
      <TitleAnswer content={success ? 'BIeN JOuÉ !' : 'ou Pas !'} />
      <TitleAnswer2
        content={questions[gameIndex].content}
        content2={questions[gameIndex].content2}
      />
      <Answer content={questions[gameIndex].paragraph} />
      <PornnewsFlash content={questions[gameIndex].pornews}></PornnewsFlash>
      <View style={styles.button}>
        {game.round.laps < 4 ? (
          <NextButton
            key="READY"
            onPress={() => {
              changeGame()
              navigation.navigate('SelectGame', {
                title: 'SelectGame',
              })
            }}
          />
        ) : (
          <NextButton
            key="Shake"
            onPress={() => {
              changeGame()
              navigation.navigate('Shake', {
                title: 'Shake',
              })
            }}
          />
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  button: {
    marginTop: 40,
    marginLeft: 220,
    // zIndex: -1,
  },
  image: {
    width: '100%',
    marginBottom: 25,
    marginTop: 55,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:"blue"
  },
  picto: {
    width: 60,
    height: 60,
  },
})
