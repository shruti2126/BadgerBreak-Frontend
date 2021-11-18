import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, TextInput} from 'react-native';
import { Button } from 'react-native-elements';
import loginUser from '../Hooks/loginUser'
import registerUser from '../Hooks/registerUser'
import setStorageData from '../Hooks/setStorageData'
import getStorageData from '../Hooks/getStorageData'
import getQuizes from '../Hooks/getQuizes'
import getStyling from '../Styling/Styling'

type mode = '' | 'Log In' | 'Register'

const Login = ({ navigation }) => {

	useEffect(() => {
		loginIfUser();
	}, [])

	const loginIfUser = async () => {
		if (await getStorageData('user') !== null) {
			navigation.navigate('Home')
		}
	}

	const [mode, setMode] = useState<mode>('');

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const [status, setStatus] = useState('');

	const styles = getStyling();

	return (
		<View style={[styles.container, {justifyContent: 'center'}] }>
			<Text style={{color: 'white', fontSize: 32}}>Badger Break</Text>
			{mode === '' &&
			<>
				<Button
					onPress={() => setMode('Log In')}
					title="Log In"
				/>
				<Button
					onPress={() => setMode('Register')}
					title="Register"
				/>
			</>
			}
			{mode !== '' &&
			<>
				<Button
					onPress={() => {setMode(''); setStatus('')}}
					title="Back"
				/>
				<TextInput
					onChangeText={setEmail}
					value={email}
					secureTextEntry={false}
					placeholder="Email"
					style={{backgroundColor: 'white', height: 40, width: 150, padding: 10, marginTop: 10, marginBottom: 10}}
				/>
				<TextInput
					onChangeText={setPassword}
					value={password}
					secureTextEntry={true}
					placeholder="Password"
					style={{backgroundColor: 'white', height: 40, width: 150, padding: 10, marginBottom: 10}}
				/>
				<Button
					onPress={async () => {
						try { 
							// if (mode === 'Log In')
							// 	var result = await loginUser(email, password)
							// else
							// 	var result = await registerUser(email, password)

							// if (result.message !== undefined) {
							// 	setStatus(result.message);
							// 	return;
							// }
							
							// setStorageData('user', {email: email, token: result.token})
							navigation.navigate('Home');
						}
						catch (e: any) { setStatus(e.toString()) }
					}}
					title={mode}
				/>
			</>
			}
			{status !== '' && 
				<View style={{backgroundColor: 'white', borderColor: 'red', borderWidth: 5}}>
					<Text style={{color: 'red', fontSize: 18}}>{status}</Text>
				</View>
			}
		</View>
	)
}

export default Login