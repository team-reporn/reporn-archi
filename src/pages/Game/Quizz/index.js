import React, { useState } from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import useSocket from '../../../App/Socket/useSocket'

import TitleQuestion from '../../../components/titles/TitleQuestion'
import MainBtn from '../../../components/btn/MainBtn'

import {
  Button as BigButton,
  ButtonContainer,
} from '../../../components/Button'

import culture from '../../../contents/cultureData'

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '30%',
    // flex: 2,
    // flexDirection: 'column',
  },
  buttons: {
    marginTop: 50,
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
      setAnswerCorrect(true)
    } else {
      setAnswerCorrect(false)
    }
  }

  const { game, setSuccess } = useSocket()

  const questions = culture
  const question = questions[activeQuestionIndex]

  return (
    <View style={styles.container}>
      <TitleQuestion content={question.question} taille2 />
      {/* {question.answers.map((answer) => (
        <QuizzBtn
          key={answer.id}
          content={answer.text}
          style={styles.text}
          rotation
          onPress={() => {
            navigation.navigate('EndGame', {
              title: 'EndGame',
            })
          }}
        />
      ))} */}
      <View style={styles.buttons}>
        <MainBtn
          content={questions[0].answers[0].text}
          style={styles.text}
          rotation1
          onPress={() => {
            setSuccess(questions[0].answers[0].correct)
            navigation.navigate('EndGame', {
              title: 'EndGame',
            })
          }}
        />
        <MainBtn
          content={questions[0].answers[1].text}
          style={styles.text}
          rotation2
          onPress={() => {
            setSuccess(questions[0].answers[1].correct)
            navigation.navigate('EndGame', {
              title: 'EndGame',
            })
          }}
        />
        <MainBtn
          content={questions[0].answers[2].text}
          style={styles.text}
          rotation3
          onPress={() => {
            setSuccess(questions[0].answers[2].correct)
            navigation.navigate('EndGame', {
              title: 'EndGame',
            })
          }}
        />
        <MainBtn
          content={questions[0].answers[3].text}
          style={styles.text}
          rotation4
          onPress={() => {
            setSuccess(questions[0].answers[3].correct)
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
