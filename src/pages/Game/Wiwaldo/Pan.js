import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  PanResponder,
} from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Pan = ({ debug, children, limits }) => {
  // console.log(windowHeight*2)
  const [boundaries, setBoundaries] = useState(
    limits || { x: 60, y: 29, x0: -60, y0: -120 }
  );
  const pan = useRef(new Animated.ValueXY()).current;
  const dx = useRef(0);
  const dy = useRef(0);
  const moveX = useRef(0);
  const moveY = useRef(0);
  const numberActiveTouches = useRef(0);
  const vx = useRef(0);
  const vy = useRef(0);
  const x0 = useRef(0);
  const y0 = useRef(0);
  const totalMoveX = useRef(0);
  const totalMoveY = useRef(0);
  const tempMoveX = useRef(0);
  const tempMoveY = useRef(0);
  const hasMoved = useRef(false);

  const [gState, setGState] = useState({
    pan: 0,
    dx: 0,
    dy: 0,
    moveX: 0,
    moveY: 0,
    numberActiveTouches: 0,
    vx: 0,
    vy: 0,
    x0: 0,
    y0: 0,
    totalMoveX: 0,
    totalMoveY: 0,
    tempMoveX: 0,
    tempMoveY: 0,
    hasMoved: false,
  });

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        if (hasMoved.current) {
          pan.setOffset({
            x: pan.x._value,
            y: pan.y._value,
          });
        }
        hasMoved.current = false;
      },
      onPanResponderMove: (evt, gestureState) => {
        hasMoved.current = true;
        dx.current = gestureState.dx;
        dy.current = gestureState.dy;
        moveX.current = gestureState.moveX;
        moveY.current = gestureState.moveY;
        numberActiveTouches.current = gestureState.numberActiveTouches;
        vx.current = gestureState.vx;
        vy.current = gestureState.vy;
        x0.current = gestureState.x0;
        y0.current = gestureState.y0;
        tempMoveX.current = totalMoveX.current + gestureState.dx;
        tempMoveY.current = totalMoveY.current + gestureState.dy;
        setGState({
          dx: dx.current,
          dy: dy.current,
          moveX: moveX.current,
          moveY: moveY.current,
          numberActiveTouches: numberActiveTouches.current,
          vx: vx.current,
          vy: vy.current,
          x0: x0.current,
          y0: y0.current,
          totalMoveX: totalMoveX.current,
          totalMoveY: totalMoveY.current,
          tempMoveX: tempMoveX.current,
          tempMoveY: tempMoveY.current,
          hasMoved: hasMoved.current,
        });
        if (tempMoveX.current > boundaries.x) {
          gestureState.dx = boundaries.x - totalMoveX.current;
        } else if (tempMoveX.current < boundaries.x0) {
          gestureState.dx = boundaries.x0 - totalMoveX.current;
        }
        if (tempMoveY.current > boundaries.y) {
          gestureState.dy = boundaries.y - totalMoveY.current;
        } else if (tempMoveY.current < boundaries.y0) {
          gestureState.dy = boundaries.y0 - totalMoveY.current;
        }
        Animated.event([
          null,
          {
            dx: pan.x,
            dy: pan.y,
          },
        ])(evt, gestureState);
        //  else if (tempMoveX.current > boundaries.x) {
        //   pan.x._value = boundaries.x;
        //   tempMoveX.current = 0;
        //   totalMoveX.current = boundaries.x;
        // }
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (hasMoved.current) {
          totalMoveX.current = totalMoveX.current + gestureState.dx;
          totalMoveY.current = totalMoveY.current + gestureState.dy;
          setGState({
            dx: dx.current,
            dy: dy.current,
            moveX: moveX.current,
            moveY: moveY.current,
            numberActiveTouches: numberActiveTouches.current,
            vx: vx.current,
            vy: vy.current,
            x0: x0.current,
            y0: y0.current,
            totalMoveX: totalMoveX.current,
            totalMoveY: totalMoveY.current,
            tempMoveX: tempMoveX.current,
            tempMoveY: tempMoveY.current,
            hasMoved: hasMoved.current,
          });
          pan.flattenOffset();
        }
      },
    })
  ).current;

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.draggable,
          {
            transform: [
              { translateX: pan.x },
              { translateY: pan.y },
              { scale: 1 },
            ],
          },
        ]}
        {...panResponder.panHandlers}
      >
        {children}
        {/* <Animated.View
        style={{
          transform: [
            { translateX: 0 },
            { translateY: 0 },
            { scale: 1 },
          ],
        }}
        >
        {children}
      </Animated.View> */}
      </Animated.View>
      {debug && (
        <View style={styles.contained}>
          <Text> dx {gState.dx}</Text>
          <Text> dy {gState.dy}</Text>
          <Text> moveX {gState.moveX}</Text>
          <Text> moveY {gState.moveY}</Text>
          <Text> numberActiveTouches {gState.numberActiveTouches}</Text>
          <Text> vx {gState.vx}</Text>
          <Text> vy {gState.vy}</Text>
          <Text> x0 {gState.x0}</Text>
          <Text> y0 {gState.y0}</Text>
          <Text> totalMoveX {gState.totalMoveX}</Text>
          <Text> totalMoveY {gState.totalMoveY}</Text>
          <Text> tempMoveX {gState.tempMoveX}</Text>
          <Text> tempMoveY {gState.tempMoveY}</Text>
          <Text> hasMoved {gState.hasMoved}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //  flex: 1,
    width: windowWidth * 1.63,
    height: windowHeight * 1.5,
    alignItems: "center",
    justifyContent: "center",
  },
  draggable: {
    width: "80%",
    height: "80%",
    borderColor: "black",
    borderWidth: 1,
  },
  contained: {
    position: "absolute",
    width: "30%",
    height: "30%",
    borderColor: "red",
    borderWidth: 1,
  },
});
export default Pan;
