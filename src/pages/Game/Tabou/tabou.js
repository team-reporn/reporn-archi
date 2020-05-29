import React from "react";

import {
  Button as BigButton,
  ButtonContainer,
} from "../../../components/Button";

import { View, Text, Button } from "react-native";
import PornnewsFlash from "./pornnewsFlash";

export default class Tabou extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
      timer: null,
      timerDuration: 10,
      timerLeft: 10,
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

  startTimer = () => {
    this.setState({
      word: Math.floor(Math.random() * this.state.wordList.length),
    });
    let timer = setInterval(this.timerCheck, 1000);
    this.setState({ timer });
  };

  componentWillUnmount() {
    clearInterval(this.state.timer);
  }

  timerCheck = () => {
    this.setState({ timerLeft: this.state.timerLeft - 1 });
    if (this.state.timerLeft <= 0) {
      clearInterval(this.state.timer);
      this.setState({ step: 2, win: false });
    }
  };

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
              this.startTimer();
            }}
          />
        </View>
      );
    } else if (this.state.step == 1) {
      return (
        <View>
          <Text>{this.state.timerLeft}:00:00</Text>
          <Text>
            Fait deviner le mot : {this.state.wordList[this.state.word].answer}
          </Text>
          <Text>Sans utiliser les mots :</Text>
          {this.renderForbidenWords()}
          <Button
            title="Trouvé !"
            onPress={() => {
              this.setState({ step: 2, win: true });
              clearInterval(this.state.timer);
            }}
          />
        </View>
      );
    } else if (this.state.step == 2) {
      let result;
      if (this.state.win) {
        result = "Bien joué !";
      } else {
        result = "Ou pas !";
      }
      return (
        <View>
          <Text>{result}</Text>
          <Text>
            Le safe word est {this.state.wordList[this.state.word].answer}
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper
            lobortis quam ac interdum. Maecenas vel ipsum erat. Mauris
            pellentesque, augue id pulvinar tempus, mi tellus dapibus neque, a
            luctus nisi nibh hendrerit nunc. Etiam mi lacus, pharetra non elit
            sed, venenatis congue leo. Donec feugiat viverra cursus. Aenean vel
            libero posuere neque interdum eleifend. Nunc sed odio vel ligula
            pretium elementum eget et eros. Maecenas gravida mauris eu felis
            rhoncus congue vel luctus augue. Nunc vitae rhoncus nibh, in
            sollicitudin diam.
          </Text>
          <Button
            title="Pornnews"
            onPress={() => this.setState({ showFlash: !this.state.showFlash })}
          />
          {this.state.showFlash && (
            <PornnewsFlash content="Blaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" />
          )}
          <ButtonContainer>
            <BigButton
              key="end game"
              text="end game"
              onPress={() =>
                //this.answer(answer.correct)
                {
                  this.props.navigation.navigate("EndGame", {
                    title: "EndGame",
                  });
                }
              }
            />
          </ButtonContainer>
        </View>
      );
    }
  }
}
