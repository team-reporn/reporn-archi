import React, { useState, useEffect } from "react";

import { View, Text, Button, Image } from "react-native";
import { Accelerometer } from "expo-sensors";

import useSocket from "../../../App/Socket/useSocket";
import TitleWithContent from "../../../components/titles/TitleWithContent";
import { P1, P2, P3, PHeader } from "../../../components/Paragraph/Paragraph";
import NextButton from "../../../components/btn/NextBtn.js";

import { GLView, Asset } from "expo-gl";

import Chrono from "../../../components/Chrono";
import Award from "./Award";
import Exploit from "./Exploit";
import BasicScene from "./BasicScene";

let ShakeVue = ({ navigation, setBackGround }) => {
  const { character } = useSocket();
  const [step, setStep] = useState(0);
  // const [touchMove, setTouchMove] = useState(0)
  useEffect(() => {
    if (character.cardRole.genre == "h") {
      setBackGround(require("./Off.png"));
    }
    if (character.cardRole.genre == "f") {
      setBackGround(require("./OffCaresse.png"));
    }
  }, []);
  if (step == 0) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            transform: [{ rotate: "-5deg" }],
            marginTop: 60,
            marginBottom: 30,
          }}
        >
          <Text>{character.cardRole.genre}</Text>
          <TitleWithContent onRight>
            {character.cardRole.genre == "h" && (
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <P1 font={"maim"} color={"white"}>
                  SeCOUe TON TeLePHONe
                </P1>
                <PHeader font={"maim"} color={"white"}>
                  POUR FINIR
                </PHeader>
              </View>
            )}
            {character.cardRole.genre == "f" && (
              <View
                style={{
                  justifyContent: "left",
                  alignItems: "left",
                }}
              >
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    width: "55%",
                  }}
                >
                  <P1 font={"maim"} color={"white"}>
                    CAReSSe TON ÉCRAN
                  </P1>
                  <PHeader font={"maim"} color={"white"}>
                    pour finir
                  </PHeader>
                </View>
              </View>
            )}
          </TitleWithContent>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            zIndex: 100,
          }}
        >
          <NextButton
            onPress={() => {
              setStep(1);
            }}
          />
        </View>
      </View>
    );
  }
  if (step == 1) {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <BasicScene character={character} />
        </View>
        <View
          style={{
            flex: 1,
            bottom: 0,
            left: 0,
            position: "absolute",
            width: "100%",
          }}
        >
          <Chrono
            duration={3}
            onFinish={() => {
              setStep(2);
              if (character.cardRole.genre == "h") {
                setBackGround(require("./Award.png"));
              }
              if (character.cardRole.genre == "f") {
                setBackGround(require("./AwardCaresse.png"));
              }
            }}
          />
        </View>
      </View>
    );
  }
  if (step == 2) {
    return <Award setStep={setStep} />;
  }
  if (step == 3) {
    return <Exploit navigation={navigation} setBackGround={setBackGround} />;
  }
};

export default ShakeVue;
