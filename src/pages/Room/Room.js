import React, { useRef, useEffect } from "react";
import { View, Text } from "react-native";
import { Button, ButtonContainer } from "../../components/Button";
import useSocket from "../../App/Socket/useSocket";

let Room = ({ navigation }) => {
  const { roomInfo, getRoomInfo } = useSocket();
  console.log("componentRoom : ", roomInfo);
  useEffect(() => {
    const roomInterval = setInterval(() => {
      getRoomInfo();
    }, 5000);
    console.log("setinterval", roomInfo);
    return () => clearInterval(roomInterval);
  }, [roomInfo]);
  return (
    <View>
      <Text>Room</Text>
      <Text>Votre numero de room : {roomInfo.roomId}</Text>
      <Text>nombre de personne connecté à la room : {roomInfo.numClients}</Text>
      <ButtonContainer>
        <Button
          key="rentrer dans le jeu"
          text="rentrer dans le jeu"
          onPress={() => {
            navigation.navigate("SelectGame", {
              title: "SelectGame",
            });
          }}
        />
      </ButtonContainer>
    </View>
  );
};

export default Room;
