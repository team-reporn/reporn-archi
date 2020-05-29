import React from "react";
import { View, Text } from "react-native";
import useSocket from "../../App/Socket/useSocket";
import { Button, ButtonContainer } from "../../components/Button";

let Achievement = ({ navigation }) => {
  const { character } = useSocket();
  return (
    <View>
      <Text>{character.cardRole.job}</Text>
      <Text>retour sur tes Performance</Text>
      <Text>perf shake</Text>
      <Text>perf voyeurisme</Text>
      <Text>perf expert sextoy</Text>
      <Text>perf rapidité</Text>
      <ButtonContainer>
        <Button
          key="voir l'avenir"
          text="voir l'avenir"
          onPress={() => {
            navigation.navigate("Futur", {
              title: "Futur",
            });
          }}
        />
      </ButtonContainer>
    </View>
  );
};

export default Achievement;
