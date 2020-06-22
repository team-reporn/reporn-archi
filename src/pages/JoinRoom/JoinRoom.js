import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button } from "react-native";
import useSocket from "../../App/Socket/useSocket";

import Title1 from '../../components/titles/Title1'
import Input from '../../components/forms/Input'
import NextBtn from '../../components/btn/NextBtn'

let JoinRoom = ({ navigation }) => {
  const { joinARoom, roomInfo } = useSocket();
  const [customRoomId, setCustomRoomId] = useState(null);
  useEffect(() => {
    if (roomInfo.roomId) {
      navigation.navigate("Room", {
        title: "Room",
      });
    }
  }, [roomInfo]);
  return (
    <View>
      <Title1 content="Rejoindre une room" />
      <Input
        placeholder="Numéro de la room"
        onChangeText={(customRoomId) => setCustomRoomId(customRoomId)}
        defaultValue={customRoomId}
      />
      <NextBtn
        onPress={() => {
          joinARoom(customRoomId);
        }}
      />
    </View>
  );
};

export default JoinRoom;
