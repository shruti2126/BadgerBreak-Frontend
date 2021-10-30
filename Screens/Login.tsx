import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import getStyles from '../Hooks/GlobalStyles'
import loginUser from '../Hooks/loginUser'
import registerUser from '../Hooks/RegisterUser'

type mode = '' | 'login' | 'register'

export default function Login() {
	const styles = getStyles();

	const [mode, setMode] = useState<mode>('');

	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');

	const [status, setStatus] = useState('');

	return (
		<View style={styles.Background}>
			<Text style={{color: 'white', fontSize: '48px'}}>Badger Break</Text>

			{mode === '' &&
			<View style={{marginTop: '100px'}}>
				<Button
					onPress={() => {setMode('login')}}
					title="Login"
				/>
				<Button
					onPress={() => {setMode('register')}}
					title="Register"
				/>
			</View>
			}

			{mode !== '' &&
			<View style={{marginTop: '100px'}}>
				<TextInput
					onChangeText={setUserName}
					value={userName}
					placeholder="User Name"
					style={styles.TextArea}
				/>
				<TextInput
					onChangeText={setPassword}
					value={password}
					secureTextEntry={true}
					placeholder="Password"
					style={styles.TextArea}
				/>
				{status !== '' &&
				<View style={styles.ErrorMessage}><Text style={{color: 'red', fontSize: '18px'}}>{status}</Text></View>
				}
				<Button
					onPress={async () => {
						try {
							if (mode ==='login') await loginUser(userName, password);
							else 				 await registerUser(userName, password);

							// navigation.navigate("Home", {userName: userName});
						}
						catch(error) { 
							setStatus(error.toString());
						}
					}}
					title={mode}
				/>
			</View>
			}
		</View>
	)
}
