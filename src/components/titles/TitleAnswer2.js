import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { AppLoading } from "expo";
import * as Font from "expo-font";

let customFonts = {
  DINDIN: require("../../assets/fonts/Din/regular/D-DIN.ttf"),
  DIN_Bold: require("../../assets/fonts/Din/bold/D-DIN-Bold.ttf"),
};
export default class TitleQuestion extends React.Component {
  constructor(props) {
    super(props);
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
          <Image
            source={require("../../assets/img/scotch/Réponse.png")}
            style={styles.image}
          />
          <Text style={styles.text}>{this.props.content}</Text>
          <Text style={styles.text2}>{this.props.content2}</Text>
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
    width: "100%",
    zIndex: 10,
    marginRight: 25,
    // backgroundColor:"green",
    marginTop: -15,
  },
  image: {
    width: "89%",
    height: 75,
  },
  text: {
    fontFamily: "DINDIN",
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: 15,
    color: "#0F0EDD",
    position: "absolute",
    paddingBottom: 28,
    paddingTop: 12,
  },
  text2: {
    fontFamily: "DIN_Bold",
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: 14,
    color: "#0F0EDD",
    position: "absolute",
    paddingTop: 12,
    width: "60%",
  },
});
