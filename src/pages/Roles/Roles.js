import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  Button,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import useSocket from "../../App/Socket/useSocket";

// import { Button, ButtonContainer } from "../../components/Button";
import TitleWithContent from "../../components/titles/TitleWithContent";
import { P1, P2 } from "../../components/Paragraph/Paragraph";
import { H3, H2 } from "../../components/headers/Headers";
import NextButton from "../../components/btn/NextBtn.js";

import styles from "../../utils/globalStyles";
import rolesStyles from "./rolesStyle";

import Mouchoirs from "./Mouchoirs";
import BoiteMouchoir from "./BoiteMouchoir";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

let Roles = ({ navigation }) => {
  const { getGameInfo, character } = useSocket();

  const [pressCount, setPressCount] = useState(0);

  return (
    <View style={styles.container}>
      {/* <ImageBackground
        source={require("../../assets/backgrounds/Perso.png")}
        style={styles.background}
      > */}
      {pressCount < 3 ? (
        <>
          <View style={rolesStyles.title}>
            <TitleWithContent onRight>
              <P1 color={"white"}>Tire {3 - pressCount} mouchoir</P1>
              <P2 color={"white"}>pour découvrir ton personnage</P2>
            </TitleWithContent>
          </View>
        </>
      ) : (
        <>
          <View style={rolesStyles.title}>
            <TitleWithContent onRight dark>
              <H3 color={"white"}>tu es ...</H3>
              <H2 color={"white"}>{character.cardRole.job}</H2>
            </TitleWithContent>
          </View>
        </>
      )}
      {character.cardRole && (
        <Mouchoirs count={pressCount} cardRole={character.cardRole} />
      )}
      {pressCount > 2 && (
        <View style={{ width: "100%", alignItems:"center"}}>
          <NextButton
            title="suite"
            text="suite"
            style={{}}
            onPress={() => {
              getGameInfo();
              navigation.navigate("Theme", {
                title: "Theme",
              });
            }}
          />
        </View>
      )}
      <BoiteMouchoir setPressCount={setPressCount} pressCount={pressCount} />
      {/* </ImageBackground> */}
    </View>
  );
};

export default Roles;
