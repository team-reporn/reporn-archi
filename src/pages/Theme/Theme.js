import React, { useState } from "react";
import { View, Text } from "react-native";

import useSocket from "../../App/Socket/useSocket";
import { Button, ButtonContainer } from "../../components/Button";

import SelectGame from "../SelectGame";

let Theme = ({ navigation }) => {
  const { game } = useSocket();
  const [pressed, setPressed] = useState(false);

  return (
    <View>
      {!pressed ? (
        <>
          <Text>à toi de tirer un mouchoir pour choisir un theme</Text>
          <ButtonContainer>
            <Button
              key="Categorie"
              text="Categorie"
              onPress={() => {
                setPressed(true);
              }}
            />
          </ButtonContainer>
        </>
      ) : (
        <>
          <Text>categories</Text>
          <Text>{game.theme}</Text>
          <SelectGame navigation={navigation} />
        </>
      )}
    </View>
  );
};

export default Theme;
