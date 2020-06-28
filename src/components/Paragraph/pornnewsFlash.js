import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AppLoading } from "expo";
import * as Font from "expo-font";

let customFonts = {
  DINDIN: require("../../assets/fonts/Din/regular/D-DIN.ttf"),
  MaimDisfigured: require("../../assets/fonts/MainDisfigured/MaimDisfigured.ttf"),
  DIN_Bold: require("../../assets/fonts/Din/bold/D-DIN-Bold.ttf"),
};

export default class PornnewsFlash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
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
          <View
            style={{
              position: "relative",
              zIndex: 1000,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                this.setState({ show: !this.state.show });
              }}
            >
              <Image
                style={styles.picto}
                source={require("../../assets/img/pictos/Flash.png")}
              />
            </TouchableOpacity>
          </View>
          {this.state.show && (
            <View style={styles.content}>
              <Image
                style={styles.image}
                source={require("../../assets/img/pornNews/Flash.png")}
              />
              <View style={styles.textCtn}>
                <Text style={styles.title}>Pornews Flash</Text>
                <Text style={styles.text}>{this.props.content}</Text>
                <Text style={styles.text2}>
                  POUR SAVOIR PLUS, RDV après la partie, sur pornews à l’accueil
                </Text>
              </View>
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
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: -50,
    zIndex: 30,
  },
  content: {
    position: "absolute",
    height: "100%",
    width: "100%",
    zIndex: 10,
  },
  picto: {
    width: 60,
    height: 60,
  },
  textCtn: {
    position: "absolute",
    marginTop: 25,
    padding: "5%",
  },
  title: {
    fontFamily: "MaimDisfigured",
    color: "white",
    textAlign: "center",
    fontSize: 20,
    marginBottom: 10,
  },
  text: {
    fontFamily: "DINDIN",
    color: "white",
    // fontWeight: "100",
    fontWeight: "bold",
    textAlign: "left",
    fontSize: 13,
    marginBottom: 13,
  },
  text2: {
    fontFamily: "DINDIN",
    color: "white",
    textAlign: "left",
    fontSize: 13,
  },
  image: {
    width: "100%",
    height: 360,
    resizeMode: "contain",
    marginTop: -80,
  },
});
