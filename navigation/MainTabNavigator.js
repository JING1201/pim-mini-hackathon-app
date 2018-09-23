import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import IdeaScreen from '../screens/IdeaScreen';
import MaterialScreen from '../screens/MaterialScreen';
import StartScreen from '../screens/StartScreen';
import SatisfactionScreen from '../screens/SatisfactionScreen';
import PhotoScreen from '../screens/PhotoScreen';
import ShareScreen from '../screens/ShareScreen';
import ReflectionScreen from '../screens/ReflectionScreen';
import ConclusionScreen from '../screens/ConclusionScreen';

export default createStackNavigator({
  Home: HomeScreen,
  Idea: IdeaScreen,
  Material: MaterialScreen,
  Start: StartScreen,
  Satisfaction: SatisfactionScreen,
  Photo: PhotoScreen,
  Share: ShareScreen,
  Reflection: ReflectionScreen,
  Conclusion: ConclusionScreen,
},{ headerMode: 'none' });


