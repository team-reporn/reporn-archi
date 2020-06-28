import React from 'react'
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { AppLoading } from 'expo'
import * as Font from 'expo-font'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

let customFonts = {
  DIN_Regular: require('../../assets/fonts/Din/bold/D-DIN-Bold.ttf'),
}

export default class MainBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.pressed = false;

    if (this.props.blue) {
      this.state.startBtn = require("../../assets/img/btn/AnswerBtnBlue.png");
      this.state.pressedBtn = require("../../assets/img/btn/AnswerBtnWhite.png");
    } else {
      this.state.pressedBtn = require("../../assets/img/btn/AnswerBtnBlue.png");
      this.state.startBtn = require("../../assets/img/btn/AnswerBtnWhite.png");
    }
  }

  state = {
    fontsLoaded: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    let textColor,
      textPressedColor,
      rotation = "";
    if (this.props.blue) {
      textColor = styles.textWhite;
      textPressedColor = styles.textBlue;
    } else {
      textColor = styles.textBlue;
      textPressedColor = styles.textWhite;
    }

    this.props.rotation1 ? (rotation = styles.rotation1) : "";
    this.props.rotation2 ? (rotation = styles.rotation2) : "";
    this.props.rotation3 ? (rotation = styles.rotation3) : "";
    this.props.rotation4 ? (rotation = styles.rotation4) : "";

    if (this.state.fontsLoaded) {
      return (
        <View style={rotation}>
          <TouchableWithoutFeedback
            style={[styles.main]}
            onPress={this.props.onPress}
            onPressIn={() => {
              this.setState({ pressed: true });
            }}
            onPressOut={() => {
              this.setState({ pressed: false });
            }}
          >
            <ImageBtn
              pressed={this.state.pressed}
              startBtn={this.state.startBtn}
              pressedBtn={this.state.pressedBtn}
            />
            <Text
              style={[
                this.props.bold ? styles.bold : null,
                styles.text,
                this.state.pressed ? textPressedColor : textColor,
              ]}
            >
              {this.props.content}
            </Text>
          </TouchableWithoutFeedback>
        </View>
      );
    } else {
      return <AppLoading />;
    }
  }
}

const styles = StyleSheet.create({
  main: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    position: "absolute",
    fontFamily: "DIN_Regular",
  },
  textBlue: {
    color: "blue",
  },
  textWhite: {
    color: "white",
  },
  rotation1: {
    transform: [{ rotate: "-6deg" }],
  },
  rotation2: {
    transform: [{ rotate: "6deg" }],
  },
  rotation3: {
    transform: [{ rotate: "-1deg" }],
  },
  rotation4: {
    transform: [{ rotate: "-6deg" }],
  },
  bold: { fontWeight: "bold" },
});

let ImageBtn = ({ pressed, startBtn, pressedBtn }) => {
  return pressed ? (
    <Image style={styles.child} source={pressedBtn}></Image>
  ) : (
    <Image style={styles.child} source={startBtn}></Image>
  );
};
