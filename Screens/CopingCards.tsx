import React, {useState, useEffect} from 'react'
import {View, Text} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import getStorageData from '../Hooks/getStorageData'
import CopingCard from '../Components/CopingCard'
import getStyling from '../Styling/Styling'

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

	return (
		<View style={styles.container}>
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
