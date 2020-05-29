// In this, create the home page -choose between create a room or PornNews- on button select go to rules
import React, { useState, useRef, useEffect } from "react";
import { Button, ButtonContainer } from "../../components/Button";
import { View, StyleSheet, Text, Image, ImageBackground } from "react-native";
import useSocket from "../../App/Socket/useSocket";

let Home = ({ navigation }) => {
  const { initializeSocket, createRoom, setRoomInfo } = useSocket();
  useEffect(() => {
    initializeSocket();
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/backgrounds/Background.png")}
        style={styles.background}
      >
        <Image source={require("../../assets/Logo.png")} style={styles.logo} />
        <Text>test</Text>
        <ButtonContainer>
          <Button
            key="créer une room"
            text="créer une room"
            onPress={() => {
              createRoom();
              navigation.navigate("Room", {
                title: "Room",
              });
            }}
          />
          <Button
            key="rejoindre une room"
            text="rejoindre une room"
            onPress={() => {
              navigation.navigate("JoinRoom", {
                title: "JoinRoom",
              });
            }}
          />
        </ButtonContainer>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  logo: {
    width: 256,
  },
});

export default Home;
