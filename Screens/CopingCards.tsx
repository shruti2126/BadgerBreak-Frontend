import React, {useState, useEffect} from 'react'
import {View, Text, TextInput, Button} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import getStorageData from '../Hooks/getStorageData'
import CopingCard from '../Components/CopingCard'
import getStyling from '../Styling/Styling'
import setStorageData from '../Hooks/setStorageData'
import { setupFilesAfterEnv } from '../jest.config'

type cCard = {
	emotion: string,
	text: string
}

const styles = getStyling();

export default function CopingCards() {

	const [ccards, setcCards] = useState<cCard[]>([]); 
	const [emotion, setEmotion] = useState<string>('');
	const [text, setText] = useState<string>('');

	useEffect(async () => {
		const cardArray = await getStorageData("cCards");
		if (cardArray !== null) {
		 	setcCards(cardArray)
		}
	}, []);

	const addCard = async (newCard: cCard) => {
		await setStorageData("cCards", [...ccards, newCard])
		setcCards([...ccards, newCard])
	}

	const updateCard = async (index: number, newCard: cCard) => {
		var newCards = [...ccards]
		newCards.splice(index, 1, newCard)
		await setStorageData("cCards", newCards)
		setcCards(newCards);
	}

	const delCard = async (index: number) => {
		var newCards = [...ccards]
		newCards.splice(index, 1)
		await setStorageData("cCards", newCards)
		setcCards(newCards);
	}

	type filter = '' | 'anger' | 'fatigue' | 'insomnia'

	const [filter, setFilter] = useState<filter>('');

	return (
		<View style={styles.container}>
			<Text style={styles.h1}>Coping Cards</Text>

			<View style={{backgroundColor: '#DDDDDD', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '90%', padding: 10, borderRadius: 10}}>
				<Text style={{fontSize: 14}}>Add a New Coping Card</Text>
				<TextInput
					onChangeText={setEmotion}
					value={emotion}
					secureTextEntry={false}
					placeholder="Emotion"					
					style={{backgroundColor: 'white', height: 40, width: 150, padding: 10, marginTop: 10, marginBottom: 10, borderColor: '#000', borderWidth: 1, borderRadius: 5}}
				/>
				<TextInput
					onChangeText={setText}
					value={text}
					secureTextEntry={false}
					placeholder="Description"
					style={{backgroundColor: 'white', height: 40, width: 150, padding: 10, marginTop: 10, marginBottom: 10, borderColor: '#000', borderWidth: 1, borderRadius: 5}}
				/>
				<Button
					onPress={() => addCard({emotion: emotion, text: text})}
					title='Add New Card'
					color='green'
				/>
				<Text style = {styles.simpleText}>Select a Category</Text>

				<View> {/* button container */}

					<Button
						onPress = {() => setFilter('anger')}
						title = "anger"
					/>
					<Button
						onPress = {() => setFilter('fatigue')}
						title = "fatigue"
					/>
					<Button
						onPress = {() => setFilter('insomnia')}
						title = "insomnia"
					/>
				</View>
			</View>
			<View>
				{/* map transforms an array of one element to another */}
				{ccards.map((ccard, i) => {
					return <CopingCard 
						ccard={ccard} 
						key={i} 
						editCard={(cCard: cCard) => {updateCard(i, cCard)}}
						delCard={() => {delCard(i)}}
					/>
				})}
			</View>
		</View>
	)
}
