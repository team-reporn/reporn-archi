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
  console.log('bonjour', game)

  console.log(game)
  const questions = culture
  const question = questions[activeQuestionIndex]
  console.log(question.question)

  return (
    <View>
      <Text>{question.question}</Text>
      <ButtonContainer>
        {question.answers.map((answer) => (
          <Button
            key={answer.id}
            text={answer.text}
            onPress={() =>
              //this.answer(answer.correct)
              navigation.navigate('EndGame', {
                title: 'EndGame',
              })
            }
          />
        ))}
      </ButtonContainer>
      {/* <Alert correct={answerCorrect} visible={answered} /> */}
    </View>
  )
}

export default Quiz
