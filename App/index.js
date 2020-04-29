import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Home from './pages/Home'
import Rule from './pages/Rule'
import Question from './pages/Question'
import Answer from './pages/Answer'

const MainStack = createStackNavigator({
  // in this, create the home page -choose between create a room or PornNews- + Go to Rule
  Home: {
    screen: Home,
    navigationOptions: {
      headerShown: false,
    },
  },
  // in this, define all games and select one randomly - On button to Quiz
  Rule: {
    screen: Rule,
    headerShown: false,
  },
  // In this, see the question of the quiz if you select answer go to Answer
  Question: {
    screen: Question,
    headerShown: false,
  },
  // in this, show the answer
  Answer: {
    screen: Answer,
    headerShown: false,
  },
})

export default createAppContainer(MainStack)
