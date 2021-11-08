import React, {useState, useEffect} from 'react'
import {View, Text} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import getStorageData from '../Hooks/getStorageData'
import CopingCard from '../Components/CopingCard'
import setStorageData from '../Hooks/setStorageData'

type cCard = {
	emotion: string,
	text: string
}


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

	return (
		<View style={{}}>
			<Text style={{color: 'white'}}>Coping Cards</Text>

			<ScrollView>
				{/* map transforms an array of one element to another */}
				{ccards.map((ccard, i) => {
					return <CopingCard ccard={ccard} key={i} />
				})}
			</ScrollView>
		</View>
	)
}
