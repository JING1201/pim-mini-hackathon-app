import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import IdeaScreen from '../screens/IdeaScreen';
import MaterialScreen from '../screens/MaterialScreen';
import SettingsScreen from '../screens/SettingsScreen';

export default createStackNavigator({
  Home: HomeScreen,
  Idea: IdeaScreen,
  Material: MaterialScreen
},{ headerMode: 'none' });


