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
const P1 = ({ children, color, font }) => {
  Promise.all([Font.loadAsync(customFonts)]).then(setLoaded.bind(this));
  let lastFont = isLoaded && !!font ? font : "null";

  return (
    <Text style={[styles[color], styles.p1, styles[lastFont]]}>{children}</Text>
  );
};
const P2 = ({ children, color, font }) => {
  Promise.all([Font.loadAsync(customFonts)]).then(setLoaded.bind(this));
  let lastFont = isLoaded && !!font ? font : "null";

  return (
    <Text style={[styles[color], styles.p2, styles[lastFont]]}>{children}</Text>
  );
};
const PHeader = ({ children, color, font }) => {
  Promise.all([Font.loadAsync(customFonts)]).then(setLoaded.bind(this));
  let lastFont = isLoaded && !!font ? font : "null";

  return (
    <Text style={[styles[color], styles.pHeader, styles[lastFont]]}>
      {children}
    </Text>
  );
};
const P3 = ({ children, color, font, textTransform }) => {
  Promise.all([Font.loadAsync(customFonts)]).then(setLoaded.bind(this));
  let lastFont = isLoaded && !!font ? font : "null";

  return (
    <Text
      style={[styles[color], styles.p3, styles[lastFont], styles[textTransform]]}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  p1: { fontSize: 24 },
  p2: { fontSize: 16 },
  p3: { fontSize: 13 },
  pHeader: { fontSize: 18 },
  white: { color: "white" },
  blue: { color: "#0C09D7" },
  maim: { fontFamily: "MaimDisfigured" },
  din: { fontFamily: "DIN", letterSpacing: 2 },
  null: {},
  upperCase: { textTransform: "uppercase" },
});

export { P1, P2, P3, PHeader };
