import React from "react";
import { View, Text, Button, Image } from "react-native";

import TitleWithContent from "../../../components/titles/TitleWithContent";
import { P1, P2, P3 } from "../../../components/Paragraph/Paragraph";
import NextButton from "../../../components/btn/NextBtn.js";

let Award = ({ setStep }) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 7, flexDirection: "row" }}>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            style={{
              width: "90%",
              height: "50%",
              resizeMode: "contain",
              transform: [{ rotate: "15deg" }],
              marginTop: -25,
            }}
            source={require("./Tall.png")}
          />
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              width: "200%",
              transform: [{ rotate: "-15deg" }],
              marginTop: 25,
            }}
          >
            <TitleWithContent onRight>
              <P1 font={"maim"} color={"white"}>
                LE RYTHME
              </P1>
              <P1 font={"maim"} color={"white"}>
                DANS LA PEAU
              </P1>
            </TitleWithContent>
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "flex-end",
        }}
      >
        <NextButton
          onPress={() => {
            setStep(3);
          }}
        />
      </View>
    </View>
  );
};
export default Award;
