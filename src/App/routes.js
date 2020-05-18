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
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={() => (
            <Socket>
              <Home />
            </Socket>
          )}
        />
        <Stack.Screen
          name="SelectGame"
          component={() => (
            <Socket>
              <SelectGame />
            </Socket>
          )}
        />
        <Stack.Screen
          name="Game"
          component={() => (
            <Socket>
              <Game />
            </Socket>
          )}
        />
        <Stack.Screen
          name="EndGame"
          component={() => (
            <Socket>
              <EndGame />
            </Socket>
          )}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
