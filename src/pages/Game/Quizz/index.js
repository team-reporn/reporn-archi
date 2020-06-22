import React, { useState } from 'react'
import { View, StyleSheet, ImageBackground, Text } from 'react-native'
import useSocket from '../../../App/Socket/useSocket'

import TitleQuestion from '../../../components/titles/TitleQuestion'
import QuizzBtn from '../../../components/btn/QuizzBtn'
import PornnewsFlash from '../../../components/pornnewsFlash'

import culture from '../../../contents/cultureData'

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
})

const Quiz = ({ navigation }) => {
  const [correctCount, setCorrectCount] = useState(0)
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0)
  const [answered, setAnswered] = useState(false)
  const [answerCorrect, setAnswerCorrect] = useState(false)
  const [step, setStep] = useState(0)

  answer = (correct) => {
    setAnswered(true)
    if (correct) {
      setCorrectCount(correctCount + 1)
      setAnswerCorrect(true)
    } else {
      setAnswerCorrect(false)
    }
  }

  const { game } = useSocket()

  const questions = culture
  const question = questions[activeQuestionIndex]

  return (
    <View style={styles.container}>
      {step === 0 && (
        <ImageBackground
          source={require('../../../assets/img/backgrounds/Question1.png')}
          style={styles.background}
        >
          <TitleQuestion content={question.question} style={styles.title} />
          {question.answers.map((answer) => (
            <QuizzBtn
              key={answer.id}
              content={answer.text}
              style={styles.text}
              rotation
              onPress={() => {
                if (answer.correct == true) {
                  setStep(1)
                } else {
                  setStep(2)
                }
              }}
            />
          ))}
        </ImageBackground>
      )}
      {step === 1 && (
        <ImageBackground
          source={require('../../../assets/img/backgrounds/Bon.png')}
          style={styles.background}
        >
          <Text>Bien joué</Text>

          <Text>C’était la sextape de Kim Kardashiam & Ray Jay</Text>

          <Text>
            La sextape a été vue 55 fois en par minute durant toute l’année 2018
            et continue toujours de lui rapporter de l’argent. Elle a été
            diffusé avec son accord et surtout celui de sa mère
          </Text>

          <PornnewsFlash></PornnewsFlash>
        </ImageBackground>
      )}
      {step === 2 && (
        <ImageBackground
          source={require('../../../assets/img/backgrounds/Mauvais.png')}
          style={styles.background}
        >
          <Text>Ou pas</Text>
        </ImageBackground>
      )}
    </View>
  )
}

export default Quiz
