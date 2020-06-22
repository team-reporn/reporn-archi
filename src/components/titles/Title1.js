import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

export default class Title1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    if (this.props.dark) {
      this.bg = require("../../assets/img/title/TitreNoir.png");
    } else {
      this.bg = require("../../assets/img/title/TitreBleu.png");
    }
  }

  render() {
    return (
      <View style={styles.main}>
        <View style={styles.main}>
          <Image source={this.bg}></Image>
          <Text style={styles.text}>{this.props.content}</Text>
        </View>
        {this.props.paper !== undefined && (
          <View style={styles.main}>
            <Image
              style={styles.imageText}
              source={require("../../assets/img/title/title1-paper.png")}
            ></Image>
            <Text style={styles.paperText}>{this.props.paper}</Text>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    position: "absolute",
  },
  imageText: {
    color: "black",
    position: "absolute",
    // right:30,
    top: 10,
  },
  paperText: {
    color: "black",
    padding: 40,
    paddingBottom: 50,
    justifyContent:"flex-end",
    textAlign: "right"
  },
});
