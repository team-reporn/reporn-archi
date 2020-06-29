import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";
// import useSocket from '../../App/Socket/useSocket'

import TitleQuestion from "../../../components/titles/TitleQuestion";
import ActeurBtn from "../../../components/btn/ActeurBtn";

import Chrono from "../../../components/Chrono";
import useSocket from "../../../App/Socket/useSocket";

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
  image: {
    transform: [{ rotate: "22deg" }],
  },
});

const Quiz = ({ navigation }) => {
  const { setSuccess } = useSocket();
  const [answered, setAnswered] = useState(false);
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, marginBottom: -30, marginTop: 50 }}>
        <Chrono
          duration={20}
          onFinish={() => {
            !answered &&
              navigation.navigate("EndGame", {
                title: "EndGame",
              });
          }}
        />
      </View>
      <View style={{ marginBottom: -40 }}>
        <TitleQuestion
          content="qui ... est connu pour ses vidéos amateur ?"
          taille1
        />
      </View>
      <ActeurBtn
        source={require("./assets/Amateur_Rep1.png")}
        style={styles.image}
        position1
        onPress={() => {
          setSuccess(true);
          setAnswered(true);
          navigation.navigate("EndGame", {
            title: "EndGame",
          });
        }}
      />
      <ActeurBtn
        source={require("./assets/Amateur_Rep2.png")}
        style={styles.image}
        position2
        onPress={() => {
          setSuccess(true);
          setAnswered(true);
          navigation.navigate("EndGame", {
            title: "EndGame",
          });
        }}
      />
    </View>
  );
};

export default Quiz;
