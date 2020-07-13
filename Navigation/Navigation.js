import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from "react-navigation";
import Login from '../Components/Connexion/Login';
import Inscription from '../Components/Connexion/Inscription';
import PopUpFelicitation from '../Components/Connexion/PopUpFelicitation';
import PopUpAstuce from '../Components/Connexion/PopUpAstuce';
import BurgerNav from './BurgerNav';

const LoginStackNavigator = createStackNavigator({
  Login: {
    screen: Login
  },
  Inscription: {
    screen: Inscription
  },
  PopUpFelicitation: {
    screen: PopUpFelicitation,
  },
  PopUpAstuce: {
    screen: PopUpAstuce,
  },
  BurgerNav: {
    screen: BurgerNav,
  },
},
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  }
)

export default createAppContainer(LoginStackNavigator)