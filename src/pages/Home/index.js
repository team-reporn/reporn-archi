// In this, create the home page -choose between create a room or PornNews- on button select go to rules
// In this, create the home page -choose between create a room or PornNews- on button select go to rules
import React, { useState, useRef, useEffect } from "react";
import { Button, ButtonContainer } from "../../components/Button";
import { View, StyleSheet, Text, Image, ImageBackground } from "react-native";
import useSocket from "../../App/Socket/useSocket";

import Title1 from "../../components/titles/Title1";
import MainBtn from "../../components/btn/MainBtn";

let Home = ({ navigation }) => {
  const { initializeSocket, createRoom, setRoomInfo } = useSocket();
  useEffect(() => {
    initializeSocket();
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/Logo.png')} style={styles.logo} />
      <Title1 content="Partie de jambes en l'air" style={styles.title} />
      <MainBtn
        content="Create a Room"
        style={styles.btn1}
        rotation1
        onPress={() => {
          createRoom()
          navigation.navigate('Room', {
            title: 'Room',
          })
        }}
      />
      <MainBtn
        content="Join a Room"
        style={styles.btn2}
        rotation2
        onPress={() => {
          navigation.navigate('JoinRoom', {
            title: 'JoinRoom',
          })
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
    marginBottom: -20,
  },
  btn1: {
    marginBottom: 30,
  },
});

export default Home;
