import * as React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TabBarIcon from '../components/TabBarIcon';
import Counters from '../screens/Counters';
import Config from '../screens/Config';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator
      tabBarOptions={{
        activeTintColor: '#fda50f', // Color of tab when pressed
        inactiveTintColor: '#b5b5b5', // Color of tab when not pressed
        showIcon: 'true', // Shows an icon for both iOS and Android
        labelStyle: {
          fontSize: 12,
          textAlign: 'center',
        },
        style: {
          height: 55,
          backgroundColor: '#011A47', // Makes Android tab bar white instead of standard blue
        },
      }}
      initialRouteName={INITIAL_ROUTE_NAME}
    >
      <BottomTab.Screen
        name="Counters"
        component={Counters}
        options={{
          title: 'Counters',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-star" />,
        }}
      />
      <BottomTab.Screen
        name="Config"
        component={Config}
        options={{
          title: 'Config',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-star" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Counters':
      return 'Counters';
    case 'Config':
      return 'Config';
    default:
      return 'Counters';
  }
}
