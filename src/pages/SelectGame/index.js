// in this, define all games and select one randomly - On button go select go to Quiz
import React, { useState, useEffect } from "react";
import { Button, ButtonContainer } from "../../components/Button";
import { View, StyleSheet, Text, Image } from "react-native";
import useSocket from "../../App/Socket/useSocket";
import NextButton from "../../components/btn/NextBtn.js";

import culture from "../../contents/cultureData";
// import troudumonde from '../../contents/troudumonde'
// import parodie from '../../contents/parodie'

let getRoutesFromGameName = ({ game }) => {
  switch (game) {
    case "tabou":
      return { route: "Tabou", title: "Tabou" };
      break;

    case "cultureQ":
      return { route: "Quizz", title: "Quizz" };
      break;

    case "acteurX":
      return { route: "Quizz", title: "Quizz" };
      break;

    case "ouEst":
      return { route: "Wiwaldo", title: "Wiwaldo" };
      break;

    default:
      throw "non reconized game " + game;
      break;
  }
};
let Wait = ({ navigation }) => {
  const { progress, ready, game } = useSocket();

  useEffect(() => {
    ready();
  }, []);

  useEffect(() => {
    if (progress.start) {
      navigation.navigate(getRoutesFromGameName({ game: game.game }).route, {
        title: getRoutesFromGameName({ game: game.game }).title,
      });
    }
  }, [progress]);

  return progress.start || false ? (
    <View>
      <Text>You'r being redirected to the game</Text>
    </View>
  ) : (
    <View>
      <Text>Waiting for everyone to be ready ...</Text>
    </View>
  );
};

export default ({ navigation }) => {
  const [pressed, setPressed] = useState(false);
  return (
    <View>
      {pressed ? (
        <Wait navigation={navigation} />
      ) : (
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            top: -100,
          }}
        >
          <NextButton
            key="READY"
            text="I'm Ready !"
            onPress={() => {
              setPressed(true);
            }}
          />
        </View>
      )}
    </View>
  );
};
