import React from "react";
import { Text, StyleSheet } from "react-native";

const H1 = ({ children, color }) => {
  return <Text style={[styles[color], styles.h1]}>{children}</Text>;
};
const H2 = ({ children, color }) => {
  return <Text style={[styles[color], styles.h2]}>{children}</Text>;
};
const H3 = ({ children, color }) => {
  return <Text style={[styles[color], styles.h3]}>{children}</Text>;
};

const styles = StyleSheet.create({
  h1: { fontSize: 45 },
  h2: { fontSize: 40 },
  h3: { fontSize: 30 },
  white: { color: "white" },
  blue: { color: "#201DCE" },
});

export { H1, H2, H3 };
