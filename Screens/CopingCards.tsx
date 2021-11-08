import React, {useState, useEffect} from 'react'
import {View, Text, Button, Pressable } from 'react-native'
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

	const [ccards, setcCards] = useState<cCard[]>([{emotion: "sleepy", text: "take a nap"}]); 

	useEffect(async () => {
		const cardArray = await getStorageData("cCards");
		if (cardArray !== null) {
		 	setcCards(cardArray)
		}
		
	}, []);

	const addCard = async (newCard: cCard) => {
		await setStorageData("cCards", [])
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

			<ScrollView>
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
				{/* map transforms an array of one element to another */}
				{ccards.map((ccard, i) => {
					return <CopingCard cCard={ccard} key={i} />
				})}
			</ScrollView>
		</View>
	)
}
