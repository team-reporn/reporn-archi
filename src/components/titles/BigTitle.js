import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import * as Font from 'expo-font'

let customFonts = {
  MaimDisfigured: require('../../assets/fonts/MainDisfigured/MaimDisfigured.ttf'),
  DIN: require('../../assets/fonts/Din/bold/D-DIN-Bold.ttf'),
}

let isLoaded = false

let setLoaded = () => {
  isLoaded = true
}

const BigTitle = ({
  content,
  subContent,
  upperContent,
  consigne,
  navigation,
}) => {
  Promise.all([Font.loadAsync(customFonts)]).then(setLoaded.bind(this))
  let lastFont = isLoaded && !!'maim' ? 'maim' : 'null'

  return (
    <View
      style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}
    >
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          marginTop: 60,
        }}
      >
        <Image
          source={require('../../assets/img/scotch/Question.png')}
          style={{
            resizeMode: 'stretch',
            width: 530,
            height: 153,
            transform: [{ translateX: -50 }],
          }}
        />
        <View style={{ position: 'absolute' }}>
          {upperContent ? (
            <Text
              style={[
                {
                  color: 'white',
                  fontSize: 15,
                  marginBottom: 20,
                  width: '100%',
                },
                styles[lastFont],
              ]}
            >
              {upperContent ? upperContent : null}
            </Text>
          ) : null}
          <Text style={[{ color: 'white', fontSize: 40 }, styles[lastFont]]}>
            {content}
          </Text>
          {subContent ? (
            <Text
              style={[
                { color: 'white', fontSize: 15, marginTop: 20 },
                styles[lastFont],
              ]}
            >
              {subContent ? subContent : null}
            </Text>
          ) : null}
        </View>
      </View>
      {consigne ? (
        <View
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: -30,
            transform: [{ rotate: '-10deg' }],
          }}
        >
          <Image
            style={styles.image}
            source={require('../../assets/img/scotch/Consigne.png')}
          />
          <Text
            style={[
              {
                color: 'white',
                fontSize: 15,
                marginTop: 20,
                position: 'absolute',
              },
              styles[lastFont],
            ]}
          >
            {consigne ? consigne : ''}
          </Text>
        </View>
      ) : null}
    </View>
  )
}

const styles = StyleSheet.create({
  maim: { fontFamily: 'MaimDisfigured' },
  null: {},
  image: {
    width: '80%',
    height: 73,
  },
})

export default BigTitle
