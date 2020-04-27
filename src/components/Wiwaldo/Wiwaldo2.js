import React from "react";
import { Text, View, Button, StyleSheet, Dimensions } from "react-native";

import Animated, {
  Value,
  block,
  cond,
  eq,
  set,
  useCode,
} from "react-native-reanimated";
import { PinchGestureHandler, State } from "react-native-gesture-handler";
const { event, multiply } = Animated;

export const transformOrigin = ({ x, y }, ...transformations) => [
  { translateX: x },
  { translateY: y },
  ...transformations,
  { translateX: multiply(x, -1) },
  { translateY: multiply(y, -1) },
];

const onGestureEvent = (nativeEvent) => {
  const gestureEvent = event([{ nativeEvent }]);
  return {
    onHandlerStateChange: gestureEvent,
    onGestureEvent: gestureEvent,
  };
};

const Wiwaldo = () => {
  console.log("==============================================");
  const { width } = Dimensions.get("window");
  let SIZE = width;

  let state = new Value(State.UNDETERMINED);
  let gestureScale = new Value(1);
  let focal = { x: new Value(0), y: new Value(0) };
  let origin = { x: new Value(0), y: new Value(0) };
  const gestureHandler = onGestureEvent({
    state,
    scale: gestureScale,
    focalX: focal.x,
    focalY: focal.y,
  });

  useCode(
    () =>
      block([
        cond(eq(state, State.BEGAN), [
          set(origin.x, focal.x),
          set(origin.y, focal.y),
        ]),
      ]),
    [focal, origin, state]
  );
  return (
    <PinchGestureHandler {...gestureHandler}>
      <Animated.View style={{ width: SIZE, height: SIZE }}>
        <Animated.Image
          style={[
            styles.text,
            {
              transform: [...transformOrigin(origin, { scale })],
            },
          ]}
          source={require("./swmansion.png")}
        />
      </Animated.View>
    </PinchGestureHandler>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
  },
});

export default Wiwaldo;
