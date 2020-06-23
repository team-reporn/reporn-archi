// In this, create the home page -choose between create a room or PornNews- on button select go to rules
// In this, create the home page -choose between create a room or PornNews- on button select go to rules
import React, { useState, useRef, useEffect } from 'react'
import { Button, ButtonContainer } from '../../components/Button'
import { View, StyleSheet, Text, Image, ImageBackground } from 'react-native'

import Title1 from '../../components/titles/Title1'
import Input from '../../components/forms/Input'
import NextBtn from '../../components/btn/NextBtn'

let Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.logo} />
      <Title1 content="Connexion" style={styles.title} />
      <Input placeholder="Nom d'utilisateur" />
      <Input placeholder="Mot de passe" />
      <NextBtn
        style={styles.btn2}
        onPress={() => {
          state.step = 'main'
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  logo: {
    marginBottom: 100,
  },
  title: {
    marginBottom: -20,
  },
  btn1: {
    marginBottom: 30,
  },
})

export default Login
