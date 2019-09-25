import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import User from './pages/User';
import Game from './pages/Game';

const stackNavigation = createStackNavigator(
  {
    Main,
    User,
    Game,
  },
  {
    headerLayoutPreset: 'center',
    headerBackTitleVisible: false,
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#43A8B0',
      },
      headerTintColor: '#FFFFFF',
    },
  }
);

const Routes = createAppContainer(stackNavigation);

export default Routes;
