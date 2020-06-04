import React, { useRef, useEffect } from 'react'
import { View, Text } from 'react-native'
import { Button, ButtonContainer } from '../../components/Button'
import useSocket from '../../App/Socket/useSocket'

import Title1 from '../../components/titles/Title1'
import Input from '../../components/forms/Input'
import NextBtn from '../../components/btn/NextBtn'
import MainBtn from '../../components/btn/MainBtn'

let Room = ({ navigation }) => {
  const { roomInfo, getRoomInfo, setRoomInfo, startGame } = useSocket()
  // console.log("componentRoom : ", roomInfo);
  useEffect(() => {
    const roomInterval = setInterval(() => {
      getRoomInfo()
    }, 5000)
    // console.log("setinterval", roomInfo);
    if (roomInfo.roomId === 'inexistant') {
      setRoomInfo({ roomId: null, numClients: null, role: null })
      navigation.navigate('Home', {
        title: 'Home',
      })
    }
    return () => clearInterval(roomInterval)
  }, [roomInfo])
  return (
    <View>
      <Title1 content="Numéro de la room" paper={roomInfo.roomId} />
      <Title1 content="Niveau de trashitude"/>
      <MainBtn content="Soft vanilla" />
      <MainBtn content="Regular mainstream" />
      <MainBtn content="Haardcore" />
      <NextBtn/>
      <Text>nombre de personne connecté à la room : {roomInfo.numClients}</Text>
      {roomInfo && roomInfo.role === 'owner' && (
        <ButtonContainer>
          <Button
            key="rentrer dans le jeu"
            text="rentrer dans le jeu"
            onPress={() => {
              startGame()
              navigation.navigate('Roles', {
                title: 'Roles',
              })
            }}
          />
        </ButtonContainer>
      )}
    </View>
  )
}

export default Room
