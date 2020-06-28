// In this, create the home page -choose between create a room or PornNews- on button select go to rules
// In this, create the home page -choose between create a room or PornNews- on button select go to rules
import React, { useState, useRef, useEffect } from "react";
import { Button, ButtonContainer } from "../../components/Button";
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  Image,
  ImageBackground,
} from "react-native";
import useSocket from "../../App/Socket/useSocket";
import TitleWithContent from "../../components/titles/TitleWithContent";
import Title1 from "../../components/titles/Title1";
import MainBtn from "../../components/btn/MainBtn";
import { P1, P2, P3 } from "../../components/Paragraph/Paragraph";

let Home = ({ navigation }) => {
  const { initializeSocket, createRoom, setRoomInfo } = useSocket();
  useEffect(() => {
    initializeSocket();
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/Logo.png")} style={styles.logo} />
      <TitleWithContent onRight>
        <View
          style={{
            width: "100%",
            alignItems: "center",
            lineHeight: 2,
            left: -70,
          }}
        >
          <View
            styles={{
              top: 100,
              // backgroundColor: "violet",
              position: "relative",
            }}
          >
            <P1 font={"maim"} color={"white"}>
              Partie de jambes
            </P1>
          </View>
          <View
            styles={{
              top: 100,

              // backgroundColor: "violet",
              position: "relative",
            }}
          >
            <P1 font={"maim"} color={"white"}>
              en l'air
            </P1>
          </View>
        </View>
        <View />
      </TitleWithContent>
      <View style={styles.btn1}>
        <MainBtn
          content="CRÉER UNE ROOM"
          rotation1
          onPress={() => {
            createRoom();
            navigation.navigate("Room", {
              title: "Room",
            });
          }}
        />
      </View>
      <View style={styles.btn2}>
        <MainBtn
          content="REJOINDRE UNE ROOM"
          style={styles.btn2}
          rotation2
          onPress={() => {
            navigation.navigate("JoinRoom", {
              title: "JoinRoom",
            });
          }}
        />
      </View>
    </View>
  );
};

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  logo: {
    margin: "auto",
    marginBottom: 50,
    width: "80%",
    resizeMode: "contain",
  },
  title: {
    marginBottom: -20,
    marginLeft: 200,
  },
  btn1: {
    marginBottom: 30,
    transform: [{ translateY: -20 }],
  },
  btn2: {
    transform: [{ translateY: -10 }],
  },
});

export default Home;
