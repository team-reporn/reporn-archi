import React from "react";
import { View, TouchableOpacity, Image, Dimensions } from "react-native";
import rolesStyles from "./rolesStyle";
import {Audio} from "expo-av"

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const BoiteMouchoir = ({ setPressCount, pressCount }) => {

  playSound1 = ()=> {
    try {
        const { sound: soundObject, status } = Audio.Sound.createAsync(
          require('../../assets/sound/tirer_mouchoir_1.wav'),
          { shouldPlay: true }
        );
      } catch (error) {
    }
}

playSound2 = ()=> {
  try {
      const { sound: soundObject, status } = Audio.Sound.createAsync(
        require('../../assets/sound/tirer_mouchoir_2.wav'),
        { shouldPlay: true }
      );
    } catch (error) {
  }
}

playSound3 = ()=> {
  try {
      const { sound: soundObject, status } = Audio.Sound.createAsync(
        require('../../assets/sound/tirer_mouchoir_3.wav'),
        { shouldPlay: true }
      );
    } catch (error) {
  }
}

  return (
    <View style={rolesStyles.boiteMouchoir}>
      {pressCount < 3 ? (
        <TouchableOpacity
          onPress={() => {
            switch (pressCount) {
              case 0:
                playSound1()
                break;
              case 1:
                playSound2()
                break;
              case 2:
                playSound3()
                break;
            
              default:
                break;
            }
            setPressCount(pressCount + 1);
          }}
        >
          <View style={rolesStyles.boiteMouchoirArrow}>
            <Image
              style={{
                width: 30,
                height: 30,
                marginTop: -50,
                transform: [{ rotate: "90deg" }],
              }}
              source={require("../../assets/img/headers/retourIco.png")}
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
