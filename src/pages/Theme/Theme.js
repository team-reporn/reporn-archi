import React, { useState } from "react";
import { View, Text, ImageBackground, Image } from "react-native";

import useSocket from "../../App/Socket/useSocket";
import { Button, ButtonContainer } from "../../components/Button";

import SelectGame from "../SelectGame";
import BoiteMouchoir from "../Roles/BoiteMouchoir";

import styles from "../../utils/globalStyles";

import TitleWithContent from "../../components/titles/TitleWithContent";
import { P1, P2, P3 } from "../../components/Paragraph/Paragraph";
import { H1 } from "../../components/headers/Headers";


let CategorieMouchoir = ({ theme }) => {
  return (
    <View
      style={{
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image
        style={{ position: "absolute" }}
        source={require("../../assets/Mouchoirs/Categorie.png")}
      />
      <P3 color={"blue"}>categorie</P3>
      <H1 color={"blue"}>{theme}</H1>
    </View>
  );
};

let Theme = ({ navigation }) => {
  const { game } = useSocket();
  const [pressed, setPressed] = useState(false);
  const [pressCount, setPressCount] = useState(2);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/backgrounds/Categorie.png")}
        style={styles.background}
      >
        {/* {!pressed ? (
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
        )} */}
        {pressCount < 3 ? (
          <>
            <View
              style={{
                transform: [{ rotate: "5deg" }],
                flex: 3,
                marginTop: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TitleWithContent>
                <View
                  style={{
                    transform: [{ rotate: "-5deg" }],
                    alignItems: "center",
                  }}
                >
                  <P1 color={"white"}>A toi</P1>
                  <P1 color={"white"}>de tirer un mouchoir</P1>
                  <P2 color={"white"}>pour choisir le theme</P2>
                </View>
              </TitleWithContent>
            </View>
            <BoiteMouchoir
              setPressCount={setPressCount}
              pressCount={pressCount}
            />
          </>
        ) : (
          <>
            <View
              style={{
                transform: [{ rotate: "5deg" }],
                flex: 8,
                marginTop: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TitleWithContent>
                <CategorieMouchoir theme={game.theme} />
              </TitleWithContent>
            </View>
            <SelectGame navigation={navigation} />

            <BoiteMouchoir
              setPressCount={setPressCount}
              pressCount={pressCount}
            />
          </>
        )}
      </ImageBackground>
    </View>
  );
};

export default Theme;
