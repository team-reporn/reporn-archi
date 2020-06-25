// in this, define all games and select one randomly - On button go select go to Quiz
import React, { useState, useEffect } from 'react'
import { Button, ButtonContainer } from '../../components/Button'
import { View, StyleSheet, Text, Image } from 'react-native'
import useSocket from '../../App/Socket/useSocket'
import NextButton from '../../components/btn/NextBtn.js'
import BigTitle from '../../components/titles/BigTitle'
import Chrono from '../../components/Chrono'

import culture from '../../contents/cultureData'
// import troudumonde from '../../contents/troudumonde'
// import parodie from '../../contents/parodie'

let getRoutesFromGameName = ({ game }) => {
  switch (game) {
    case 'tabou':
      return { route: 'Tabou', title: 'Safe Word', subContent: 'Aide ton partenaire à se souvenir de votre safe word', consigne: "L'un fait deviner un mot à l'autre" }
      break

    case 'cultureQ':
      return { route: 'Quizz', title: 'Culture Q', subContent: 'Petite question de culture point G', consigne: 'Caresse la bonne réponse' }
      break

    case 'acteurX':
      return { route: 'ActeurX', title: 'Qui...?', subContent: null , consigne: 'Touche la bonne réponse' }
      break

    case 'ouEst':
      return { route: 'Où est ...?', title: 'Le sextoy le plus cheap ?', consigne: 'Touche la bonne réponse' }
      break

    default:
      throw 'non reconized game ' + game
      break
  }
}
let Wait = ({ navigation }) => {
  const { progress, ready, game } = useSocket()
  console.log(game)
  useEffect(() => {
    ready()
  }, [])

  useEffect(() => {
    if (progress.start) {
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

export default ({ navigation }) => {
  const [pressed, setPressed] = useState(false)
  const {game} = useSocket()
  return (
    <View>
      {pressed ? (
        <Wait navigation={navigation} />
      ) : (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            top: -100,
          }}
        >
          <View style={{marginBottom:-80, zIndex: 2}}>
            <Chrono duration={1} onFinish={()=>{}} />
          </View>
          <BigTitle content={getRoutesFromGameName({ game: game.game }).title} subContent={getRoutesFromGameName({ game: game.game }).subContent} upperContent={getRoutesFromGameName({ game: game.game }).upperContent} consigne={getRoutesFromGameName({ game: game.game }).consigne}/>
          <NextButton
            key="READY"
            text="I'm Ready !"
            onPress={() => {
              setPressed(true)
            }}
          />
        </View>
      )}
    </View>
  )
}