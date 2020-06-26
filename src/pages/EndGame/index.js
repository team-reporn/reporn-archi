import React, { useEffect } from "react";
import { Button, ButtonContainer } from "../../components/Button";
import { View, StyleSheet, Text, Image } from "react-native";

import useSocket from "../../App/Socket/useSocket";

import TitleAnswer from "../../components/titles/TitleAnswer";
import TitleAnswer2 from "../../components/titles/TitleAnswer2";
import Answer from "../../components/Paragraph/Answer";
import PornnewsFlash from "../../components/Paragraph/pornnewsFlash";
import SelectGame from "../SelectGame";

import content from "./content";

const questions = content;
let gameIndex = 0;

let getAnswerfromGame = ({ game }) => {
  switch (game) {
    case "tabou":
      return {
        id: 4,
        backgroundWin: require("../../assets/img/backgrounds/TabouBon.png"),
        backgroundLose: require("../../assets/img/backgrounds/TabouMauvais.png"),
      };
      break;

    case "cultureQ":
      return {
        id: 0,
        backgroundWin: require("../../assets/img/backgrounds/Question1Bon.png"),
        backgroundLose: require("../../assets/img/backgrounds/Question1Mauvais.png"),
      };
      break;

    case "acteurX":
      return {
        id: 2,
        backgroundWin: require("../../assets/img/backgrounds/ActeurXBon.png"),
        backgroundLose: require("../../assets/img/backgrounds/Question1Mauvais.png"),
      };
      break;

    case "ouEst":
      return {
        id: 1,
        backgroundWin: require("../../assets/img/backgrounds/WiwaldoBon.png"),
        backgroundLose: require("../../assets/img/backgrounds/WiwaldoMauvais.png"),
      };
      break;

    default:
      throw "non reconized game " + game;
      break;
  }
};

export default ({ navigation, setBackGround }) => {
  const { changeGame, game, setSuccess, success } = useSocket()
  gameIndex = getAnswerfromGame(game).id;
  useEffect(() => {
    console.log("nieé", getAnswerfromGame({ game: game.game }).background);
    setBackGround(getAnswerfromGame({ game: game.game }).background);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/img/pictos/Bon.png")}
        style={styles.image}
      />
      <TitleAnswer content={success ? 'BIeN JOuÉ !' : 'ou Pas !'} />
      <TitleAnswer2
        content={questions[gameIndex].content}
        content2={questions[gameIndex].content2}
      />
      <Answer content={questions[gameIndex].paragraph} />
      <PornnewsFlash content={questions[gameIndex].pornews}></PornnewsFlash>
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

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    marginBottom: 30,
    width: 64,
    height: 64,
  },
});
