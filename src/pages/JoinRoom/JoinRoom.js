import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button } from "react-native";
import useSocket from "../../App/Socket/useSocket";

import Title1 from "../../components/titles/Title1";
import Input from "../../components/forms/Input";
import NextBtn from "../../components/btn/NextBtn";
import TitleWithContent from "../../components/titles/TitleWithContent";
import MainBtn from "../../components/btn/MainBtn";
import { P1, P2, P3 } from "../../components/Paragraph/Paragraph";

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
    <View
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          flex: 2,
          justifyContent: "flex-end",
        }}
      >
        <TitleWithContent onRight>
          <View
            style={{
              width: "100%",
              alignItems: "center",
              lineHeight: 2,
              left: -70,
              marginTop: -15,
            }}
          >
            <View
              styles={{
                top: 100,
                position: "relative",
              }}
            >
              <P1 font={"maim"} color={"white"}>
                rejoindre la room
              </P1>
            </View>
          </View>
          <View />
        </TitleWithContent>
      </View>
      <View
        style={{
          flex: 2,
          justifyContent: "flex-start",
          alignItems: "center",
          marginTop: -40,
        }}
      >
        <Input
          placeholder="Numéro de la room"
          onChangeText={(customRoomId) => setCustomRoomId(customRoomId)}
          defaultValue={customRoomId}
        />
      </View>
      {/* <View
        style={{
          flex: 3.5,
          backgroundColor: "green",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ flex: 1, backgroundColor: "red", width: "70%" }}>
          <View style={{ width: 70, height: 50 }}>
            <MainBtn content="1" onPress={() => {}} />
          </View>
        </View>
      </View> */}
      <View
        style={{
          flex: 1,
        }}
      >
        <NextBtn
          onPress={() => {
            joinARoom(customRoomId);
          }}
        />
      </View>
    </View>
  );
};

export default JoinRoom;
