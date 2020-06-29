import React from 'react'
import { View, Text, Button, Image } from 'react-native'

import TitleWithContent from '../../../components/titles/TitleWithContent'
import { P1, P2, P3 } from '../../../components/Paragraph/Paragraph'
import NextButton from '../../../components/btn/NextBtn.js'

let Award = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 7, flexDirection: 'row' }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Image
            style={{
              width: '90%',
              height: '50%',
              resizeMode: 'contain',
              transform: [{ rotate: '15deg' }],
              marginTop: -25,
            }}
            source={require('./Tall.png')}
          />
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <View
            style={{
              width: '200%',
              transform: [{ rotate: '-15deg' }],
              marginTop: 25,
            }}
          >
            <TitleWithContent dark onRight>
              <P1 font={'maim'} color={'white'}>
                Le RYTHMe
              </P1>
              <View style={{ marginTop: -10 }}>
                <P1 font={'maim'} color={'white'}>
                  DANS LA PeAU
                </P1>
              </View>
            </TitleWithContent>
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 1.5,
          alignItems: 'flex-end',
        }}
      >
        <View
          style={{
            flex: 1,
            alignItems: 'flex-end',
            padding: 10,
          }}
        >
          <NextButton
            onPress={() => {
              navigation.navigate('Achievement', {
                title: 'Achievement',
              })
              // setStep(3);
            }}
          />
        </View>
      </View>
    </View>
  )
}
export default Award
