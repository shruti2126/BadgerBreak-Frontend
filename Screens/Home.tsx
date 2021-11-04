import React, {useState, useEffect} from 'react'
import {View, Text} from 'react-native'
import getStorageData from '../Hooks/getStorageData'

export default function Home() {
	const [message, setMessage] = useState('');

	useEffect(async () => {
		setMessage(JSON.stringify(await getStorageData('user')));
	}, [])

	return (
		<View style={{backgroundColor: '#1f2f3f', flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
			<Text style={{color: 'white', fontSize: 32}}>Home Screen</Text>
			<Text style={{color: 'white', fontSize: 32}}>{message}</Text>
		</View>
	)
}
