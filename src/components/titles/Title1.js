import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { AppLoading } from 'expo'
import * as Font from 'expo-font';
import ColorBlending from 'gl-react-color-blending';


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
      <View>
        <View style={this.props.onRight ? styles.mainOnleft : styles.main}>
        <ColorBlending
          color={[1,1,1,1]}
          blendMode={'blendDarken'}
        >
            this.bg
        </ColorBlending>
          {/* <Image
            style={{
              width: `${(1.5) * 60}%`,
              height: (1) * 100,
              resizeMode: "stretch",
            }}
            source={this.bg}
          ></Image> */}
          <View style={this.props.onRight ? styles.textOnLeft : styles.text}>
            <Text style={styles.title}>{this.props.content}</Text>
          </View>
        </View>
          {this.props.paper !== undefined && (
            <View style={[styles.titles, {transform: [{scale: 0.8}, {translateX: -40}], marginTop: -50, position: "relative", display: "flex", justifyContent: "center", alignItems: "center"}]}>
              <Image
                style={[styles.imageText, {resizeMode:"stretch"}]}
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
    fontFamily: 'MaimDisfigured',
    color: "white",
    position: "absolute",
    width: "100%",
  },
  title: {
    color:"white",
    fontFamily: 'MaimDisfigured',
    textAlign: 'center'
  },
  paperText: {
    position: "absolute",
    textAlign: "center",
    fontFamily: 'MaimDisfigured',
    transform: [
      {translateY: -20}
    ]
  }
})
