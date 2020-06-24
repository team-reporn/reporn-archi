import React from "react";
import { View, StyleSheet, Image, Text, Slider } from "react-native";

export default class TitleWithContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.bg = this.props.dark
      ? require("../../assets/img/title/TitreLargeNoir.png")
      : require("../../assets/img/title/TitreLargeBleu.png");

    console.log("rogjt", this.props.children.length);
  }
  render() {
    return (
      <View style={this.props.onRight ? styles.mainOnleft : styles.main}>
        <Image
          opacity={0.5}
          style={{
            width: `${(this.props.children.length || 1.5) * 60}%`,
            height: (this.props.children.length || 1) * 100,
            resizeMode: "stretch",
          }}
          source={this.bg}
        ></Image>
        <View style={this.props.onRight ? styles.textOnLeft : styles.text}>
          {this.props.children}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainOnleft: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    left: 90,
  },
  textOnLeft: {
    color: "white",
    position: "absolute",
    left: 20,
    width: "60%",
  },
  main: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  text: {
    color: "white",
    position: "absolute",
    width: "100%",
  },
});
