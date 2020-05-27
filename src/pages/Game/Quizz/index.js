import React, { useState } from 'react'
import { View, StyleSheet, StatusBar, Text, SafeAreaView } from 'react-native'

import { Button, ButtonContainer } from '../../../components/Button'
import { Alert } from '../../../components/Alert'
import useSocket from '../../../App/Socket/useSocket'

import culture from '../../../contents/cultureData'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#36B1F0',
    flex: 1,
    paddingHorizontal: 20,
  },
  text: {
    color: 'black',
  },
  safearea: {
    flex: 1,
    marginTop: 100,
    justifyContent: 'space-between',
  },
})

const Quiz = () => {
  // state = {
  //   correctCount: 0,
  //   activeQuestionIndex: 0,
  //   answered: false,
  //   answerCorrect: false,
  // }

  const [correctCount, setCorrectCount] = useState(0)
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0)
  const [answered, setAnswered] = useState(false)
  const [answerCorrect, setAnswerCorrect] = useState(false)

  answer = (correct) => {
    // this.setState(
    //   (state) => {
    //     const nextState = { answered: true }

    //     if (correct) {
    //       nextState.correctCount = state.correctCount + 1
    //       nextState.answerCorrect = true
    //     } else {
    //       nextState.answerCorrect = false
    //     }

    //     return nextState
    //   },
    //   () => {
    //     return this.props.navigation.popToTop()
    //   }
    // )
    setAnswered(true)
    if (correct) {
      setCorrectCount(correctCount + 1)
      setAnswerCorrect(true)
    } else {
      setAnswerCorrect(false)
    }
  }

  const { game } = useSocket()
  console.log('bonjour', game)

  console.log(game)
  const questions = culture
  const question = questions[activeQuestionIndex]
  console.log(question.question)

  return (
    <View>
      <Text>{question.question}</Text>
      <ButtonContainer>
        <Text style={styles.text}>coucou</Text>
        {question.answers.map((answer) => (
          <Button
            key={answer.id}
            text={answer.text}
            onPress={() => this.answer(answer.correct)}
          />
        ))}
      </ButtonContainer>
      <Alert correct={answerCorrect} visible={answered} />
    </View>
  )
}

export default Quiz
