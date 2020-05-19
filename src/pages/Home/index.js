// In this, create the home page -choose between create a room or PornNews- on button select go to rules
import React, { useState, useRef, useEffect } from "react";
import { Button, ButtonContainer } from "../../components/Button";
import { View, StyleSheet, Text, Image, ImageBackground } from "react-native";
import useSocket from "../../App/Socket/useSocket";
import culture from "../../contents/cultureData";

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
        <Image source={require("../../assets/Logo.png")} style={styles.logo} />
        <Text>test</Text>
        <ButtonContainer>
          <Button
            key="rentrer dans le jeu"
            text="rentrer dans le jeu"
            onPress={() => {
              navigation.navigate("SelectGame", {
                title: "SelectGame",
                questions: culture,
                color: "#799496",
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
