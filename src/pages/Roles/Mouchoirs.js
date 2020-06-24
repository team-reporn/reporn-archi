import React from "react";
import { View, Text, Image, Dimensions } from "react-native";
import rolesStyles from "./rolesStyle";
import { P1, P2 } from "../../components/Paragraph/Paragraph";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

let Mouchoirs = ({ count, cardRole }) => {
  let rotationMouchoir1 = rolesStyles.mouchoir1.transform[0].rotate;
  let rotationMouchoir2 = rolesStyles.mouchoir2.transform[0].rotate;
  let rotationMouchoir3 = rolesStyles.mouchoir3.transform[0].rotate;
  // console.log(rotationMouchoir1, typeof rotationMouchoir1);
  return (
    <View style={rolesStyles.mouchoir}>
      {count > 0 ? (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            style={[
              rolesStyles.mouchoir1,
              { width: windowWidth * 0.45, height: windowWidth * 0.45 },
            ]}
            source={require("../../assets/Mouchoirs/Categorie.png")}
          />
          <View style={{ position: "absolute" }}>
            <P2 font={"maim"} color={"blue"}>
              {cardRole.genre}
            </P2>
          </View>
        </View>
      ) : (
        <View opacity={0.75}>
          <Image
            style={[
              rolesStyles.mouchoir1,
              { width: windowWidth * 0.45, height: windowWidth * 0.45 },
            ]}
            source={require("../../assets/Mouchoirs/Categorie.png")}
          />
        </View>
      )}
      {count > 1 ? (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            style={[
              rolesStyles.mouchoir2,
              { width: windowWidth * 0.45, height: windowWidth * 0.45 },
            ]}
            source={require("../../assets/Mouchoirs/Categorie.png")}
          />
          <View style={{ position: "absolute" }}>
            <P2 font={"maim"} color={"blue"}>
              {cardRole.job}
            </P2>
          </View>
        </View>
      ) : (
        <View opacity={0.75}>
          <Image
            style={[
              rolesStyles.mouchoir2,
              { width: windowWidth * 0.45, height: windowWidth * 0.45 },
            ]}
            source={require("../../assets/Mouchoirs/Categorie.png")}
          />
        </View>
      )}
      {count > 2 ? (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            style={[
              rolesStyles.mouchoir3,
              { width: windowWidth * 0.45, height: windowWidth * 0.45 },
            ]}
            source={require("../../assets/Mouchoirs/Categorie.png")}
          />
          <View style={{ position: "absolute" }}>
            <P2 font={"maim"} color={"blue"}>
              {cardRole.orientationS}
            </P2>
          </View>
        </View>
      ) : (
        <View opacity={0.75}>
          <Image
            style={[
              rolesStyles.mouchoir3,
              { width: windowWidth * 0.45, height: windowWidth * 0.45 },
            ]}
            source={require("../../assets/Mouchoirs/Categorie.png")}
          />
        </View>
      )}
    </View>
  );
};

export default Mouchoirs;
