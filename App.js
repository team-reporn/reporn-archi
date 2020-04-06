import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

async function loadResourcesAndDataAsync() {
  try {
    SplashScreen.preventAutoHide()

    // Load our initial navigation state
    setInitialNavigationState(await getInitialState())

    // Load fonts
    await Font.loadAsync({
      ...Ionicons.font,
      'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      percolate: require('./assets/icon/percolate.ttf'),
      'NunitoSans-Bold': require('./assets/font/NunitoSans-Bold.ttf'),
      'NunitoSans-Italic': require('./assets/font/NunitoSans-Italic.ttf'),
      NunitoSans: require('./assets/font/NunitoSans-Regular.ttf'),
    })
  } catch (e) {
    // We might want to provide this error information to an error reporting service
    console.warn(e)
  } finally {
    setLoadingComplete(true)
    SplashScreen.hide()
  }
}
