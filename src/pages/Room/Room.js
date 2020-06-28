import React, { useRef, useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Button, ButtonContainer } from "../../components/Button";
import useSocket from "../../App/Socket/useSocket";
import { Audio } from "expo-av";

import Title1 from "../../components/titles/Title1";
import TitleWithContent from "../../components/titles/TitleWithContent";
import { P1, P2, P3 } from "../../components/Paragraph/Paragraph";
import { H3, H2 } from "../../components/headers/Headers";
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

  playSoundHardcore = () => {
    try {
      const {
        sound: soundObject,
        status,
      } = Audio.Sound.createAsync(
        require("../../assets/sound/niveau_hardcore_1.wav"),
        { shouldPlay: true }
      );
    } catch (error) {}
  };
  playSoundMS = () => {
    try {
      const {
        sound: soundObject,
        status,
      } = Audio.Sound.createAsync(
        require("../../assets/sound/niveau_mainstream.wav"),
        { shouldPlay: true }
      );
    } catch (error) {}
  };

  return (
    <View
      style={{
        flex: 1,
        width: "100%",
      }}
    >
      <View
        style={{
          flex: 2,
          paddingTop: "5%",
        }}
      >
        <TitleWithContent onRight>
          <P1 font={"maim"} color={"white"}>
            numÉro de la room
          </P1>
          <View />
        </TitleWithContent>
        <View style={styles.paperContainer}>
          <Image
            style={styles.imageText}
            source={require("../../assets/img/title/title1-paper.png")}
          ></Image>
          <View style={styles.paperText}>
            <P1 font={"maim"} color={"blue"}>
              {roomInfo.roomId}
            </P1>
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 3,
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <View
          style={{
            flex: 1,
            width: "70%",
          }}
        >
          <TitleWithContent>
            <View
              style={{
                width: "100%",
                alignItems: "center",
              }}
            >
              <P2 font={"din"} color={"white"}>
                NIVEAU DE TRASHITUDE
              </P2>
            </View>
          </TitleWithContent>

          <MainBtn select bold content="SOFT VANILLA" rotation2 />
          <MainBtn
            select
            bold
            content="REGULAR MAINSTREAM"
            onPress={() => {
              playSoundMS();
            }}
            rotation1
          />
          <MainBtn
            select
            bold
            content="HARDCORE"
            onPress={() => {
              playSoundHardcore();
            }}
            rotation3
          />
        </View>
      </View>
      {roomInfo.role == "owner" ? (
        <View
          style={{
            width: "100%",
            alignItems: "center",
            flex: 1.2,
          }}
        >
          <NextBtn
            onPress={() => {
              startGame();
              navigation.navigate("Roles", {
                title: "Roles",
              });
            }}
          />
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  paperContainer: {
    justifyContent: "center",
    alignItems: "center",
    top: -50,
    left: 20,
  },

  bg: {
    resizeMode: "contain",
    width: null,
    height: null,
  },
  imageText: {
    color: "black",
    position: "absolute",
    top: 10,
  },
  paperText: {
    color: "black",
    padding: 40,
    justifyContent: "flex-end",
    textAlign: "right",
  },
});

export default Room;
