import React, { useState } from "react";
import { View, Text } from "react-native";
import useSocket from "../../App/Socket/useSocket";

import { Button, ButtonContainer } from "../../components/Button";

let Mouchoirs = ({ count, cardRole }) => {
  return (
    <>
      {count > 0 && (
        <View>
          <Text>{cardRole.genre}</Text>
        </View>
      )}
      {count > 1 && (
        <View>
          <Text>{cardRole.job}</Text>
        </View>
      )}
      {count > 2 && (
        <View>
          <Text>{cardRole.orientationS}</Text>
        </View>
      )}
    </>
  );
};
let Roles = ({ navigation }) => {
  const { character } = useSocket();

  const [pressCount, setPressCount] = useState(0);
  return (
    <View>
      {pressCount < 3 ? (
        <>
          <Text>
            Tire {3 - pressCount} mouchoir pour découvrir ton personnage
          </Text>
          <ButtonContainer>
            <Button
              key="tire un mouchoir"
              text="tire un mouchoir"
              onPress={() => {
                setPressCount(pressCount + 1);
              }}
            />
          </ButtonContainer>
        </>
      ) : (
        <>
          <Text>tu es {character.job}</Text>
          <ButtonContainer style={{ flex: 1, marginTop: "20px" }}>
            <Button key="sers a r" text="sers a r" onPress={() => {}} />
            <Button
              key="suite"
              text="suite"
              onPress={() => {
                console.log("pressed");
                navigation.navigate("Theme", {
                  title: "Theme",
                });
              }}
            />
          </ButtonContainer>
        </>
      )}

      {character.cardRole && (
        <Mouchoirs count={pressCount} cardRole={character.cardRole} />
      )}
    </View>
  );
};

export default Roles;
