import React, { useState } from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import useSocket from '../../../App/Socket/useSocket'

import TitleQuestion from '../../../components/titles/TitleQuestion'
import MainBtn from '../../../components/btn/MainBtn'

import culture from '../../../contents/cultureData'

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '30%',
  },
  buttons: {
    marginTop: 50,
  },
})

const Quiz = ({ navigation }) => {
  const [correctCount, setCorrectCount] = useState(0)
  const [answered, setAnswered] = useState(false)
  const [answerCorrect, setAnswerCorrect] = useState(false)
  const [step, setStep] = useState(0)
  let index = 0

  const { game, setSuccess, setQuestionIndex, QuestionIndex } = useSocket()

  const questions = culture
  const question = questions[QuestionIndex ? (index = 1) : (index = 0)]

  return (
    <View style={styles.container}>
      <TitleQuestion content={question.question} />
      <View style={styles.buttons}>
        <MainBtn
          content={question.answers[0].text}
          style={styles.text}
          rotation1
          onPress={() => {
            setQuestionIndex(true)
            setSuccess(question.answers[0].correct)
            navigation.navigate('EndGame', {
              title: 'EndGame',
            })
          }}
        />
        <MainBtn
          content={question.answers[1].text}
          style={styles.text}
          rotation2
          onPress={() => {
            setQuestionIndex(true)
            setSuccess(question.answers[1].correct)
            navigation.navigate('EndGame', {
              title: 'EndGame',
            })
          }}
        />
        <MainBtn
          content={question.answers[2].text}
          style={styles.text}
          rotation3
          onPress={() => {
            setQuestionIndex(true)
            setSuccess(question.answers[2].correct)
            navigation.navigate('EndGame', {
              title: 'EndGame',
            })
          }}
        />
        <MainBtn
          content={question.answers[3].text}
          style={styles.text}
          rotation4
          onPress={() => {
            setQuestionIndex(true)
            setSuccess(question.answers[3].correct)
            navigation.navigate('EndGame', {
              title: 'EndGame',
            })
          }}
        />
      </View>
    </View>
  )
}

export default Quiz
