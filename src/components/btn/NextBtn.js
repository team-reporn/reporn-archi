import React from "react";
import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export default class NextBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  playSound = () => {
    try {
      const {
        sound: soundObject,
        status,
      } = Audio.Sound.createAsync(
        require("../../assets/sound/dechirure_2.wav"),
        { shouldPlay: true }
      );
    } catch (error) {}
  };

  onPress = () => {
    this.playSound();
    this.props.onPress();
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={this.onPress}
        >
          <Text>meh</Text>
          <Image
            style={styles.image}
            source={require("../../assets/img/btn/Suivant.png")}
          ></Image>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  image: {
    width: 126,
    height: 83,
  },
});
