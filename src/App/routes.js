import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Socket from "./Socket";

import Home from "../pages/Home";
import SelectGame from "../pages/SelectGame";
import Game from "../pages/Game";
import EndGame from "../pages/EndGame";

const Stack = createStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Socket>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="SelectGame" component={SelectGame} />
          <Stack.Screen name="Game" component={Game} />
          <Stack.Screen name="EndGame" component={EndGame} />
        </Stack.Navigator>
      </Socket>
    </NavigationContainer>
  );
};
