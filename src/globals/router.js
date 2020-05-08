// ########## Import Dependencies Here ##########
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from '@taimoormk/react-native-icon-collection/icon';
import { shape, func } from 'prop-types';
import { TouchableOpacity } from 'react-native';
import React from 'react';
import { useDispatch } from 'react-redux';

// ########## Import Screens Here ##########
import { Dashboard as DashboardScreen } from '../screens/dashboard';
import { Profile as ProfileScreen } from '../screens/profile';

// ########## Import Components Here ##########
import * as actions from '../screens/main-screen/actions';
import { headerStyles } from './styles';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DashboardStack = ({ navigation }) => {
  const dispatch = useDispatch();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Dashboard'
        component={DashboardScreen}
        options={{
          headerRight: () => (
            <TouchableOpacity
              onPress={() => dispatch(actions.hideAppAction())}
              style={headerStyles.iconRight}
            >
              <Icon
                icon='mobileuigrey9'
              />
            </TouchableOpacity>
          ),
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.toggleDrawer()}
              style={headerStyles.iconLeft}
            >
              <Icon
                icon='mobileuigrey15'
              />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

DashboardStack.propTypes = {
  navigation: shape({
    toggleDrawer: func.isRequired,
  }).isRequired,
};

const ProfileStack = ({ navigation }) => {
  const dispatch = useDispatch();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          headerRight: () => (
            <TouchableOpacity
              onPress={() => dispatch(actions.hideAppAction())}
              style={headerStyles.iconRight}
            >
              <Icon
                icon='mobileuigrey9'
              />
            </TouchableOpacity>
          ),
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.toggleDrawer()}
              style={headerStyles.iconLeft}
            >
              <Icon
                icon='mobileuigrey15'
              />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

ProfileStack.propTypes = {
  navigation: shape({
    toggleDrawer: func.isRequired,
  }).isRequired,
};

const DrawerRoutes = () => (
  <NavigationContainer>
    <Drawer.Navigator
      initialRouteName='Dashboard'
      // screenOptions={}
      lazy
      drawerType='front'
      edgeWidth={20}
      hideStatusBar
      statusBarAnimation='fade'
      keyboardDismissMode='on-drag'
      minSwipeDistance={100}
      overlayColor='#9E9E9E'
      // gestureHandlerProps={}
      // sceneContainerStyle={}
      drawerStyle={{
        backgroundColor: '#c6cbef',
        width: 240,
      }}
    >
      <Drawer.Screen name='Dashboard' component={DashboardStack} />
      <Drawer.Screen name='Profile' component={ProfileStack} />
    </Drawer.Navigator>
  </NavigationContainer>
);

export const AppRouter = () => DrawerRoutes();
