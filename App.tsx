import React, {useState} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Login from './Screens/Login';
import Home from './Screens/Home';
import CopingCards from './Screens/CopingCards';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ViewAssessments from './Screens/ViewAssessments';
import TakeAssessment from './Screens/TakeAssessment';
import ViewAssessmentResults from './Screens/ViewAssessmentResults';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const QuizStack = createNativeStackNavigator();

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
  return (
    <Drawer.Navigator
      screenOptions={{
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
    <QuizStack.Navigator>
      <QuizStack.Screen name="ViewAssessments" component={ViewAssessments} />
      <QuizStack.Screen name="TakeAssessment" component={TakeAssessment} />
      <QuizStack.Screen name="ViewAssessmentResuts" component={ViewAssessmentResults} />
    </QuizStack.Navigator>
  )
}
