import React from "react";
import { Text, StyleSheet } from "react-native";

const P1 = ({ children, color }) => {
  return <Text style={[styles[color], styles.p1]}>{children}</Text>;
};
const P2 = ({ children, color }) => {
  return <Text style={[styles[color], styles.p2]}>{children}</Text>;
};
const P3 = ({ children, color }) => {
  return <Text style={[styles[color], styles.p3]}>{children}</Text>;
};

const styles = StyleSheet.create({
  p1: { fontSize: 24 },
  p2: { fontSize: 16 },
  p3: { fontSize: 13 },
  white: { color: "white" },
});

export { P1, P2, P3 };
