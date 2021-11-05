import React, {useState, useEffect} from 'react'
import {View, Text} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import getStorageData from '../Hooks/getStorageData'
import CopingCard from '../Components/CopingCard'

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

	return (
		<View style={{flex: 1, backgroundColor: '#1f2f3f', justifyContent: 'center', alignItems: 'center'}}>
			<Text style={{color: 'white'}}>Coping Cards</Text>

			<ScrollView>
				{/* map transforms an array of one element to another */}
				{ccards.map((ccard) => {
					return <CopingCard ccard={ccard} />
				})}
			</ScrollView>
		</View>
	)
}
