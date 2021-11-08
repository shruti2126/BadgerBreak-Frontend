import React, {useState, useEffect} from 'react'
import {View, Text, TouchableOpacity, Button} from 'react-native'
import getStorageData from '../Hooks/getStorageData'
import AsyncStorage from '@react-native-async-storage/async-storage'

type cCard = {
	emotion: string,
	text: string
}

type Quiz = {
	title: string,
	description: string,
	questions: string[],
	minPerQuestion: number,
	maxPerQuestion: number,
	answerLegend: string[],
}

type quizScoreType = {
	title: string, 
	score: number
}

export default function Home({navigation}) {
	const [cCards, setcCards] = useState<cCard[]>([]);
	const [quizes, setQuizes] = useState<quizScoreType[]>([]);
	
	const [showAssessments, setShowAssessments] = useState<boolean>(false);

	useEffect(() => {
		loadData();
	}, [])

	const loadData = async () => {
		const user = await getStorageData('user')

		const cards = await getStorageData(user.email + ':cCards');
		const allQuizes = await getStorageData(user.email + ':quizes');

		setQuizes(allQuizes !== null? allQuizes : []);
		setcCards(cards !== null? cards : [])
	}

	return (
		<View style={{backgroundColor: '#1f2f3f', flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
			<Text style={{color: 'white', fontSize: 32}}>Home Screen</Text>
			<Button 
				onPress={loadData}
				title='Refresh Data'
				color='green'
			/>

			<View style={{backgroundColor: '#DDDDDD', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '90%', padding: 10, borderRadius: 10, margin: 10, marginBottom: 20}}>
				<Text style={{fontSize: 12, fontWeight: 'bold'}}>Coping Cards</Text>
				<Text style={{fontSize: 12}}>You have {cCards.length} Coping Cards</Text>
			</View>

			<TouchableOpacity 
				style={{backgroundColor: '#DDDDDD', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '90%', padding: 10, borderRadius: 10, margin: 10, marginBottom: 20}}
				onPress={() => setShowAssessments(!showAssessments)}
			>
				<Text style={{fontSize: 12, fontWeight: 'bold'}}>Your Assessments</Text>
				<Text style={{fontSize: 12}}>You have taken {quizes.length} Assessment(s)</Text>
				<Text style={{fontSize: 12}}>Press Here to show/hide</Text>
				{showAssessments &&
					<>
						{quizes.map((quiz: quizScoreType) => {
							return (<View style={{borderColor: '#000', borderWidth: 1, padding: 10, margin: 10}}>
								<Text style={{fontSize: 12}}>{quiz.title}: {quiz.score}</Text>
							</View>)
						})}
					</>
				}
			</TouchableOpacity>

			<TouchableOpacity 
				style={{padding: 20, margin: 15, backgroundColor: 'lightblue', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 10}}	
				onPress={async () => {
					await AsyncStorage.removeItem('user');
					navigation.goBack();
				}}
			>
				<Text style={{fontSize: 12, color: 'black'}}>Sign Out</Text>
			</TouchableOpacity>

			<TouchableOpacity 
				style={{padding: 20, margin: 15, backgroundColor: 'red', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 10}}	
				onPress={async () => {
					await AsyncStorage.clear();
					navigation.goBack();
				}}
			>
				<Text style={{fontSize: 12, color: 'white'}}>Delete All Your Data</Text>
			</TouchableOpacity>
		</View>
	)
}
