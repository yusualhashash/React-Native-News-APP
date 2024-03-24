import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screen/Home';
import ReadNews from '../Screen/ReadNews';



const Stack = createStackNavigator();
export default function HomeNav() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='readnews' component={ReadNews} />
      
    </Stack.Navigator>
  )
}