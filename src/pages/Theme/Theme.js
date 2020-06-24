import React, { useState } from "react";
import { View, Text, ImageBackground, Image, Dimensions } from "react-native";

import useSocket from "../../App/Socket/useSocket";
import { Button, ButtonContainer } from "../../components/Button";

import SelectGame from "../SelectGame";
import BoiteMouchoir from "../Roles/BoiteMouchoir";

import styles from "../../utils/globalStyles";

import TitleWithContent from "../../components/titles/TitleWithContent";
import { P1, P2, P3 } from "../../components/Paragraph/Paragraph";
import { H1 } from "../../components/headers/Headers";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

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
        style={{
          position: "absolute",
          width: windowWidth * 0.8,
          height: windowWidth * 0.8,
        }}
        source={require("../../assets/Mouchoirs/Categorie.png")}
      />
      <P3 font={"maim"} color={"blue"}>
        categorie
      </P3>
      <H1 font={"maim"} color={"blue"}>
        {theme}
      </H1>
    </View>
  );
};

let Theme = ({ navigation }) => {
  const { game } = useSocket();
  const [pressed, setPressed] = useState(false);
  const [pressCount, setPressCount] = useState(2);

  return (
    <View style={styles.container}>
      {/* ici j'ai troll il faut mettre la condition
          dans le title with content et remplacer son contenu
          ainsi que mettre une condition au bonton suite  */}
      {pressCount < 3 ? (
        <>
          <View
            style={{
              transform: [{ rotate: "-5deg" }],
              flex: 3,
              marginTop: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View style={{ width: "90%" }}>
              <TitleWithContent>
                <View
                  style={{
                    transform: [{ rotate: "5deg" }],
                    alignItems: "center",
                  }}
                >
                  <P1 font={"maim"} color={"white"}>
                    A toi
                  </P1>
                  <P1 font={"maim"} color={"white"}>
                    de tirer un mouchoir
                  </P1>
                  <P2 font={"maim"} color={"white"}>
                    pour choisir le theme
                  </P2>
                </View>
                <View />
              </TitleWithContent>
            </View>
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
            <View style={{ width: "90%" }}>
              <TitleWithContent>
                <CategorieMouchoir theme={game.theme} />
                <View />
              </TitleWithContent>
            </View>
          </View>
          <SelectGame navigation={navigation} />
          <BoiteMouchoir
            setPressCount={setPressCount}
            pressCount={pressCount}
          />
        </>
      )}
    </View>
  );
};

export default Theme;
