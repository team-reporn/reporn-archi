import React, { useState } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import useSocket from '../../App/Socket/useSocket'
import { Button, ButtonContainer } from '../../components/Button'

import Title1 from '../../components/titles/Title1'
import NextBtn from '../../components/btn/NextBtn'

import * as Font from 'expo-font'
import TitleWithContent from '../../components/titles/TitleWithContent'
import { P1, P2, P3 } from '../../components/Paragraph/Paragraph'
import Input from '../../components/forms/Input.js'

let customFonts = {
  MaimDisfigured: require('../../assets/fonts/MainDisfigured/MaimDisfigured.ttf'),
  DIN: require('../../assets/fonts/Din/bold/D-DIN-Bold.ttf'),
}

let isLoaded = false

let setLoaded = () => {
  isLoaded = true
}

let Achievement = ({ navigation }) => {
  const { character, roomInfo } = useSocket()
  const [step, setStep] = useState(0)

  Promise.all([Font.loadAsync(customFonts)]).then(setLoaded.bind(this))
  let lastFont = isLoaded && !!'din' ? 'din' : 'null'

  if (roomInfo.role == 'owner') {
    // if (step == 0) {
    //   return (
    //     <View>
    //       {/* <Text>{character.cardRole.job}</Text> */}
    //       <View style={{ flexDirection: 'row' }}>
    //         <Image
    //           style={{ transform: [{ rotate: '12deg' }] }}
    //           source={require('../../assets/img/stat/Tall.png')}
    //         />
    //         <View
    //           style={{
    //             justifyContent: 'center',
    //             alignItems: 'center',
    //             transform: [{ rotate: '-12deg' }],
    //           }}
    //         >
    //           <Image source={require('../../assets/img/scotch/Awards.png')} />
    //           <Text style={{ position: 'absolute', color: 'white' }}>
    //             BlaBla
    //           </Text>
    //         </View>
    //       </View>
    //       {/* <Text>retour sur tes Performance</Text>
    //       <Text>perf shake</Text>
    //       <Text>perf voyeurisme</Text>
    //       <Text>perf expert sextoy</Text>
    //       <Text>perf rapidité</Text> */}
    //       <NextBtn
    //         onPress={() => {
    //           setStep(1)
    //         }}
    //       />
    //     </View>
    //   )
    // } else {
    return (
      <View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 2,
            transform: [{ rotate: '-9deg' }],
          }}
        >
          <Image source={require('../../assets/img/scotch/Bleu.png')} />
          <View style={{ position: 'absolute' }}>
            <Text
              style={[
                { textAlign: 'center', color: 'white' },
                styles[lastFont],
              ]}
            >
              Masseuse
            </Text>
            <Text
              style={[
                { textAlign: 'center', color: 'white' },
                styles[lastFont],
              ]}
            >
              Retour sur tes performances
            </Text>
          </View>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            transform: [{ translateY: -100 }, { scale: 0.8 }],
          }}
        >
          <Image
            style={{ transform: [{ rotate: '-9deg' }] }}
            source={require('../../assets/img/scotch/Feuille.png')}
          />
          <View
            style={{
              position: 'absolute',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Image
              style={{ transform: [{ rotate: '9deg' }] }}
              source={require('../../assets/img/stat/Petit.png')}
            />
            <Text style={styles[lastFont]}>Le plus rapide</Text>
          </View>
        </View>
        <View
          style={{
            alignItems: 'center',
            marginTop: -200,
            transform: [{ scale: 0.6 }],
          }}
        >
          <Image
            source={require('../../assets/img/stat/joueur1/Voyeurisme.png')}
          />
          <Image source={require('../../assets/img/stat/joueur1/Expert.png')} />
          <Image
            source={require('../../assets/img/stat/joueur1/Rapidite.png')}
          />
        </View>
        <NextBtn
          onPress={() => {
            navigation.navigate('Futur', {
              title: 'Futur',
            })
          }}
        />
      </View>
    )
  } else {
    if (step == 0) {
      return (
        <View>
          {/* <Text>{character.cardRole.job}</Text> */}
          <View style={{ flexDirection: 'row' }}>
            <Image
              style={{ transform: [{ rotate: '12deg' }] }}
              source={require('../../assets/img/stat/Tall.png')}
            />
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                transform: [{ rotate: '-12deg' }],
              }}
            >
              <Image source={require('../../assets/img/scotch/Awards.png')} />
              <Text
                style={[
                  { position: 'absolute', color: 'white' },
                  styles[lastFont],
                ]}
              >
                BlaBla
              </Text>
            </View>
          </View>
          {/* <Text>retour sur tes Performance</Text>
          <Text>perf shake</Text>
          <Text>perf voyeurisme</Text>
          <Text>perf expert sextoy</Text>
          <Text>perf rapidité</Text> */}
          <NextBtn
            onPress={() => {
              setStep(1)
            }}
          />
        </View>
      )
    } else {
      return (
        <View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 2,
              transform: [{ rotate: '-9deg' }],
            }}
          >
            <Image source={require('../../assets/img/scotch/Bleu.png')} />
            <View style={{ position: 'absolute' }}>
              <Text
                style={[
                  { textAlign: 'center', color: 'white' },
                  styles[lastFont],
                ]}
              >
                Masseuse
              </Text>
              <Text
                style={[
                  { textAlign: 'center', color: 'white' },
                  styles[lastFont],
                ]}
              >
                Retour sur tes performances
              </Text>
            </View>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              transform: [{ translateY: -100 }, { scale: 0.8 }],
            }}
          >
            <Image
              style={{ transform: [{ rotate: '-9deg' }] }}
              source={require('../../assets/img/scotch/Feuille.png')}
            />
            <View
              style={{
                position: 'absolute',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Image
                style={{ transform: [{ rotate: '9deg' }] }}
                source={require('../../assets/img/stat/Petit.png')}
              />
              <Text style={styles[lastFont]}>Le plus rapide</Text>
            </View>
          </View>
          <View
            style={{
              alignItems: 'center',
              marginTop: -200,
              transform: [{ scale: 0.6 }],
            }}
          >
            <Image
              source={require('../../assets/img/stat/joueur2/Voyeurisme.png')}
            />
            <Image
              source={require('../../assets/img/stat/joueur2/Expert.png')}
            />
            <Image
              source={require('../../assets/img/stat/joueur2/Rapidite.png')}
            />
          </View>
          <NextBtn
            onPress={() => {
              navigation.navigate('Futur', {
                title: 'Futur',
              })
            }}
          />
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  din: { fontFamily: 'DIN' },
  null: {},
})

export default Achievement
