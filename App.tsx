import React, {useState} from 'react';
import {StyleSheet, Text, View } from 'react-native';
import Login from './Screens/Login';
import Home from './Screens/Home';
import CopingCards from './Screens/CopingCards';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ViewAssessments from './Screens/ViewAssessments';
import TakeAssessment from './Screens/TakeAssessment';
import ViewAssessmentResults from './Screens/ViewAssessmentResults';
import { ThemeProvider, Button } from 'react-native-elements';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const QuizStack = createNativeStackNavigator();

import getStyling from './Styling/Styling';
const styles = getStyling();

// https://reactnativeelements.com/docs/customization/#theme
const theme = {
  Button: {
    // https://reactnativeelements.com/docs/button/#buttonstyle
    buttonStyle: styles.button,
    // https://reactnativeelements.com/docs/button/#containerstyle
    containerStyle: styles.buttonContainer

  },
};

export default function App() {
  return (
    <ThemeProvider theme = {theme}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Log In" component={Login}/>
          <Stack.Screen name="Home" component={MainNavigator}/>
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

const MainNavigator: React.FC = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#1f2f3f',
        },
        headerStyle: {
          backgroundColor: '#1f2f3f'
        },
        drawerItemStyle: {
          backgroundColor: 'white'
        },
        drawerType: 'back',
        headerTintColor: 'white',
      }}
    >
      <Drawer.Screen name="Home" component={Home} options={{title: '', drawerLabel: 'Home'}} />
      <Drawer.Screen name="Coping Cards" component={CopingCards} options={{title: '', drawerLabel: 'Coping Cards'}} />
      <Drawer.Screen name="Quiz" component={QuizNavigator} options={{title: '', drawerLabel: 'Take An Assessment'}} />
    </Drawer.Navigator>
  )
}

const QuizNavigator: React.FC = () => {
  return (
    <QuizStack.Navigator screenOptions={{headerShown: false}}>
      <QuizStack.Screen name="ViewAssessments" component={ViewAssessments} />
      <QuizStack.Screen name="TakeAssessment" component={TakeAssessment} />
      <QuizStack.Screen name="ViewAssessmentResuts" component={ViewAssessmentResults} />
    </QuizStack.Navigator>
  )
}
