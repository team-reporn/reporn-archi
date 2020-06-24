// In this, create the home page -choose between create a room or PornNews- on button select go to rules
// In this, create the home page -choose between create a room or PornNews- on button select go to rules
import React, { useState, useRef, useEffect } from "react";
import { Button, ButtonContainer } from "../../components/Button";
import {
  View,
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  Dimensions,
} from "react-native";
import useSocket from "../../App/Socket/useSocket";
import TitleWithContent from "../../components/titles/TitleWithContent";
import Title1 from "../../components/titles/Title1";
import MainBtn from "../../components/btn/MainBtn";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
let Home = ({ navigation }) => {
  const { initializeSocket, createRoom, setRoomInfo } = useSocket();
  useEffect(() => {
    initializeSocket();
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/Logo.png")} style={styles.logo} />
      {/* <Title1 content="Partie de jambes en l'air" style={styles.title} /> */}
      <TitleWithContent onRight>
        <Text style={windowWidth > 700 ? styles.title : null}>
          Partie de jambes en l'air
        </Text>
        <View></View>
      </TitleWithContent>
      <MainBtn
        content="Create a Room"
        style={styles.btn1}
        rotation1
        onPress={() => {
          createRoom();
          navigation.navigate("Room", {
            title: "Room",
          });
        }}
      />
      <MainBtn
        content="Join a Room"
        style={styles.btn2}
        rotation2
        onPress={() => {
          navigation.navigate("JoinRoom", {
            title: "JoinRoom",
          });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  logo: {
    marginBottom: 100,
  },
  title: {
    marginLeft: 50,
  },
  btn1: {
    marginBottom: 30,
  },
});

export default Home;
