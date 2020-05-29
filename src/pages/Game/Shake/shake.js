import React from "react";

import {
  Button as BigButton,
  ButtonContainer,
} from "../../../components/Button";

import { View, Text, Button } from "react-native";
import { Accelerometer } from "expo-sensors";

export default class Shake extends React.Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      step: 0,
      timer: null,
      timerDuration: 10,
      timerLeft: 10,
      accelerometerData: { x: 0, y: 0, z: 0 },
      result: 0,
      resultList: ["Le rythme dans la peau", "La plus passionée"],
    };
  }

  componentDidMount() {
    this._isMounted = true;
  }

  startTimer = () => {
    this._subscription = Accelerometer.addListener((accelerometerData) => {
      this.setState({ accelerometerData });
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
      this.setState({ step: 2 });
      this._subscription && this._subscription.remove();
      this._subscription = null;
      this.setState({
        result: Math.floor(Math.random() * this.state.resultList.length),
      });
    }
  };

  render() {
    if (this.state.step == 0) {
      return (
        <View>
          <Text>Secoue ton téléphone pour finir</Text>
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
        </View>
      );
    } else if (this.state.step == 2) {
      return (
        <View>
          <Text>{this.state.resultList[this.state.result]}</Text>
          <ButtonContainer>
            <BigButton
              key="achievement"
              text="achievement"
              onPress={() => {
                this.props.navigation.navigate("Achievement", {
                  title: "Achievement",
                });
              }}
            />
          </ButtonContainer>
        </View>
      );
    }
  }
}
