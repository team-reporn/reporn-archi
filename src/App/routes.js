import React from 'react'
import { View, ImageBackground, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Socket from './Socket'

import Room from '../pages/Room'
import JoinRoom from '../pages/JoinRoom'

import Home from '../pages/Home'
import Login from '../pages/Login'
import SelectGame from '../pages/SelectGame'
import EndGame from '../pages/EndGame'

import Roles from '../pages/Roles'
import Theme from '../pages/Theme'
import Achievement from '../pages/Achievement'
import Futur from '../pages/Futur'
import PlayAgain from '../pages/PlayAgain'

import Quizz from '../pages/Game/Quizz'
import Tabou from '../pages/Game/Tabou'
import Shake from '../pages/Game/Shake'
import Wiwaldo from '../pages/Game/Wiwaldo'

import GameHeader from '../components/headers/GameHeader'
import MainHeader from '../components/headers/MainHeader'

const Stack = createStackNavigator()

export default () => {
  return (
    <NavigationContainer>
      <Socket>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen
            name="Home"
            component={({ navigation }) => {
              return (
                <ImageBackground
                  source={require('../assets/img/backgrounds/Question1.png')}
                  style={styles.background}
                >
                  <View style={styles.header}>
                    <MainHeader />
                  </View>
                  <View style={styles.content}>
                    <Home navigation={navigation} />
                  </View>
                </ImageBackground>
              )
            }}
          />
          <Stack.Screen
            name="Login"
            component={({ navigation }) => {
              return (
                <ImageBackground
                  source={require('../assets/img/backgrounds/Home.png')}
                  style={styles.background}
                >
                  <View style={styles.header}>
                    <MainHeader />
                  </View>
                  <View style={styles.content}>
                    <Login navigation={navigation} />
                  </View>
                </ImageBackground>
              )
            }}
          />
          <Stack.Screen
            name="Room"
            component={({ navigation }) => {
              return (
                <ImageBackground
                  source={require('../assets/img/backgrounds/Home.png')}
                  style={styles.background}
                >
                  <View style={styles.header}>
                    <MainHeader />
                  </View>
                  <View style={styles.content}>
                    <Room navigation={navigation} />
                  </View>
                </ImageBackground>
              )
            }}
          />
          <Stack.Screen
            name="JoinRoom"
            component={({ navigation }) => {
              return (
                <ImageBackground
                  source={require('../assets/img/backgrounds/Home.png')}
                  style={styles.background}
                >
                  <View style={styles.header}>
                    <MainHeader />
                  </View>
                  <View style={styles.content}>
                    <JoinRoom navigation={navigation} />
                  </View>
                </ImageBackground>
              )
            }}
          />
          <Stack.Screen
            name="SelectGame"
            component={({ navigation }) => {
              return (
                <ImageBackground
                  source={require('../assets/img/backgrounds/Home.png')}
                  style={styles.background}
                >
                  <View style={styles.header}>
                    <MainHeader />
                  </View>
                  <View style={styles.content}>
                    <SelectGame navigation={navigation} />
                  </View>
                </ImageBackground>
              )
            }}
          />
          <Stack.Screen
            name="Quizz"
            component={({ navigation }) => {
              return (
                <ImageBackground
                  source={require('../assets/img/backgrounds/Question1.png')}
                  style={styles.background}
                >
                  <View style={styles.header}>
                    <MainHeader />
                  </View>
                  <View style={styles.content}>
                    <Quizz navigation={navigation} />
                  </View>
                </ImageBackground>
              )
            }}
          />
          <Stack.Screen
            name="Tabou"
            component={({ navigation }) => {
              return (
                <ImageBackground
                  source={require('../assets/img/backgrounds/Home.png')}
                  style={styles.background}
                >
                  <View style={styles.header}>
                    <MainHeader />
                  </View>
                  <View style={styles.content}>
                    <Tabou navigation={navigation} />
                  </View>
                </ImageBackground>
              )
            }}
          />
          <Stack.Screen
            name="Shake"
            component={({ navigation }) => {
              return (
                <ImageBackground
                  source={require('../assets/img/backgrounds/Home.png')}
                  style={styles.background}
                >
                  <View style={styles.header}>
                    <MainHeader />
                  </View>
                  <View style={styles.content}>
                    <Shake navigation={navigation} />
                  </View>
                </ImageBackground>
              )
            }}
          />
          <Stack.Screen
            name="Roles"
            component={({ navigation }) => {
              return (
                <ImageBackground
                  source={require('../assets/img/backgrounds/Home.png')}
                  style={styles.background}
                >
                  <View style={styles.header}>
                    <MainHeader />
                  </View>
                  <View style={styles.content}>
                    <Roles navigation={navigation} />
                  </View>
                </ImageBackground>
              )
            }}
          />
          <Stack.Screen
            name="EndGame"
            component={({ navigation }) => {
              return (
                <ImageBackground
                  source={require('../assets/img/backgrounds/Home.png')}
                  style={styles.background}
                >
                  <View style={styles.header}>
                    <MainHeader />
                  </View>
                  <View style={styles.content}>
                    <EndGame navigation={navigation} />
                  </View>
                </ImageBackground>
              )
            }}
          />
          <Stack.Screen
            name="Theme"
            component={({ navigation }) => {
              return (
                <ImageBackground
                  source={require('../assets/img/backgrounds/Home.png')}
                  style={styles.background}
                >
                  <View style={styles.header}>
                    <MainHeader />
                  </View>
                  <View style={styles.content}>
                    <Theme navigation={navigation} />
                  </View>
                </ImageBackground>
              )
            }}
          />
          <Stack.Screen
            name="Achievement"
            component={({ navigation }) => {
              return (
                <ImageBackground
                  source={require('../assets/img/backgrounds/Home.png')}
                  style={styles.background}
                >
                  <View style={styles.header}>
                    <MainHeader />
                  </View>
                  <View style={styles.content}>
                    <Achievement navigation={navigation} />
                  </View>
                </ImageBackground>
              )
            }}
          />
          <Stack.Screen
            name="Futur"
            component={({ navigation }) => {
              return (
                <ImageBackground
                  source={require('../assets/img/backgrounds/Home.png')}
                  style={styles.background}
                >
                  <View style={styles.header}>
                    <MainHeader />
                  </View>
                  <View style={styles.content}>
                    <Futur navigation={navigation} />
                  </View>
                </ImageBackground>
              )
            }}
          />
          <Stack.Screen
            name="PlayAgain"
            component={({ navigation }) => {
              return (
                <ImageBackground
                  source={require('../assets/img/backgrounds/Home.png')}
                  style={styles.background}
                >
                  <View style={styles.header}>
                    <MainHeader />
                  </View>
                  <View style={styles.content}>
                    <PlayAgain navigation={navigation} />
                  </View>
                </ImageBackground>
              )
            }}
          />
          <Stack.Screen
            name="Wiwaldo"
            component={({ navigation }) => {
              return (
                <ImageBackground
                  source={require('../assets/img/backgrounds/Home.png')}
                  style={styles.background}
                  resizeMode="cover"
                >
                  <View style={styles.header}>
                    <MainHeader />
                  </View>
                  <View style={styles.content}>
                    <Wiwaldo navigation={navigation} />
                  </View>
                </ImageBackground>
              )
            }}
          />
        </Stack.Navigator>
      </Socket>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  background: { flex: 1 },
  content: { flex: 8 },
  header: { flex: 1 },
})
