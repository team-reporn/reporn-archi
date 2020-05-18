// In this, create the home page -choose between create a room or PornNews- on button select go to rules
import React, { useState, useRef, useEffect } from "react";
import { Button, ButtonContainer } from "../../components/Button";
import { View, StyleSheet, Text, Image, ImageBackground } from "react-native";
import useSocket from "../../App/Socket/useSocket";
import culture from "../../contents/cultureData";
import Game from "../Game";

let Wait = ({ navigation }) => {
  let socketReady = false;
  const { progress, ready } = useSocket();

  useEffect(() => {
    ready();
  }, []);

  useEffect(() => {
    console.log("progress : ", progress);
    if (progress.start) {
      navigation.navigate("SelectGame", {
        title: "SelectGame",
        questions: culture,
        color: "#799496",
      });
    }
  }, [progress]);
  
  return progress.start || false ? (
    <View>
      <Text>You'r being redirected to the game</Text>
    </View>
  ) : (
    <View>
      <Text>loading ...</Text>
    </View>
  );
};

export default ({ navigation }) => {
  const [pressed, setPressed] = useState(false);
  const { initializeSocket } = useSocket();
  console.log("yplol", navigation);
  useEffect(() => {
    initializeSocket();
  }, []);

  return pressed ? (
    <Wait navigation={navigation} />
  ) : (
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
              setPressed(true);
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
