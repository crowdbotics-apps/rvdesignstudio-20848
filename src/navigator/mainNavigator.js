import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile117009Navigator from '../features/UserProfile117009/navigator';
import Tutorial117008Navigator from '../features/Tutorial117008/navigator';
import NotificationList116980Navigator from '../features/NotificationList116980/navigator';
import Settings116979Navigator from '../features/Settings116979/navigator';
import Settings116971Navigator from '../features/Settings116971/navigator';
import UserProfile116969Navigator from '../features/UserProfile116969/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile117009: { screen: UserProfile117009Navigator },
Tutorial117008: { screen: Tutorial117008Navigator },
NotificationList116980: { screen: NotificationList116980Navigator },
Settings116979: { screen: Settings116979Navigator },
Settings116971: { screen: Settings116971Navigator },
UserProfile116969: { screen: UserProfile116969Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
