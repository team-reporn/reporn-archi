import React from "react";
import { View, Text } from "react-native";

import { Button, ButtonContainer } from "../../components/Button";
const PlayAgain = ({ navigation }) => {
  return (
    <View>
      <Text>Un autre round ?</Text>
      <ButtonContainer>
        <Button
          key="replay"
          text="replay"
          onPress={() => {
            navigation.navigate("Theme", {
              title: "Theme",
            });
          }}
        />
        <Button
          key="revenir à l'acceuil"
          text="revenir à l'acceuil"
          onPress={() => {
            navigation.navigate("Home", {
              title: "Home",
            });
          }}
        />
      </ButtonContainer>
    </View>
  );
};

export default PlayAgain;
