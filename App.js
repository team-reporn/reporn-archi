import React from 'react'
import { Audio } from 'expo-av';

import Index from './src/App/index.js'
console.disableYellowBox = true

Audio.requestPermissionsAsync()
export default class App extends React.Component {
  render() {
    return (
      <React.StrictMode>
        <Index />
      </React.StrictMode>
    )
  }
}

//const rootElement = document.getElementById('root')
// ReactDOM.render(
// <React.StrictMode>
//   <App />
// </React.StrictMode>,
//   rootElement
// )
