import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native'

const styles = StyleSheet.create({
  button: {
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 20,
  },
  ButtonQuestion: {
    backgroundColor: '#490C16',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 20,
  },
  text: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'column',
    width: '50%',
  },
  absoluteView: {
    position: 'absolute',
    backgroundColor: 'transparent',
  },
})

export const Button = ({ text, onPress = () => {} }) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    <Image
      source={require('../assets/buttons/Bk_blue.png')}
      style={styles.img}
    />
    <View style={styles.absoluteView}>
      <Text style={styles.text}>{text}</Text>
    </View>
  </TouchableOpacity>
)

export const ButtonContainer = ({ children }) => (
  <View style={styles.buttonContainer}>{children}</View>
)
