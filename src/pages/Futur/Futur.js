import React, { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import useSocket from "../../App/Socket/useSocket";
import { Button, ButtonContainer } from "../../components/Button";
import BoiteMouchoir from '../Roles/BoiteMouchoir'
import NextBtn from "../../components/btn/NextBtn";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import * as Font from "expo-font";

let customFonts = {
  MaimDisfigured: require("../../assets/fonts/MainDisfigured/MaimDisfigured.ttf"),
  DIN: require("../../assets/fonts/Din/bold/D-DIN-Bold.ttf"),
};

let isLoaded = false;

let setLoaded = () => {
  isLoaded = true;
};

let Futur = ({ navigation }) => {
  const [pressed, setPressed] = useState(false);
  const { character } = useSocket();
  console.log("============");
  console.log(character);
  console.log("============");

  Promise.all([Font.loadAsync(customFonts)]).then(setLoaded.bind(this));
  let lastFont = isLoaded && !!"din" ? "din" : "null";

  return (
    <View>
      {!pressed ? (
        <>
          <View style={{justifyContent: "center", alignItems: "center", height: "100%"}}>
            <Image source={require('../../assets/img/scotch/Bleu.png')} />
            <Text style={[{position:"absolute", color: "white"}, styles[lastFont]]}>tire le mouchoir pour découvrir ton avenir</Text>
          </View>
          {/* <ButtonContainer>
            <Button
              key="decouvre l'avenir"
              text="decouvre l'avenir"
              onPress={() => {
                setPressed(true);
              }}
            />
          </ButtonContainer> */}
          <TouchableWithoutFeedback onPress={() => {
                setPressed(true);
              }}>
          <Image style={{}} source={require('../../assets/Mouchoirs/On.png')}/>
          </TouchableWithoutFeedback>
        </>
      ) : (
        <>
        <View style={{justifyContent: "center", alignItems: "center", height: "100%"}}>
          <Image source={require('../../assets/Mouchoirs/Categorie.png')} />
          <View style={{position: "absolute"}}>
            <Text style={styles[lastFont]}>je vois, je vois</Text>
            <Text style={styles[lastFont]}>{character.futur}</Text>
          </View>
        </View>

          <NextBtn onPress={() => {
                navigation.navigate("PlayAgain");
              }}/>
        <Image style={{position: "absolute", bottom: 0}} source={require('../../assets/Mouchoirs/Off.png')}/>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  din: { fontFamily: "DIN" },
  null: {},
});

export default Futur;
