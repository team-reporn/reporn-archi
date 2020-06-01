// In this, create the home page -choose between create a room or PornNews- on button select go to rules
import React, { useState, useRef, useEffect } from "react";
import { Button, ButtonContainer } from "../../components/Button";
import { View, StyleSheet, Text, Image, ImageBackground } from "react-native";
import useSocket from "../../App/Socket/useSocket";
import culture from "../../contents/cultureData";

import Title1 from '../../components/titles/Title1'
import MainBtn from '../../components/btn/MainBtn'

export default ({ navigation }) => {
  const { initializeSocket } = useSocket();
  console.log("yplol", navigation);
  useEffect(() => {
    initializeSocket();
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/backgrounds/Background.png")}
        style={styles.background}
      >
        <Image source={require("../../assets/logo.png")} style={styles.logo} />
        <Title1 content="Partie de jambes en l'air" style={styles.title} />
        <MainBtn content="Rentrer dans le jeu" style={styles.btn1}
            onPress={() => {
              navigation.navigate("SelectGame", {
                title: "SelectGame",
                questions: culture,
                color: "#799496",
              });
            }} />
          <MainBtn content="C'est un autre bouton" style={styles.btn2}
            onPress={() => {

            }} />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingTop: 100,
    alignItems: "center",
    height: "100%",
    width: "100%"
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  logo: {
    marginBottom: 100
  },
title: {
    marginBottom: -20,
},
btn1: {
    marginBottom: 30
}
});
