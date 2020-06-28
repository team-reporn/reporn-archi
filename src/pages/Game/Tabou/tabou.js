import React, { useState } from 'react'
import { AppLoading } from 'expo'

import {
  Button as BigButton,
  ButtonContainer,
} from '../../../components/Button'
import useSocket from '../../../App/Socket/useSocket'

import { View, Text, Button, Image, StyleSheet } from 'react-native'
import Chrono from '../../../components/Chrono'
import Title1 from '../../../components/titles/Title1'
import MainBtn from '../../../components/btn/MainBtn'
import NextBtn from '../../../components/btn/NextBtn'
import BigTitle from '../../../components/titles/BigTitle'

import * as Font from 'expo-font'
import TitleWithContent from '../../../components/titles/TitleWithContent'
import { P1, P2, P3 } from '../../../components/Paragraph/Paragraph'
import Input from '../../../components/forms/Input.js'

let customFonts = {
  MaimDisfigured: require('../../../assets/fonts/MainDisfigured/MaimDisfigured.ttf'),
  DIN: require('../../../assets/fonts/Din/bold/D-DIN-Bold.ttf'),
}

let isLoaded = false

let setLoaded = () => {
  isLoaded = true
}

const Tabou = (props) => {
  const { roomInfo, getRoomInfo, setRoomInfo, startGame } = useSocket()

  const [step, setStep] = useState(0)
  const [win, setWin] = useState(false)
  const [word, setWord] = useState(0)
  const [showFlash, setShowFlash] = useState(false)
  const [wordList, setWordList] = useState([
    {
      answer: 'Sodomie',
      forbidenWords: [
        'Anal',
        'Surprise',
        'Cul',
        'Gay',
        'Femme',
        'Première fois',
      ],
    },
  ])

  Promise.all([Font.loadAsync(customFonts)]).then(setLoaded.bind(this))
  let lastFont = isLoaded && !!'din' ? 'din' : 'null'

  renderForbidenWords = () => {
    let result = []

    for (let i = 0; i < wordList[word].forbidenWords.length; i++) {
      result.push(
        <Text
          style={[{ textAlign: 'center', color: 'blue' }, styles[lastFont]]}
        >
          {wordList[word].forbidenWords[i]}
        </Text>
      )
    }

    return result
  }

  if (roomInfo.role !== 'owner') {
    if (step == 0) {
      return (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            top: -100,
          }}
        >
          <View style={{ marginBottom: -80, zIndex: 2 }}>
            <Chrono duration={1} onFinish={() => {}} />
          </View>
          <BigTitle
            content="Gang Bang"
            upperContent="Tu fait partie de l'équipe"
            consigne='Fait deviner le mot'
          />
          <View style={{ marginTop: 100 }}>
          <NextBtn             onPress={() => {
              setStep(1)
            }} />
          </View>
        </View>
      )
    } else if (step == 1) {
      return (
        <View>
          <Chrono
            duration={30}
            onFinish={() => {
              setStep(1)
              setWin(false)
            }}
          />
          <Title1
            onRight
            content={'Fait deviner le mot : ' + wordList[word].answer}
          />
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              transform: [{ translateX: 20 }, { translateY: -20 }],
              zIndex: -1,
            }}
          >
            <Image source={require('../../../assets/img/scotch/Feuille.png')} />
            <View style={{ position: 'absolute', top: 30 }}>
              <Text
                style={[{ color: 'blue', marginBottom: 30 }, styles[lastFont]]}
              >
                Sans utiliser les mots :
              </Text>
              {renderForbidenWords()}
            </View>
          </View>
          <MainBtn
            content="Trouvé !"
            onPress={() => {
              setStep(1)
              setWin(true)
            }}
          />
        </View>
      )
    }
  } else {
    return(
    <View>
      {step == 0 && (
        <>
          <Text>Tu fait partie de l'équipe Gang Bang</Text>
          <Text>A toi de faire deviner un mot</Text>
          <Button
            title=">"
            onPress={() => {
              setStep(1);
            }}
          />
        </>
      )}
      {step > 0 && (
        <>
          <Chrono
            duration={step == 1 ? 30 : 0}
            onFinish={
              step == 1
                ? () => {
                    setStep(2);
                    setWin(false);
                  }
                : () => {}
            }
          />
          {step == 1 ? (
            <Title1 onRight content={"Devine le safe word"} />
          ) : (
            <TitleWithContent>
              <P1>Valide le safe word</P1>
              <Input />
            </TitleWithContent>
          )}
          <MainBtn
            content="Trouvé !"
            onPress={() => {
              setStep(2);
              setWin(true);
            }}
          />
        </>
      )}
    </View>)
  }
};

const styles = StyleSheet.create({
  din: { fontFamily: 'DIN' },
  null: {},
})

export default Tabou
