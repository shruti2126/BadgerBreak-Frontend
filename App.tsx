import React, {useState} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Login from './Screens/Login';
import Home from './Screens/Home';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Log In" component={Login}/>
        <Stack.Screen name="Home" component={MainNavigator}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const MainNavigator: React.FC = () => {
  <Drawer.Navigator
		screenOptions={{
		}}
	>
	  <Drawer.Screen name="Home" component={Home} options={{title: '', drawerLabel: 'Home	'}} />
	</Drawer.Navigator>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
