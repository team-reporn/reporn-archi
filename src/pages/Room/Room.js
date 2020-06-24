import React, { useRef, useEffect } from "react";
import { View, Text } from "react-native";
import { Button, ButtonContainer } from "../../components/Button";
import useSocket from "../../App/Socket/useSocket";

import Title1 from "../../components/titles/Title1";
import Input from "../../components/forms/Input";
import NextBtn from "../../components/btn/NextBtn";
import MainBtn from "../../components/btn/MainBtn";

let Room = ({ navigation }) => {
  const { roomInfo, getRoomInfo, setRoomInfo, startGame } = useSocket();
  // console.log("componentRoom : ", roomInfo);
  useEffect(() => {
    const roomInterval = setInterval(() => {
      getRoomInfo();
    }, 5000);
    console.log("setinterval", roomInfo);
    if (roomInfo.roomId === "inexistant") {
      setRoomInfo({ roomId: null, numClients: null, role: null });
      navigation.navigate("Home", {
        title: "Home",
      });
    }
    return () => clearInterval(roomInterval);
  }, [roomInfo]);
  return (
    <View style={{}}>
      <View>
        <Title1
          content="Numéro de la room"
          onRight
          paper={
            `${roomInfo.roomId}`
          }
        />
        <Title1 content="Niveau de trashitude"/>
      </View>
      <MainBtn content="Soft vanilla" rotation2 />
      <MainBtn content="Regular mainstream" rotation1 />
      <MainBtn content="Haardcore" rotation3 />
      <NextBtn
        onPress={() => {
          startGame();
          navigation.navigate("Roles", {
            title: "Roles",
          });
        }}
      />
      {/* {roomInfo && roomInfo.role === 'owner' && (
        <ButtonContainer>
          <Button
            key="rentrer dans le jeu"
            text="rentrer dans le jeu"
            onPress={
              () => {
                startGame()
                navigation.navigate('Roles', {
                  title: 'Roles',
                })
            }
          />
        </ButtonContainer>
      )} */}
    </View>
  );
};

export default Room;
