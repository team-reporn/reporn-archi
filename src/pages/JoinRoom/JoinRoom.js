import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button } from "react-native";
import useSocket from "../../App/Socket/useSocket";

let JoinRoom = ({ navigation }) => {
  const { joinARoom, roomInfo } = useSocket();
  const [customRoomId, setCustomRoomId] = useState("");
  useEffect(() => {
    if (roomInfo.roomId) {
      navigation.navigate("Room", {
        title: "Room",
      });
    }
  }, [roomInfo]);
  return (
    <View>
      <Text>Rejoindre une room</Text>
      <TextInput
        style={{ height: 40 }}
        placeholder="tapez le numero de la room que vous voulez rejoindre"
        onChangeText={(customRoomId) => setCustomRoomId(customRoomId)}
        defaultValue={customRoomId}
      />
      <Button
        title="join room"
        onPress={() => {
          console.log("-----------------------------------------");
          joinARoom(customRoomId);
        }}
      />
    </View>
  );
};

export default JoinRoom;
