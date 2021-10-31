import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Login from './Screens/Login'
import loginUser from './Hooks/loginUser'

export default function App() {
  const [status, setStatus] = useState('');
  return (
    <Login />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
