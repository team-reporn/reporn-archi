// in this, define all games and select one randomly - On button go select go to Quiz
import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import useSocket from '../../App/Socket/useSocket'
import NextButton from '../../components/btn/NextBtn.js'
import BigTitle from '../../components/titles/BigTitle'
import Chrono from '../../components/Chrono'

let getRoutesFromGameName = ({ game }) => {
  switch (game) {
    case 'tabou':
    // return {
    //   route: "Tabou",
    //   title: "Safe Word",
    //   subContent: "Aide ton partenaire à se souvenir de votre safe word",
    //   consigne: "L'un fait deviner un mot à l'autre",
    // background: require("../../assets/img/backgrounds/Question1.png"),
    // };
    // break;

    case 'cultureQ':
      return {
        route: 'Quizz',
        title: 'Cul.ture Q',
        subContent: 'Petite question de culture point G',
        consigne: 'Caresse la bonne réponse',
        background: require('../../assets/img/backgrounds/Question_culture.png'),
      }
      break

    case 'acteurX':
      return {
        route: 'ActeurX',
        title: 'Qui...?',
        subContent: 'les apparences peuvent être trompeuses',
        consigne: 'Touche la bonne réponse',
        background: require('../../assets/img/backgrounds/Qui.png'),
      }
      break

    case 'ouEst':
      return {
        route: 'Wiwaldo',
        title: 'Où est...?',
        subContent: 'Le sextoy le plus cheap ?',
        consigne: 'Touche la bonne réponse',
        background: require('../../assets/img/backgrounds/Question_ou.png'),
      }
      break

    default:
      throw 'non reconized game ' + game
      break
  }
}
let Wait = ({ navigation, setPressed }) => {
  const { progress, ready, game } = useSocket()
  useEffect(() => {
    ready()
  }, [])

  useEffect(() => {
    if (progress.start) {
      setPressed(false)
      navigation.navigate(getRoutesFromGameName({ game: game.game }).route, {
        title: getRoutesFromGameName({ game: game.game }).title,
      })
    }
  }, [progress])

  return progress.start || false ? (
    <View>
      <Text>You'r being redirected to the game</Text>
    </View>
  ) : (
    <View>
      <Text>Waiting for everyone to be ready ...</Text>
    </View>
  )
}

export default ({ navigation, setBackGround }) => {
  const [pressed, setPressed] = useState(false)
  const { game } = useSocket()
  useEffect(() => {
    setBackGround(getRoutesFromGameName({ game: game.game }).background)
  }, [])
  return (
    <View style={styles.container}>
      {pressed ? (
        <Wait navigation={navigation} setPressed={setPressed} />
      ) : (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <View style={{ marginTop: -30, zIndex: 2 }}>
            <Chrono duration={1} onFinish={() => {}} />
          </View>
          <BigTitle
            content={getRoutesFromGameName({ game: game.game }).title}
            subContent={getRoutesFromGameName({ game: game.game }).subContent}
            upperContent={
              getRoutesFromGameName({ game: game.game }).upperContent
            }
            consigne={getRoutesFromGameName({ game: game.game }).consigne}
          />
          <View style={{ marginTop: 100 }}>
            <NextButton
              key="READY"
              text="I'm Ready !"
              onPress={() => {
                setPressed(true)
              }}
            />
          </View>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: '30%',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  image: {
    transform: [{ rotate: '22deg' }],
  },
})
