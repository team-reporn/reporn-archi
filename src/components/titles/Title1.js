import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";

let customFonts = {
  MaimDisfigured: require("../../assets/fonts/MainDisfigured/MaimDisfigured.ttf"),
};

export default class Title1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    if (this.props.dark) {
      this.bg = require('../../assets/img/title/TitreNoir.png')
    } else {
      this.bg = require('../../assets/img/title/TitreBleu.png')
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
    if (this.state.fontsLoaded) {
      return (
        <View style={styles.main}>
          <View style={styles.titles}>
            <Image source={this.bg}></Image>
            <Text style={styles.text}>{this.props.content}</Text>
          </View>
          {this.props.paper !== undefined && (
            <View style={styles.titles}>
              <Image
                style={styles.imageText}
                source={require("../../assets/img/title/title1-paper.png")}
              ></Image>
              <Text style={styles.paperText}>{this.props.paper}</Text>
            </View>
          )}
        </View>
      );
    } else {
      return <AppLoading />;
    }
  }
}

const styles = StyleSheet.create({
  main: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  titles: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: "MaimDisfigured",
    color: "white",
    position: "absolute",
    fontSize: 20,
  },
  bg: {
    resizeMode: 'contain',
    width: null,
    height: null,
  },
  imageText: {
    color: 'black',
    position: 'absolute',
    // right:30,
    top: 10,
  },
  paperText: {
    color: 'black',
    padding: 40,
    paddingBottom: 50,
    justifyContent: "flex-end",
    textAlign: "right",
  },
})
