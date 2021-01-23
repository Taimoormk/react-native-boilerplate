// ########## Import Dependencies Here ##########
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from '@react-pakistan/react-native-icon-collection/icon';
import React from 'react';
import { useDispatch } from 'react-redux';

// ########## Import Components Here ##########
import * as actions from '../../redux/actions';
import { DashboardWeb as DashboardWebScreen } from '../../screens/dashboard';
import { NAVIGATION_ROUTES, NAVIGATION_TITLES } from '../navigation-routes';
import { HeaderIcon } from '../styled';

const Stack = createStackNavigator();

export const DashboardWebStack = () => {
  // dispatch
  const dispatch = useDispatch();

  // navigation
  const navigation = useNavigation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={NAVIGATION_ROUTES.TAB_WEB}
        component={DashboardWebScreen}
        options={{
          headerRight: () => (
            <HeaderIcon
              onPress={() => dispatch(actions.hideAppAction())}
            >
              <Icon
                icon='MobileUiGrey9'
              />
            </HeaderIcon>
          ),
          headerLeft: () => (
            <HeaderIcon
              onPress={() => navigation.toggleDrawer()}
            >
              <Icon
                icon='MobileUiGrey15'
              />
            </HeaderIcon>
          ),
          headerTitle: NAVIGATION_TITLES.TAB_WEB,
        }}
      />
    </Stack.Navigator>
  );
};
