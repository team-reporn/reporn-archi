import React, {useState} from "react";
import { AppLoading } from 'expo'

import {
  Button as BigButton,
  ButtonContainer,
} from "../../../components/Button";
import useSocket from "../../../App/Socket/useSocket";

import { View, Text, Button, Image, StyleSheet } from "react-native";
import Chrono from "../../../components/Chrono"
import Title1 from "../../../components/titles/Title1"
import MainBtn from "../../../components/btn/MainBtn"
import PornnewsFlash from "./pornnewsFlash";

import * as Font from "expo-font";

let customFonts = {
  MaimDisfigured: require("../../../assets/fonts/MainDisfigured/MaimDisfigured.ttf"),
  DIN: require("../../../assets/fonts/Din/bold/D-DIN-Bold.ttf"),
};

let isLoaded = false;

let setLoaded = () => {
  isLoaded = true;
};

const Tabou = (props) => {
  const { roomInfo, getRoomInfo, setRoomInfo, startGame } = useSocket();

  const [step, setStep] = useState(0)
  const [win, setWin] = useState(false)
  const [word, setWord] = useState(0)
  const [showFlash, setShowFlash] = useState(false)
  const [wordList, setWordList] = useState([
    {
      answer: "Le cheval à bascule",
      forbidenWords: ["Mot1", "Mot2"],
    },
    {
      answer: "Le triangle lumineux",
      forbidenWords: ["Mot1", "Mot2"],
    },
    {
      answer: "La cuillère",
      forbidenWords: ["Mot1", "Mot2"],
    },
  ])

  Promise.all([Font.loadAsync(customFonts)]).then(setLoaded.bind(this));
  let lastFont = isLoaded && !!"din" ? "din" : "null";
  

  renderForbidenWords = () => {
    let result = [];


    for (
      let i = 0;
      i < wordList[word].forbidenWords.length;
      i++
    ) {
      result.push(
        <Text style={[{textAlign: "center", color: 'blue'}, styles[lastFont]]}>{wordList[word].forbidenWords[i]}</Text>
      );
    }

    return result;
  };

  
  if (roomInfo.role !== "owner") {
      if (step == 0) {
        return (
          <View>
            <Text>Tu fait partie de l'équipe Gang Bang</Text>
            <Text>A toi de faire deviner un mot</Text>
            <Button
              title=">"
              onPress={() => {
                setStep(1)
              }}
            />
          </View>
        );
      } else if (step == 1) {
        return (
          <View>
            <Chrono duration={10} onFinish={()=>{setStep(1);setWin(false);}}/>
            <Title1 onRight content={"Fait deviner le mot : "+wordList[word].answer}/>
            <View style={{display: "flex", justifyContent: "center", alignItems: "center", transform: [{translateX: 20}, {translateY: -20}], zIndex: -1}}>
              <Image source={require('../../../assets/img/scotch/Feuille.png')}/>
              <View style={{position: "absolute", top: 30}}>
                <Text style={[{color: 'blue', marginBottom: 30}, styles[lastFont]]}>Sans utiliser les mots :</Text>
                {renderForbidenWords()}
              </View>
            </View>
            <MainBtn
              content="Trouvé !"
              onPress={() => {
                setStep(1);
                setWin(true);
              }}
            />
          </View>
        );
      }
    
  } else {
    return null
  }

}

const styles = StyleSheet.create({
  din: { fontFamily: "DIN" },
  null: {},
});

export default Tabou