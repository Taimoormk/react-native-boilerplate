// ########## Import Dependencies Here ##########
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from '@react-pakistan/react-native-icon-collection/icon';
import { shape, func } from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';

// ########## Import Components Here ##########
import { hideAppAction } from '../../redux/actions';
import { DashboardMobile as DashboardMobileScreen } from '../../screens/dashboard';
import { NAVIGATION_ROUTES, NAVIGATION_TITLES } from '../navigation-routes';
import { HeaderIcon } from '../styled';

const Stack = createStackNavigator();

export const DashboardMobileStack = ({
  navigation,
}) => {
  // dispatch
  const dispatch = useDispatch();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={NAVIGATION_ROUTES.TAB_MOBILE}
        component={DashboardMobileScreen}
        options={{
          headerRight: () => (
            <HeaderIcon
              onPress={() => dispatch(hideAppAction())}
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
          headerTitle: NAVIGATION_TITLES.TAB_MOBILE,
        }}
      />
    </Stack.Navigator>
  );
};

DashboardMobileStack.propTypes = {
  navigation: shape({
    toggleDrawer: func.isRequired,
  }).isRequired,
};