import { createStackNavigator, createAppContainer } from 'react-navigation'

import Home from './pages/Home'
import SelectGame from './pages/SelectGame'
import Game from './pages/Game'
import EndGame from './pages/EndGame'

export default class Routes extends React.Component {
  render() {
    return <AppContainer />
  }
}

const AppNavigator = createStackNavigator(
  {
    //in this, create the home page -choose between create a room or PornNews- + Go to SelectGame
    Home: {
      screen: Home,
      navigationOptions: {
        headerShown: false,
      },
    },
    // in this, define all games and select one randomly - On button to Game
    SelectGame: {
      screen: SelectGame,
      headerShown: false,
    },
    // In this, see the question of the quiz if you select answer go to EndGame
    Game: {
      screen: Game,
      headerShown: false,
    },
    // in this, show the answer
    EndGame: {
      screen: EndGame,
      headerShown: false,
    },
  },
  {
    initialRouteName: 'Home',
  }
)

const AppContainer = createAppContainer(AppNavigator)
