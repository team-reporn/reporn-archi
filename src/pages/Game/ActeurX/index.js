import React, { useState } from 'react'
import { View, StyleSheet, ImageBackground } from 'react-native'
import useSocket from '../../../App/Socket/useSocket'

import Title1 from '../../../components/titles/Title2'
import QuizzBtn from '../../../components/btn/QuizzBtn'

import acteurX from '../../../contents/acteurX'

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

  const questions = acteurX
  const question = questions[activeQuestionIndex]

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/img/backgrounds/Background3.png')}
        style={styles.background}
      >
        <Title1 content={question.question} style={styles.title} />
        {question.answers.map((answer) => (
          <QuizzBtn
            key={answer.id}
            content={answer.text}
            style={styles.text}
            rotation
            onPress={() =>
              navigation.navigate('EndGame', {
                title: 'EndGame',
              })
            }
          />
        ))}
      </ImageBackground>
    </View>
  )
}

export default Quiz
