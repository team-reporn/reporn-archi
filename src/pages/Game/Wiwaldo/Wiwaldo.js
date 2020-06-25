import React, { useRef, useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  PanResponder,
  ImageBackground,
  TouchableHighlight,
  Image,
} from 'react-native'
import pictures from './pictures'
import {
  Button as BigButton,
  ButtonContainer,
} from '../../../components/Button'

import Pan from './Pan'
import stylesGlobaux from '../../../utils/globalStyles'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

function getRandomInt({ max }) {
  return Math.floor(Math.random() * Math.floor(max))
}
let styleImg = () =>
  pictures.map((img, index) => {
    // let scaleimg = Math.random() * 0.5;
    let rotateimg = Math.random() * 100 * Math.PI
    let left = -40 + Math.random() * windowWidth * 1
    let top = -40 + Math.random() * windowHeight * 1
    return {
      width: 200,
      height: 200,
      position: 'absolute',
      left: left || 0,
      top: top || 0,
      transform: [{ scale: 0.3 }, { rotate: '' + rotateimg + 'deg' }],
    }
  })
const setStyleImg1 = styleImg()
const setStyleImg2 = styleImg()
const setStyleImg3 = styleImg()
const setStyleImg4 = styleImg()
const Wiwaldo = ({ navigation }) => {
  const indexRecherche = useRef(getRandomInt({ max: pictures.length }))
  const [step, setStep] = useState(0)
  console.log(indexRecherche.current)
  return (
    <View style={styles.container}>
      {/* <ImageBackground
            source={require("../../../assets/backgrounds/Categorie.png")}
            style={stylesGlobaux.background}
          >
            <Text>tu dois chercher : </Text>
            <Image source={pictures[indexRecherche.current]} />
            <ButtonContainer>
              <BigButton
                key="rentrer dans le jeu"
                text="rentrer dans le jeu"
                onPress={() => {
                  setStep(1);
                }}
              />
            </ButtonContainer>
          </ImageBackground>
      {step === 1 && ( */}
      <Pan>
        <ImageBackground
          style={{ width: '100%', height: '100%' }}
          source={require('./assets/backgroundWiwaldo.jpg')}
        />
        {pictures.map((image, index) => {
          return index !== indexRecherche.current ? (
            <TouchableHighlight
              style={[setStyleImg1[index], { zIndex: 100 }]}
              key={index}
              onPress={() =>
                navigation.navigate('EndGame', {
                  title: 'EndGame',
                })
              }
            >
              <Image source={image} />
            </TouchableHighlight>
          ) : (
            <TouchableHighlight
              style={[setStyleImg1[indexRecherche.current], { zIndex: 101 }]}
              onPress={() =>
                navigation.navigate('EndGame', {
                  title: 'EndGame',
                })
              }
            >
              <Image source={pictures[indexRecherche.current]} />
            </TouchableHighlight>
          )
        })}
        {pictures.map((image, index) => {
          return index !== indexRecherche.current ? (
            <TouchableHighlight
              style={[setStyleImg2[index], { zIndex: 100 }]}
              key={index}
              onPress={() =>
                navigation.navigate('EndGame', {
                  title: 'EndGame',
                })
              }
            >
              <Image source={image} />
            </TouchableHighlight>
          ) : null
        })}
        {pictures.map((image, index) => {
          return index !== indexRecherche.current ? (
            <TouchableHighlight
              style={[setStyleImg3[index], { zIndex: 100 }]}
              key={index}
              onPress={() =>
                navigation.navigate('EndGame', {
                  title: 'EndGame',
                })
              }
            >
              <Image source={image} />
            </TouchableHighlight>
          ) : null
        })}
        {pictures.map((image, index) => {
          return index !== indexRecherche.current ? (
            <TouchableHighlight
              style={[setStyleImg4[index], { zIndex: 100 }]}
              key={index}
              onPress={() =>
                navigation.navigate('EndGame', {
                  title: 'EndGame',
                })
              }
            >
              <Image source={image} />
            </TouchableHighlight>
          ) : null
        })}
      </Pan>
      {/* )}
      {step === 2 && (
        <>
          <Text>Bravo tu as trouvé en : </Text>
          <Text>seconde</Text>
          <ButtonContainer>
            <BigButton
              key="end game"
              text="end game"
              onPress={() => {
                navigation.navigate("EndGame", {
                  title: "EndGame",
                });
              }}
            />
          </ButtonContainer>
        </>
      )}
      {step === 3 && (
        <>
          <Text>Raté : </Text>
          <ButtonContainer>
            <BigButton
              key="end game"
              text="end game"
              onPress={() => {
                navigation.navigate("EndGame", {
                  title: "EndGame",
                });
              }}
            />
          </ButtonContainer>
        </>
      )} */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'cyan',
  },
})
export default Wiwaldo
