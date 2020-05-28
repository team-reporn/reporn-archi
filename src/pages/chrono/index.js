import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";

const Chrono = ({ temps }) => {
  return (
    <View>
      <Text>chrono</Text>
      <Text>{temps}</Text>
    </View>
  );
};

const ChronoHandler = (Component) => {
  return () => {
    const [temps, setTemps] = useState(0);

    useEffect(() => {
      let chronoInterval = setInterval(() => {
        setTemps(temps + 1);
      }, 1000);
      return () => clearInterval(chronoInterval);
    }, [temps]);
    return <Component temps={temps}></Component>;
  };
};

export { ChronoHandler, Chrono };
