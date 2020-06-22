import React from "react";
import { View, TouchableOpacity, Image, Dimensions } from "react-native";
import rolesStyles from "./rolesStyle";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const BoiteMouchoir = ({ setPressCount, pressCount }) => {
  return (
    <View style={rolesStyles.boiteMouchoir}>
      {pressCount < 3 ? (
        <TouchableOpacity
          onPress={() => {
            setPressCount(pressCount + 1);
          }}
        >
          <View style={rolesStyles.boiteMouchoirArrow}>
            <Image
              style={{
                width: 50,
                height: 50,
                transform: [{ rotate: "90deg" }],
              }}
              source={require("../../assets/nav/arrow.png")}
              onPress={() => {
                setPressCount(pressCount + 1);
              }}
            />
          </View>
          <Image
            style={{
              width: "100%",
              height: windowHeight * 0.3,
              resizeMode: "stretch",
            }}
            source={require("./On.png")}
          />
        </TouchableOpacity>
      ) : (
        <Image
          style={{
            width: "100%",
            height: windowHeight * 0.3,
            resizeMode: "stretch",
          }}
          source={require("./Off.png")}
        />
      )}
    </View>
  );
};

export default BoiteMouchoir;
