import { StyleSheet } from "react-native";

export default StyleSheet.create({
  title: {
    transform: [{ rotate: "5deg" }],
    flex: 2,
    marginTop: 20,
    justifyContent: "center",
  },
  boiteMouchoir: {
    // position: "absolute",
    flex: 1.5,
    // backgroundColor: "blue",
    justifyContent: "flex-end",
    flexDirection: "column",
  },
  boiteMouchoirArrow: {
    position: "absolute",
    alignItems: "center",
    width: "100%",
    bottom: "50%",
    zIndex: 12,
  },
  mouchoir: {
    // position: "absolute",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
    // backgroundColor: "green",
    resizeMode: "stretch",
    justifyContent: "space-around",
  },
  mouchoir1: {
    // backgroundColor: "yellow",
    transform: [{ rotate: `${Math.random() * 360 * Math.PI}deg` }],
  },
  mouchoir2: {
    // backgroundColor: "purple",
    transform: [{ rotate: `${Math.random() * 360 * Math.PI}deg` }],
  },
  mouchoir3: {
    // backgroundColor: "magenta",
    transform: [{ rotate: `${Math.random() * 360 * Math.PI}deg` }],
  },
});
