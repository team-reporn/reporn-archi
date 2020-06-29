import React, { useState, useEffect } from "react";
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
import { P1, P2, P3 } from "../../components/Paragraph/Paragraph";
import { H3, H2 } from "../../components/headers/Headers";
import NextButton from "../../components/btn/NextBtn.js";

import styles from "../../utils/globalStyles";
import rolesStyles from "./rolesStyle";

import Mouchoirs from "./Mouchoirs";
import BoiteMouchoir from "./BoiteMouchoir";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

let Roles = ({ navigation, setBackGround }) => {
  const { getGameInfo, character } = useSocket();

  const [pressCount, setPressCount] = useState(0);

  useEffect(() => {
    if (character.cardRole) {
      if (pressCount >= 3) {
        if (character.cardRole.job == "Plombier.e") {
          setBackGround(require("../../assets/img/backgrounds/Plombier.png"));
        }
        if (character.cardRole.job == "Masseur.se") {
          setBackGround(require("../../assets/img/backgrounds/Masseur.png"));
        }
      }
    }
  }, [pressCount]);
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
              {/* <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  left: -70,
                }}
              >
                <P1 font={"maim"} color={"white"}>
                  SECOUE TON TELEPHONE
                </P1>
                <P3 font={"maim"} color={"white"}>
                  POUR FINIR
                </P3>
              </View> */}
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  left: -70,
                }}
              >
                <P1 font={"maim"} color={"white"}>
                  Tire {3 - pressCount} mouchoir{`${pressCount < 2 ? "s" : ""}`}
                </P1>
                <P2 font={"maim"} color={"white"}>
                  pour découvrir ton personnage
                </P2>
              </View>
              <View />
            </TitleWithContent>
          </View>
        </>
      ) : (
        <>
          <View style={rolesStyles.title}>
            <TitleWithContent onRight dark>
              <H3 font={"maim"} color={"white"}>
                tu es ...
              </H3>
              <View style={{ marginTop: -14 }}>
                <H2 font={"maim"} color={"white"}>
                  {character.cardRole && character.cardRole.job}
                </H2>
              </View>
            </TitleWithContent>
          </View>
        </>
      )}
      {character.cardRole && (
        <View style={{ flex: 3 }}>
          <Mouchoirs count={pressCount} cardRole={character.cardRole} />
        </View>
      )}
      {pressCount > 2 ? (
        <View
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            flex: 2,
            position: "relative",
            zIndex: 100,
          }}
        >
          <NextButton
            title="suite"
            text="suite"
            onPress={() => {
              console.log("clicked");
              getGameInfo();
              navigation.navigate("Theme", {
                title: "Theme",
              });
            }}
          />
        </View>
      ) : (
        <View
          style={{
            width: "100%",
            alignItems: "center",
            flex: 2,
          }}
        />
      )}
      <BoiteMouchoir setPressCount={setPressCount} pressCount={pressCount} />
    </View>
  );
};

export default Roles;
