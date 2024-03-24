import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Home from './App/Screen/Home.js';
import { NavigationContainer } from '@react-navigation/native';
import HomeNav from './App/Navigation/HomeNav.js';

export default function App() {
  return (
    <SafeAreaView style={{ paddingTop:35,flex: 1 }}>
      <NavigationContainer>
        <HomeNav/>
      </NavigationContainer>
    </SafeAreaView>
  );
}
