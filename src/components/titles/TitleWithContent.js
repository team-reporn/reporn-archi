import React from "react";
import { View, StyleSheet, Image, Text, Slider } from "react-native";
import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
// import ColorBlending from 'gl-react-color-blending';

let customFonts = {
  MaimDisfigured: require("../../assets/fonts/MainDisfigured/MaimDisfigured.ttf"),
};

export default class TitleWithContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log("meh", this.props.dark);
    this.bg = this.props.dark
      ? require("../../assets/img/scotch/Noir.png")
      : require("../../assets/img/scotch/Bleu.png");
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
    return (
      <View style={this.props.onRight ? styles.mainOnleft : styles.main}>
        {/* <ColorBlending
          color={[1,1,1,1]}
          blendMode='blendDarken'
        >
            {{uri: '../../assets/img/title/TitreLargeBleu.png'}}
        </ColorBlending> */}
        <Image
          // opacity={0.5}
          style={{
            width: `${this.props.children.length > 1 ? 120 : 110}%`,
            height: this.props.children.length > 1 ? 100 : 75,
            // width: `${(this.props.children.length || 1.5) * 60}%`,
            // height: (this.props.children.length || 1) * 45,
            resizeMode: "stretch",
          }}
          source={this.bg}
        ></Image>
        <View
          style={[
            this.props.onRight ? styles.textOnLeft : styles.text,
            {
              width: "100%",
            },
          ]}
        >
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
    left: 70,
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
    fontFamily: "MaimDisfigured",
    color: "white",
    position: "absolute",
    width: "100%",
  },
});
