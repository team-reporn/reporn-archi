import React, { useState } from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import useSocket from '../../../App/Socket/useSocket'

import TitleQuestion from '../../../components/titles/TitleQuestion'
import TitleAnswer from '../../../components/titles/TitleAnswer'
import TitleAnswer2 from '../../../components/titles/TitleAnswer2'
import Answer from '../../../components/Paragraph/Answer'

import QuizzBtn from '../../../components/btn/QuizzBtn'
import PornnewsFlash from '../../../components/Paragraph/pornnewsFlash'

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
  image: {
    marginBottom: 30,
    width: 64,
    height: 64,
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
      <TitleQuestion content={question.question} style={styles.title} />
      {question.answers.map((answer) => (
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
      ))}
    </View>
  )
}

export default Quiz
