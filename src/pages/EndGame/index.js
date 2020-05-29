import React from "react";
import { Button, ButtonContainer } from "../../components/Button";
import { View, StyleSheet, Text, Image } from "react-native";

import useSocket from "../../App/Socket/useSocket";
import culture from "../../contents/cultureData";
// import troudumonde from '../../contents/troudumonde'
// import parodie from '../../contents/parodie'

export default ({ navigation }) => {
  const { changeGame, game } = useSocket();
  return (
    <View>
      <Text>this was the laps : {game.round.laps}</Text>
      {game.round.laps < 4 ? (
        <Button
          key="QUESTION"
          text="QUESTION"
          onPress={() => {
            changeGame();
            navigation.navigate("SelectGame", {
              title: "SelectGame",
            });
          }}
        />
      ) : (
        <Button
          key="Shake"
          text="Shake"
          onPress={() => {
            changeGame();
            navigation.navigate("Shake", {
              title: "Shake",
            });
          }}
        />
      )}
    </View>
  );
};
