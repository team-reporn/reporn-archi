import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { AppLoading } from 'expo'
import * as Font from 'expo-font';

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
          <View style={[styles.titles, {backgroundColor: 'green'}]}>
            <View>
              <Image source={this.bg}></Image>
            </View>
            <View style={{position: 'absolute', display: 'flex', justifyContent: "center", alignItems: "center",}}>
              <Text style={[styles.text, {position: "absolute", backgroundColor: 'green'}]}>{this.props.content}</Text>
            </View>
          </View>
          {this.props.paper !== undefined && (
            <View style={[styles.titles, {backgroundColor: 'green'}]}>
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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'red',
  },
  titles: {
    justifyContent: "center",
    alignItems: "center",
    width:' 80%'
  },
  text: {
    fontFamily: 'MaimDisfigured',
    color: "white",
    fontSize: 20
  },
  bg: {
    flex: 1,
    resizeMode: "stretch",
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
