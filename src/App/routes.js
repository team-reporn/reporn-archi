import React from "react";
import { View, ImageBackground, StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Socket from "./Socket";

import Room from "../pages/Room";
import JoinRoom from "../pages/JoinRoom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import SelectGame from "../pages/SelectGame";
import EndGame from "../pages/EndGame";

import Roles from "../pages/Roles";
import Theme from "../pages/Theme";
import Achievement from "../pages/Achievement";
import Futur from "../pages/Futur";
import PlayAgain from "../pages/PlayAgain";

import Quizz from "../pages/Game/Quizz";
import Tabou from "../pages/Game/Tabou";
import Shake from "../pages/Game/Shake";
import Wiwaldo from "../pages/Game/Wiwaldo";

import GameHeader from "../components/headers/GameHeader";
import MainHeader from "../components/headers/MainHeader";

const Stack = createStackNavigator();

// let Layout = ({ headerParam, headerBack, Content, navigation }) => {
//   return () => {
//     return (
//       <ImageBackground
//         source={require("../assets/img/backgrounds/Question1.png")}
//         style={styles.background}
//       >
//         <View style={styles.header}>
//           <MainHeader param={!!headerParam} back={!!headerBack} />
//         </View>

//         <View style={styles.content}>{<Content navigation />}</View>
//       </ImageBackground>
//     );
//   };
// };
export default () => {
  return (
    <NavigationContainer>
      <Socket>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home">
            {(props) => {
              return (
                <ImageBackground
                  source={require("../assets/img/backgrounds/Question1.png")}
                  style={styles.background}
                >
                  <View style={styles.header}>
                    <MainHeader param />
                  </View>

                  <View style={styles.content}>
                    <Home {...props} />
                  </View>
                </ImageBackground>
              );
            }}
          </Stack.Screen>
          <Stack.Screen name="Login">
            {(props) => {
              return (
                <ImageBackground
                  source={require("../assets/img/backgrounds/Home.png")}
                  style={styles.background}
                >
                  <View style={styles.header}>
                    <MainHeader param back />
                  </View>
                  <View style={styles.content}>
                    <Login {...props} />
                  </View>
                </ImageBackground>
              );
            }}
          </Stack.Screen>
          <Stack.Screen name="Room">
            {(props) => {
              return (
                <ImageBackground
                  source={require("../assets/img/backgrounds/Home.png")}
                  style={styles.background}
                >
                  <View style={styles.header}>
                    <MainHeader param back />
                  </View>
                  <View style={styles.content}>
                    <Room {...props} />
                  </View>
                </ImageBackground>
              );
            }}
          </Stack.Screen>
          <Stack.Screen name="JoinRoom">
            {(props) => {
              return (
                <ImageBackground
                  source={require("../assets/img/backgrounds/Home.png")}
                  style={styles.background}
                >
                  <View style={styles.header}>
                    <MainHeader />
                  </View>
                  <View style={styles.content}>
                    <JoinRoom {...props} />
                  </View>
                </ImageBackground>
              );
            }}
          </Stack.Screen>
          <Stack.Screen name="SelectGame">
            {(props) => {
              return (
                <ImageBackground
                  source={require("../assets/img/backgrounds/Home.png")}
                  style={styles.background}
                >
                  <View style={styles.header}>
                    <MainHeader />
                  </View>
                  <View style={styles.content}>
                    <SelectGame {...props} />
                  </View>
                </ImageBackground>
              );
            }}
          </Stack.Screen>
          <Stack.Screen name="Quizz">
            {(props) => {
              return (
                <ImageBackground
                  source={require("../assets/img/backgrounds/Question1.png")}
                  style={styles.background}
                >
                  <View style={styles.header}>
                    <MainHeader />
                  </View>
                  <View style={styles.content}>
                    <Quizz {...props} />
                  </View>
                </ImageBackground>
              );
            }}
          </Stack.Screen>
          <Stack.Screen name="Tabou">
            {(props) => {
              return (
                <ImageBackground
                  source={require("../assets/img/backgrounds/Home.png")}
                  style={styles.background}
                >
                  <View style={styles.header}>
                    <MainHeader />
                  </View>
                  <View style={styles.content}>
                    <Tabou {...props} />
                  </View>
                </ImageBackground>
              );
            }}
          </Stack.Screen>
          <Stack.Screen name="Shake">
            {(props) => {
              return (
                <ImageBackground
                  source={require("../assets/img/backgrounds/Home.png")}
                  style={styles.background}
                >
                  <View style={styles.header}>
                    <MainHeader />
                  </View>
                  <View style={styles.content}>
                    <Shake {...props} />
                  </View>
                </ImageBackground>
              );
            }}
          </Stack.Screen>
          <Stack.Screen name="Roles">
            {(props) => {
              return (
                <ImageBackground
                  source={require("../assets/img/backgrounds/Home.png")}
                  style={styles.background}
                >
                  <View style={styles.header}>
                    <MainHeader param back />
                  </View>
                  <View style={styles.content}>
                    <Roles {...props} />
                  </View>
                </ImageBackground>
              );
            }}
          </Stack.Screen>
          <Stack.Screen name="EndGame">
            {(props) => {
              return (
                <ImageBackground
                  source={require("../assets/img/backgrounds/Home.png")}
                  style={styles.background}
                >
                  <View style={styles.header}>
                    <MainHeader />
                  </View>
                  <View style={styles.content}>
                    <EndGame {...props} />
                  </View>
                </ImageBackground>
              );
            }}
          </Stack.Screen>
          <Stack.Screen name="Theme">
            {(props) => {
              return (
                <ImageBackground
                  source={require("../assets/backgrounds/Categorie.png")}
                  style={styles.background}
                >
                  <View style={styles.header}>
                    <MainHeader param back />
                  </View>
                  <View style={styles.content}>
                    <Theme {...props} />
                  </View>
                </ImageBackground>
              );
            }}
          </Stack.Screen>
          <Stack.Screen name="Achievement">
            {(props) => {
              return (
                <ImageBackground
                  source={require("../assets/img/backgrounds/Home.png")}
                  style={styles.background}
                >
                  <View style={styles.header}>
                    <MainHeader />
                  </View>
                  <View style={styles.content}>
                    <Achievement {...props} />
                  </View>
                </ImageBackground>
              );
            }}
          </Stack.Screen>

          <Stack.Screen name="Futur">
            {(props) => {
              return (
                <ImageBackground
                  source={require("../assets/img/backgrounds/Home.png")}
                  style={styles.background}
                >
                  <View style={styles.header}>
                    <MainHeader />
                  </View>
                  <View style={styles.content}>
                    <Futur {...props} />
                  </View>
                </ImageBackground>
              );
            }}
          </Stack.Screen>
          <Stack.Screen name="PlayAgain">
            {(props) => {
              return (
                <ImageBackground
                  source={require("../assets/img/backgrounds/Home.png")}
                  style={styles.background}
                >
                  <View style={styles.header}>
                    <MainHeader />
                  </View>
                  <View style={styles.content}>
                    <PlayAgain {...props} />
                  </View>
                </ImageBackground>
              );
            }}
          </Stack.Screen>
          <Stack.Screen name="Wiwaldo">
            {(props) => {
              return (
                <ImageBackground
                  source={require("../assets/img/backgrounds/Home.png")}
                  style={styles.background}
                  resizeMode="cover"
                >
                  <View style={styles.header}>
                    <MainHeader />
                  </View>
                  <View style={styles.content}>
                    <Wiwaldo {...props} />
                  </View>
                </ImageBackground>
              );
            }}
          </Stack.Screen>
        </Stack.Navigator>
      </Socket>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-start",
    flexDirection: "column",
  },
  content: { flex: 7 },
  header: { flex: 1 },
});
