import React, { useState } from "react";
import { View, Text } from "react-native";
import useSocket from "../../App/Socket/useSocket";
import { Button, ButtonContainer } from "../../components/Button";

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
          <Text>tire le mouchoir pour découvrir ton avenir</Text>
          <ButtonContainer>
            <Button
              key="decouvre l'avenir"
              text="decouvre l'avenir"
              onPress={() => {
                setPressed(true);
              }}
            />
          </ButtonContainer>
        </>
      ) : (
        <>
          <Text>je vois, je vois</Text>
          <Text>{character.futur}</Text>
          <ButtonContainer>
            <Button
              key="decouvre l'avenir"
              text="decouvre l'avenir"
              onPress={() => {
                navigation.navigate("PlayAgain");
              }}
            />
          </ButtonContainer>
        </>
      )}
    </View>
  );
};

export default Futur;
