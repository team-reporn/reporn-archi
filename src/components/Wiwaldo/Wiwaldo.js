import React from "react";
import { View, Text, TouchableHighlight, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    backgroundColor: "#cc0000",
    width: 200,
    height: 200,
    borderRadius: 5,
  },
});

let MultiTap = () => {
  onPress = () => null;
  let numberOfTouches = 2;

  onStartShouldSetResponder = (evt) => {
    if (evt.nativeEvent.touches.length === numberOfTouches) {
      return true;
    }

    return false;
  };

  onResponderRelease = () => {
    this.onPress();
  };

  return (
    <View
      onStartShouldSetResponder={this.onStartShouldSetResponder}
      onResponderRelease={this.onResponderRelease}
    >
      {children}
    </View>
  );
};

const Wiwaldo = () => {
  return (
    <View style={styles.container}>
      <MultiTap onPress={() => alert("double tap!")} numberOfTouches={1}>
        <TouchableHighlight onPress={() => alert("box tapped!")}>
          <View style={styles.box} />
        </TouchableHighlight>
      </MultiTap>
    </View>
  );
};

export default Wiwaldo;
