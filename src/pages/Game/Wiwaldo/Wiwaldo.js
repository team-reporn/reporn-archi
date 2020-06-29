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
import useSocket from '../../../App/Socket/useSocket'
import Pan from './Pan'
import stylesGlobaux from '../../../utils/globalStyles'
import Chrono from '../../../components/Chrono'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

function getRandomInt({ max }) {
  return Math.floor(Math.random() * Math.floor(max))
}

let styleImg = () =>
  pictures.map((img, index) => {
    // let scaleimg = Math.random() * 0.5;
    let rotateimg = Math.random() * 100 * Math.PI
    let left = -50 + Math.random() * windowWidth * 1
    let top = -40 + Math.random() * windowHeight * 1
    return {
      width: 200,
      height: 200,
      position: 'absolute',
      left: left || 0,
      top: top || 0,
      transform: [{ scale: 0.55 }, { rotate: '' + rotateimg + 'deg' }],
    }
  })

const setStyleImg1 = styleImg()
const setStyleImg2 = styleImg()
const setStyleImg3 = styleImg()
const setStyleImg4 = styleImg()
const Wiwaldo = ({ navigation }) => {
  const { success, setSuccess } = useSocket()

  const indexRecherche = useRef(0)
  const [step, setStep] = useState(0)
  console.log(indexRecherche.current)
  return (
    <View style={styles.container}>
      {step === 0 && (
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
                onPress={() => {
                  setSuccess(false)
                  navigation.navigate('EndGame', {
                    title: 'EndGame',
                  })
                }}
              >
                <Image source={image} />
              </TouchableHighlight>
            ) : (
              <TouchableHighlight
                style={[setStyleImg1[indexRecherche.current], { zIndex: 101 }]}
                onPress={() => {
                  setSuccess(true)
                  navigation.navigate('EndGame', {
                    title: 'EndGame',
                  })
                }}
              >
                <Image source={pictures[indexRecherche.current]} />
              </TouchableHighlight>
            )
          })}
        </Pan>
      )}
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          top: 50,
        }}
      >
        <Chrono
          duration={15}
          onFinish={() => {
            navigation.navigate('EndGame', {
              title: 'EndGame',
            })
          }}
        />
      </View>
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
  },
})
export default Wiwaldo
