import React, { useState } from "react";
import { View, Text, ImageBackground, Image, Dimensions } from "react-native";

import useSocket from "../../App/Socket/useSocket";
import { Button, ButtonContainer } from "../../components/Button";

import SelectGame from "../SelectGame";
import BoiteMouchoir from "../Roles/BoiteMouchoir";
import NextButton from "../../components/btn/NextBtn";

import styles from "../../utils/globalStyles";

import TitleWithContent from "../../components/titles/TitleWithContent";
import { P1, P2, P3 } from "../../components/Paragraph/Paragraph";
import { H1 } from "../../components/headers/Headers";
import { TouchableOpacity } from "react-native-gesture-handler";

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
      <P2 font={"maim"} color={"blue"}>
        Je vois, je vois ...
      </P2>
      {Math.random() > 0.5 ? (
        <>
          <P2 font={"maim"} color={"blue"}>
            {`Tu mérites de ne pas accepter\nce que tu ne veux pas.`}
          </P2>
        </>
      ) : (
        <>
          <P2 font={"maim"} color={"blue"}>
            {`cernes tes limites\net enseignes les`}
          </P2>
        </>
      )}
    </View>
  );
};
let Futur = ({ navigation }) => {
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
              transform: [{ rotate: "5deg" }],
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
                    transform: [{ rotate: "-5deg" }],
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

          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              top: -30,
              position: "relative",
              zIndex: 10,
            }}
          >
            <NextButton
              key="READY"
              text="I'm Ready !"
              onPress={() => {
                navigation.navigate("SelectGame", {
                  title: "SelectGame",
                });
              }}
            />
          </View>
          <BoiteMouchoir
            setPressCount={setPressCount}
            pressCount={pressCount}
          />
        </>
      )}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("SelectGame", {
            title: "SelectGame",
          });
        }}
      ></TouchableOpacity>
    </View>
  );
};

export default Futur;
