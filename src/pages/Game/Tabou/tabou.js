import React from "react";

import {
  Button as BigButton,
  ButtonContainer,
} from "../../../components/Button";

import { View, Text, Button } from "react-native";
import Chrono from "../../../components/Chrono"
import PornnewsFlash from "./pornnewsFlash";

export default class Tabou extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
      win: false,
      word: 0,
      showFlash: false,
      wordList: [
        {
          answer: "Le cheval à bascule",
          forbidenWords: ["Mot1", "Mot2"],
        },
        {
          answer: "Le triangle lumineux",
          forbidenWords: ["Mot1", "Mot2"],
        },
        {
          answer: "La cuillère",
          forbidenWords: ["Mot1", "Mot2"],
        },
      ],
    };
  }

  renderForbidenWords = () => {
    let result = [];

    for (
      let i = 0;
      i < this.state.wordList[this.state.word].forbidenWords.length;
      i++
    ) {
      result.push(
        <Text>{this.state.wordList[this.state.word].forbidenWords[i]}</Text>
      );
    }

    return result;
  };

  render() {
    if (this.state.step == 0) {
      return (
        <View>
          <Text>Tu fait partie de l'équipe Gang Bang</Text>
          <Text>A toi de faire deviner un mot</Text>
          <Button
            title=">"
            onPress={() => {
              this.setState({ step: 1 });
            }}
          />
        </View>
      );
    } else if (this.state.step == 1) {
      return (
        <View>
          <Chrono duration={10} onFinish={()=>{this.setState({ step: 1, win: false })}}/>
          <Text>
            Fait deviner le mot : {this.state.wordList[this.state.word].answer}
          </Text>
          <Text>Sans utiliser les mots :</Text>
          {this.renderForbidenWords()}
          <Button
            title="Trouvé !"
            onPress={() => {
              this.setState({ step: 1, win: true });
            }}
          />
        </View>
      );
    }
  }
}
