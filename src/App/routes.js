import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Socket from "./Socket";

import Room from "../pages/Room";
import JoinRoom from "../pages/JoinRoom";

import Home from "../pages/Home";
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

import GameHeader from '../components/headers/GameHeader'

const Stack = createStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Socket>
        <Stack.Navigator           screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Room" component={Room} />
          <Stack.Screen name="JoinRoom" component={JoinRoom} />
          <Stack.Screen name="SelectGame" component={SelectGame} />
          <Stack.Screen name="Quizz" component={Quizz} />
          <Stack.Screen name="Tabou" component={Tabou} />
          <Stack.Screen name="Shake" component={Shake} />
          <Stack.Screen name="Roles" component={Roles} />
          <Stack.Screen name="EndGame" component={EndGame} />
          <Stack.Screen name="Theme" component={Theme} />
          <Stack.Screen name="Achievement" component={Achievement} />
          <Stack.Screen name="Futur" component={Futur} />
          <Stack.Screen name="PlayAgain" component={PlayAgain} />
          <Stack.Screen name="Wiwaldo" component={Wiwaldo} />
        </Stack.Navigator>
      </Socket>
    </NavigationContainer>
  );
};
