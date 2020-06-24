import React from "react";
import { Text, StyleSheet } from "react-native";
import * as Font from "expo-font";

let customFonts = {
  MaimDisfigured: require("../../assets/fonts/MainDisfigured/MaimDisfigured.ttf"),
  DIN: require("../../assets/fonts/Din/bold/D-DIN-Bold.ttf"),
};
let isLoaded = false;

let setLoaded = () => {
  isLoaded = true;
};

const H1 = ({ children, color, font }) => {
  Promise.all([Font.loadAsync(customFonts)]).then(setLoaded.bind(this));
  let lastFont = isLoaded && !!font ? font : "null";

  return (
    <Text style={[styles[color], styles.h1, styles[lastFont]]}>{children}</Text>
  );
};
const H2 = ({ children, color, font }) => {
  Promise.all([Font.loadAsync(customFonts)]).then(setLoaded.bind(this));
  let lastFont = isLoaded && !!font ? font : "null";

  return (
    <Text style={[styles[color], styles.h2, styles[lastFont]]}>{children}</Text>
  );
};
const H3 = ({ children, color, font }) => {
  Promise.all([Font.loadAsync(customFonts)]).then(setLoaded.bind(this));
  let lastFont = isLoaded && !!font ? font : "null";

  return (
    <Text style={[styles[color], styles.h3, styles[lastFont]]}>{children}</Text>
  );
};

const styles = StyleSheet.create({
  h1: { fontSize: 45 },
  h2: { fontSize: 40 },
  h3: { fontSize: 30 },
  white: { color: "white" },
  blue: { color: "#0C09D7" },
  maim: { fontFamily: "MaimDisfigured" },
  din: { fontFamily: "DIN" },
});

export { H1, H2, H3 };
