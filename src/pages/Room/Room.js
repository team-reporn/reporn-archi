import React, { useRef, useEffect } from "react";
import { View, Text } from "react-native";
import { Button, ButtonContainer } from "../../components/Button";
import useSocket from "../../App/Socket/useSocket";

let Room = ({ navigation }) => {
  const { roomInfo, getRoomInfo, setRoomInfo, startGame } = useSocket();
  // console.log("componentRoom : ", roomInfo);
  useEffect(() => {
    const roomInterval = setInterval(() => {
      getRoomInfo();
    }, 5000);
    // console.log("setinterval", roomInfo);
    if (roomInfo.roomId === "inexistant") {
      setRoomInfo({ roomId: null, numClients: null, role: null });
      navigation.navigate("Home", {
        title: "Home",
      });
    }
    return () => clearInterval(roomInterval);
  }, [roomInfo]);
  return (
    <View>
      <Text>Room</Text>
      <Text>Votre numero de room : {roomInfo.roomId}</Text>
      <Text>nombre de personne connecté à la room : {roomInfo.numClients}</Text>
      {roomInfo && roomInfo.role === "owner" && (
        <ButtonContainer>
          <Button
            key="rentrer dans le jeu"
            text="rentrer dans le jeu"
            onPress={() => {
              startGame();
              navigation.navigate("Roles", {
                title: "Roles",
              });
            }}
          />
        </ButtonContainer>
      )}
    </View>
  );
};

export default Room;
