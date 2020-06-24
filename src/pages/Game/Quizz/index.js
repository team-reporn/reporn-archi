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
      {step === 0 && (
        <>
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
        </>
      )}
      {step === 1 && (
        <>
          <Image
            source={require('../../../assets/img/pictos/Bon.png')}
            style={styles.image}
          />
          <TitleAnswer content="BIeN JOuÉ !" />
          <TitleAnswer2
            content="C’était la sextape de"
            content2="Kim Kardashiam & Ray Jay"
          />
          <Answer
            content="La sextape a été vue 55 fois par minute durant toute l’année 2018 et
                  continue toujours de lui rapporter de l’argent. Elle a été diffusé
                  avec son accord et surtout celui de sa mère"
          />
          <PornnewsFlash
            content="Toutes les autres personnes citées ont été victimes de revenge porn. Elles n’avaient pas consenti à la diffusion 
            de leur sextape."
          ></PornnewsFlash>
          <ButtonContainer>
            <BigButton
              key="end game"
              text="end game"
              onPress={() => {
                navigation.navigate('EndGame', {
                  title: 'EndGame',
                })
              }}
            />
          </ButtonContainer>
        </>
      )}
      {step === 2 && (
        <>
          <Image
            source={require('../../../assets/img/pictos/Mauvais.png')}
            style={styles.image}
          />
          <TitleAnswer content="ou pas!" />
          <TitleAnswer2
            content="C’était la sextape de"
            content2="Kim Kardashiam & Ray Jay"
          />
          <Answer
            content="La sextape a été vue 55 fois par minute durant toute l’année 2018 et
                continue toujours de lui rapporter de l’argent. Elle a été diffusé
                avec son accord et surtout celui de sa mère"
          />
          <PornnewsFlash
            content="Toutes les autres personnes citées ont été victimes de revenge porn. Elles n’avaient pas consenti à la diffusion 
            de leur sextape."
          ></PornnewsFlash>
          <ButtonContainer>
            <BigButton
              key="end game"
              text="end game"
              onPress={() => {
                navigation.navigate('EndGame', {
                  title: 'EndGame',
                })
              }}
            />
          </ButtonContainer>
        </>
      )}
    </View>
  )
}

export default Quiz
