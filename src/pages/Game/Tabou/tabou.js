import React, { useState } from "react";
import { AppLoading } from "expo";

import {
  Button as BigButton,
  ButtonContainer,
} from "../../../components/Button";
import useSocket from "../../../App/Socket/useSocket";

import { View, Text, Button, Image, StyleSheet } from "react-native";
import Chrono from "../../../components/Chrono";
import Title1 from "../../../components/titles/Title1";
import MainBtn from "../../../components/btn/MainBtn";
import NextBtn from "../../../components/btn/NextBtn";
import BigTitle from "../../../components/titles/BigTitle";

import * as Font from "expo-font";
import TitleWithContent from "../../../components/titles/TitleWithContent";
import { P1, P2, P3 } from "../../../components/Paragraph/Paragraph";
import Input from "../../../components/forms/Input.js";

let customFonts = {
  MaimDisfigured: require("../../../assets/fonts/MainDisfigured/MaimDisfigured.ttf"),
  DIN: require("../../../assets/fonts/Din/bold/D-DIN-Bold.ttf"),
};

let isLoaded = false;

let setLoaded = () => {
  isLoaded = true;
};

const Tabou = ({ navigation, props, setBackGround }) => {
  const {
    roomInfo,
    getRoomInfo,
    setRoomInfo,
    startGame,
    setSuccess,
  } = useSocket();
  const [answered, setAnswered] = useState(false);

  const [step, setStep] = useState(0);
  const [win, setWin] = useState(false);
  const [word, setWord] = useState(0);
  const [showFlash, setShowFlash] = useState(false);
  const [wordList, setWordList] = useState([
    {
      answer: "Sodomie",
      forbidenWords: [
        "Anal",
        "Surprise",
        "Cul",
        "Gay",
        "Femme",
        "Première fois",
      ],
    },
  ]);

  Promise.all([Font.loadAsync(customFonts)]).then(setLoaded.bind(this));
  let lastFont = isLoaded && !!"din" ? "din" : "null";

  renderForbidenWords = () => {
    let result = [];

    for (let i = 0; i < wordList[word].forbidenWords.length; i++) {
      result.push(
        <P3 textTransform={"upperCase"} font={"din"} color={"blue"}>
          {wordList[word].forbidenWords[i]}
        </P3>
      );
    }

    return result;
  };

  if (roomInfo.role != "owner") {
    setBackGround(require("../../../assets/img/backgrounds/Groupe1.png"));
    if (step == 0) {
      return (
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            top: -100,
          }}
        >
          <View style={{ marginTop: 130, marginBottom: -105, zIndex: 2 }}>
            <Chrono duration={1} onFinish={() => {}} />
          </View>
          <BigTitle
            content="Gang Bang"
            upperContent="Tu fait partie de l'équipe"
            consigne="Fait deviner le mot"
          />
          <View style={{ marginTop: 100 }}>
            <NextBtn
              onPress={() => {
                setStep(1);
              }}
            />
          </View>
        </View>
      );
    } else if (step == 1) {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItem: "center",
          }}
        >
          <View style={{ marginTop: 60, marginBottom: -40, zIndex: 2 }}>
            <Chrono
              duration={30}
              onFinish={() => {
                setStep(1);
                setWin(false);
                !answered &&
                  navigation.navigate("EndGame", {
                    title: "EndGame",
                  });
              }}
            />
          </View>
          <View
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 2,
            }}
          >
            <View
              style={{
                width: "80%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TitleWithContent>
                <View
                  style={{
                    width: "100%",
                    alignItems: "center",
                    lineHeight: 2,
                  }}
                >
                  <P3 font={"maim"} color={"white"}>
                    Fait deviner le mot :
                  </P3>
                  <P1 font={"maim"} color={"white"}>
                    {wordList[word].answer}
                  </P1>
                </View>
              </TitleWithContent>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              marginTop: -40,
            }}
          >
            <View
              style={{
                flex: 1,
                alignItems: "center",
                zIndex: -1,
                width: "80%",
                height: "80%",
              }}
            >
              <Image
                style={{ resizeMode: "contain", width: "100%", height: "90%" }}
                source={require("../../../assets/img/scotch/Tabou.png")}
              />
              <View style={{ position: "absolute", top: 60 }}>
                <View
                  style={{
                    marginBottom: 20,
                  }}
                >
                  <P2 font={"din"} color={"blue"}>
                    Sans utiliser les mots :
                  </P2>
                </View>
                <View
                  style={{
                    alignItems: "center",
                  }}
                >
                  {renderForbidenWords()}
                </View>
              </View>
            </View>
          </View>
          <MainBtn
            content="Trouvé !"
            onPress={() => {
              setStep(1);
              setWin(true);
              setAnswered(false);
              navigation.navigate("EndGame", {
                title: "EndGame",
              });
            }}
          />
        </View>
      );
    }
  } else {
    setBackGround(require("../../../assets/img/backgrounds/Groupe2.png"));
    return (
      <View
        style={{
          flex: 1,
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
          }}
        >
          <Chrono
            duration={step == 1 ? 30 : 15}
            onFinish={
              step == 1
                ? () => {
                    setStep(2);
                    setWin(false);

                    answered &&
                      navigation.navigate("EndGame", {
                        title: "EndGame",
                      });
                  }
                : () => {}
            }
          />
        </View>
        <View
          style={{
            flex: 2,
            justifyContent: "flex-end",
          }}
        >
          <TitleWithContent onRight>
            <View
              style={{
                width: "100%",
                alignItems: "center",
                lineHeight: 2,
                left: -70,
                marginTop: -15,
              }}
            >
              <View
                styles={{
                  top: 100,
                  position: "relative",
                }}
              >
                <P1 font={"maim"} color={"white"}>
                  Valide le safe word
                </P1>
              </View>
            </View>
            <View />
          </TitleWithContent>
        </View>
        <View
          style={{
            flex: 2,
            justifyContent: "flex-start",
            alignItems: "center",
            marginTop: -40,
          }}
        >
          <Input
            placeholder="Safe Word"
            onChangeText={() => {
              setSuccess(true);
            }}
            defaultValue={""}
          />
        </View>

        <View
          style={{
            flex: 1,
          }}
        >
          <MainBtn
            content="Trouvé !"
            onPress={() => {
              setStep(2);
              setWin(true);
              setAnswered(false);
              navigation.navigate("EndGame", {
                title: "EndGame",
              });
            }}
          />
        </View>
      </View>
      // <View>
      //   {/* {step == 0 && (
      //     <>
      //       <View
      //         style={{
      //           alignItems: "center",
      //           justifyContent: "center",
      //           top: -100,
      //         }}
      //       >
      //         <View style={{ marginBottom: -80, zIndex: 2 }}>
      //           <Chrono duration={1} onFinish={() => {}} />
      //         </View>
      //         <BigTitle
      //           content="Gang Bang"
      //           upperContent="Tu fait partie de l'équipe"
      //           consigne="Devine le mot"
      //         />
      //         <View style={{ marginTop: 100 }}>
      //           <NextBtn
      //             onPress={() => {
      //               setStep(1);
      //             }}
      //           />
      //         </View>
      //       </View>
      //     </>
      //   )}
      //   {step > 0 && ( */}
      //   <Chrono
      //     duration={step == 1 ? 30 : 0}
      //     onFinish={
      //       step == 1
      //         ? () => {
      //             setStep(2);
      //             setWin(false);
      //             navigation.navigate("EndGame", {
      //               title: "EndGame",
      //             });
      //           }
      //         : () => {}
      //     }
      //   />

      //   <TitleWithContent>
      //     <P1>Valide le safe word</P1>
      //     <Input />
      //   </TitleWithContent>
      //   <MainBtn
      //     content="Trouvé !"
      //     onPress={() => {
      //       setStep(2);
      //       setWin(true);
      //       navigation.navigate("EndGame", {
      //         title: "EndGame",
      //       });
      //     }}
      //   />
      //   {/* )} */}
      // </View>
    );
  }
};

const styles = StyleSheet.create({
  din: { fontFamily: "DIN" },
  null: {},
});

export default Tabou;

//     if (step == 0) {
//      ( <>
//           <Text>Tu fait partie de l'équipe Gang Bang</Text>
//           <Text>A toi de faire deviner un mot</Text>
//           <Button
//             title=">"
//             onPress={() => {
//               setStep(1)
//             }}
//           />
//           </>
// )    } else if (step == 1) {
//     (  <>
//           <Chrono
//             duration={30}
//             onFinish={() => {
//               setStep(2)
//               setWin(false)
//             }}
//           />
//           <Title1 onRight content={'Devine le safe word'} />
//           <MainBtn
//             content="Trouvé !"
//             onPress={() => {
//               setStep(2)
//               setWin(true)
//             }}
//           />
//           </>)
//       )
//     } else if (step == 2) {
//      ( <>
//           <Chrono duration={0} onFinish={() => {}} />
//           <TitleWithContent>
//             <P1>Valide le safe word</P1>
//             <Input />
//           </TitleWithContent>
//           <MainBtn
//             content="Trouvé !"
//             onPress={() => {
//               setStep(2)
//               setWin(true)
//             }}
//           />
//           </>)
//       )
//     }
//   }
