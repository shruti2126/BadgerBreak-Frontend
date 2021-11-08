import React, {useState, useEffect} from 'react'
import {View, Text, TextInput, Button} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import getStorageData from '../Hooks/getStorageData'
import CopingCard from '../Components/CopingCard'
import setStorageData from '../Hooks/setStorageData'

type cCard = {
	emotion: string,
	text: string
}


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

	return (
		<View style={{backgroundColor: '#1f2f3f', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flex: 1}}>
			<Text style={{color: 'white', fontSize: 32, marginBottom: 20}}>Coping Cards</Text>

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
			</View>
			<ScrollView>
				{/* map transforms an array of one element to another */}
				{ccards.map((ccard, i) => {
					return <CopingCard 
						ccard={ccard} 
						key={i} 
						editCard={(cCard: cCard) => {updateCard(i, cCard)}}
						delCard={() => {delCard(i)}}
					/>
				})}
			</ScrollView>
		</View>
	)
}
