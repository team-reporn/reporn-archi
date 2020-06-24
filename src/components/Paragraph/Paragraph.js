import React from "react";
import { Text, StyleSheet } from "react-native";
import * as Font from "expo-font";
import { useFonts } from "@use-expo/font";

let customFonts = {
  MaimDisfigured: require("../../assets/fonts/MainDisfigured/MaimDisfigured.ttf"),
  DIN: require("../../assets/fonts/Din/bold/D-DIN-Bold.ttf"),
};
let isLoaded = false;

const P1 = ({ children, color, font }) => {
  let setLoaded = () => {
    console.log("meeeeeh");
    isLoaded = true;
  };
  Promise.all([Font.loadAsync(customFonts)]).then(setLoaded.bind(this));
  let lastFont = isLoaded && !!font ? font : "null";
  return (
    <Text
      style={[styles[color], styles.p1, isLoaded && !!font ? font : null]}
    >
      {children}
    </Text>
  );
};
const P2 = ({ children, color, font }) => {
  Promise.all([Font.loadAsync(customFonts)]).then(() => {
    isLoaded = true;
  });
  return (
    <Text
      style={[
        styles[color],
        styles.p2,
        isLoaded && !!font ? styles[font] : null,
      ]}
    >
      {children}
    </Text>
  );
};
const P3 = ({ children, color, font }) => {
  Promise.all([Font.loadAsync(customFonts)]).then(() => {
    isLoaded = true;
  });
  return (
    <Text
      style={[
        styles[color],
        styles.p3,
        isLoaded && !!font ? styles[font] : null,
      ]}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  p1: { fontSize: 24 },
  p2: { fontSize: 16 },
  p3: { fontSize: 13 },
  white: { color: "white" },
  blue: { color: "#0C09D7" },
  maim: { fontFamily: "MaimDisfigured" },
  din: { fontFamily: "DIN" },
  null: {},
});

export { P1, P2, P3 };
