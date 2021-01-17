import { Icon } from '@react-pakistan/react-native-icon-collection/icon';
import { theme } from '@react-pakistan/util-react-native-functions';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

// ########## Import Screens Here ##########
import { NAVIGATION_ROUTES, NAVIGATION_TITLES } from '../navigation-routes';
import { DashboardStack, DashboardMobileStack, DashboardWebStack } from '../stacks';

const Tab = createBottomTabNavigator();

export const MainTab = () => (
  <Tab.Navigator
    // screenOptions={}
    backBehavior='initialRoute'
    initialRouteName={NAVIGATION_ROUTES.TAB_MAIN}
    lazy
    // tabBar={}
    tabBarOptions={{
      activeBackgroundColor: theme.colors.lightGrey,
      activeTintColor: theme.colors.cherryRed,
      adaptive: true,
      allowFontScaling: true,
      inactiveBackgroundColor: theme.colors.white,
      inactiveTintColor: theme.colors.lightBlack,
      keyboardHidesTabBar: false,
      labelPosition: 'below-icon',
      labelStyle: {},
      safeAreaInset: { bottom: 'always', top: 'never' },
      showIcon: true,
      showLabel: true,
      style: {},
      tabStyle: {},
    }}
  >
    <Tab.Screen
      component={DashboardStack}
      name={NAVIGATION_TITLES.TAB_MAIN}
      options={() => ({
        tabBarIcon: () => <Icon icon='MobileUiGrey19' />,
      })}
    />
    <Tab.Screen
      component={DashboardMobileStack}
      name={NAVIGATION_TITLES.TAB_MOBILE}
      options={() => ({
        tabBarIcon: () => <Icon icon='MobileUiGrey19' />,
      })}
    />
    <Tab.Screen
      component={DashboardWebStack}
      name={NAVIGATION_TITLES.TAB_WEB}
      options={() => ({
        tabBarIcon: () => <Icon icon='MobileUiGrey19' />,
      })}
    />
  </Tab.Navigator>
);
