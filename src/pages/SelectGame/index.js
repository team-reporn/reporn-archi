// in this, define all games and select one randomly - On button go select go to Quiz
import React, { useState, useEffect } from "react";
import { Button, ButtonContainer } from "../../components/Button";
import { View, StyleSheet, Text, Image } from "react-native";
import useSocket from "../../App/Socket/useSocket";
import culture from "../../contents/cultureData";
// import troudumonde from '../../contents/troudumonde'
// import parodie from '../../contents/parodie'

const gamesRoots = [
  {
    key: "QUESTION",
    text: "QUESTION",
    title: "Tabou",
    question: culture,
    color: "#799496",
  },
];

let Wait = ({ navigation }) => {
  let socketReady = false;
  const { progress, ready } = useSocket();

  useEffect(() => {
    ready();
  }, []);

  useEffect(() => {
    if (progress.start) {
      navigation.navigate("Tabou", {
        title: "Quizz",
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
        <View>
          <Text>Are you ready ?</Text>
          <Button
            key="READY"
            text="I'm Ready !"
            onPress={() => {
              setPressed(true);
            }}
          ></Button>
        </View>
      )}
    </View>
  );
};
// <Button
//   key="QUESTION"
//   text="QUESTION"
//   onPress={() =>
//     navigation.navigate("Game", {
//       title: "Game",
//       questions: culture,
//       color: "#799496",
//     })
//   }
// />
