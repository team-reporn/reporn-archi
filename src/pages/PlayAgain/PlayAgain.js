import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import * as Font from 'expo-font';

import { Button, ButtonContainer } from "../../components/Button";
import NextBtn from "../../components/btn/NextBtn";
import LinkBtn from "../../components/btn/LinkBtn";
import BigTitle from "../../components/titles/BigTitle";

let customFonts = {
  MaimDisfigured: require("../../assets/fonts/MainDisfigured/MaimDisfigured.ttf"),
  DIN: require("../../assets/fonts/Din/bold/D-DIN-Bold.ttf"),
};

let isLoaded = false;

let setLoaded = () => {
  isLoaded = true;
};


const PlayAgain = ({ navigation }) => {
  Promise.all([Font.loadAsync(customFonts)]).then(setLoaded.bind(this));
  let lastFont = isLoaded && !!"maim" ? "maim" : "null";

  return (
    <View>
      <View style={{marginBottom: 10}}>
        <BigTitle content="Un autre round ?"/>
      </View>
      {/* <ButtonContainer>
        <Button
          key="replay"
          text="replay"
          onPress={() => {
            //TODO faire une fonction qui handle ça niveau socket pour actualiser le jeu
            navigation.navigate("Theme", {
              title: "Theme",
            });
          }}
        />
        <Button
          key="revenir à l'acceuil"
          text="revenir à l'acceuil"

        />
      </ButtonContainer> */}
        <View style={{marginBottom: 50}}>
          <NextBtn onPress={() => {
        }}/>
          </View>
          <LinkBtn content="Revenir à l'accueil" onPress={()=>{
            navigation.navigate("Home", {
              title: "Home",
            });}} />
    </View>
  );
};

const styles = StyleSheet.create({
  maim: { fontFamily: "MaimDisfigured" },
  null: {},
});

export default PlayAgain;
