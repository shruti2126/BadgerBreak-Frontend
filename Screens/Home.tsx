import React from 'react'
import {View, Text} from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

// Home Routing Object
export default function Home({navigaiton}) {
	return (
		<Drawer.Navigator
			screenOptions={{
			}}
		>
			<Drawer.Screen name="Home" component={HomeScreen} options={{title: '', drawerLabel: 'Home	'}} />
		</Drawer.Navigator>
	)
}

// Home Screen Component
const HomeScreen = ({navigation}) => {
	return (
		<View style={{backgroundColor: '#1f2f3f', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
			<Text style={{color: 'white', fontSize: 32}}>Home Screen</Text>
		</View>
	)
}
