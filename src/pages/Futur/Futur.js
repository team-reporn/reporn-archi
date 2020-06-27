import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import useSocket from "../../App/Socket/useSocket";
import { Button, ButtonContainer } from "../../components/Button";
import BoiteMouchoir from '../Roles/BoiteMouchoir'
import NextBtn from "../../components/btn/NextBtn";

let Futur = ({ navigation }) => {
  const [pressed, setPressed] = useState(false);
  const { character } = useSocket();
  console.log("============");
  console.log(character);
  console.log("============");
  return (
    <View>
      {!pressed ? (
        <>
          <View style={{justifyContent: "center", alignItems: "center", height: "100%"}}>
            <Image source={require('../../assets/img/scotch/Bleu.png')} />
            <Text style={{position:"absolute"}}>tire le mouchoir pour découvrir ton avenir</Text>
          </View>
          <ButtonContainer>
            <Button
              key="decouvre l'avenir"
              text="decouvre l'avenir"
              onPress={() => {
                setPressed(true);
              }}
            />
          </ButtonContainer>
          <Image style={{position: "absolute", bottom: 0}} source={require('../../assets/Mouchoirs/On.png')}               onPress={() => {
                setPressed(true);
              }}/>
        </>
      ) : (
        <>
        <View style={{justifyContent: "center", alignItems: "center", height: "100%"}}>
          <Image source={require('../../assets/Mouchoirs/Categorie.png')} />
          <View style={{position: "absolute"}}>
            <Text>je vois, je vois</Text>
            <Text>{character.futur}</Text>
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

export default Futur;
