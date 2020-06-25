import React from "react";
import { View, StyleSheet, Image, Text, Dimensions } from "react-native";
import { Header } from "react-native/Libraries/NewAppScreen";
import { TouchableOpacity } from "react-native-gesture-handler";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default class MainHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // reporn-archi\src\assets\img\headers\gameHeaderBg.png

  render() {
    return (
      <View style={styles.main}>
        {this.props.back ? <BackBtn /> : <View style={{ flex: 2 }} />}
        {this.props.title ? (
          <TitleContainer>{this.props.title}</TitleContainer>
        ) : (
          <View style={{ flex: 0.1 }} />
        )}
        {this.props.param ? <ParamBtn /> : <View style={{ flex: 2 }} />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    height: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    zIndex: 200,
  },
  center: {
    flex: 2,
    zIndex: 2,
  },
  bg: {
    height: "100%",
    width: "100%",
    top: 0,
    resizeMode: "stretch",
  },
  bg2: {
    height: "100%",
    width: "100%",
    top: 0,
    resizeMode: "stretch",
  },
  icon: {
    position: "absolute",
    width: 30,
    height: 30,
  },
  icon1: {
    marginLeft: 10,
    marginTop: 25,
  },
  icon2: {
    marginRight: 10,
    marginTop: 25,
    right: 0,
  },
});

let BackBtn = ({}) => {
  const resizeMode = "contain";
  return (
    <View style={styles.center}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
        }}
      >
        <Image
          style={[styles.bg, { left: -20 }]}
          source={require("../../assets/img/headers/retourBg.png")}
        />
      </View>
      <View style={[styles.icon, styles.icon1]}>
        <TouchableOpacity style={{ width: "100%", height: "100%" }}>
          <Image
            style={{
              flex: 1,
              resizeMode,
            }}
            source={require("../../assets/img/headers/retourIco.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

let ParamBtn = ({}) => {
  const resizeMode = "contain";
  return (
    <View style={styles.center}>
      <View
        style={{
          flex: 1,
          backgroundColor: "transparent",
          justifyContent: "center",
        }}
      >
        <Image
          style={styles.bg}
          source={require("../../assets/img/headers/reglageBg.png")}
        />
      </View>
      <View style={[styles.icon, styles.icon2]}>
        <TouchableOpacity style={{ width: "100%", height: "100%" }}>
          <Image
            style={{
              flex: 1,
              resizeMode,
              left: -7.5,
            }}
            source={require("../../assets/img/headers/reglageIco.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

let TitleContainer = ({ children }) => {
  return (
    <View
      style={{
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "flex-start",
      }}
    >
      <View
        style={{
          flex: 1,
          width: "100%",
          zIndex: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {children}
      </View>
      <View
        style={{
          position: "absolute",
          width: "100%",
          height: 150,
        }}
      >
        <Image
          style={{
            width: "100%",
            height: "100%",
            resizeMode: "stretch",
          }}
          source={require("../../assets/img/headers/gameHeaderBg.png")}
        />
      </View>
    </View>
  );
};
