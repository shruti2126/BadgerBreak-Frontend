import React, {useState, useEffect} from 'react'
import {View, Text, TouchableOpacity, Button} from 'react-native'
import getStorageData from '../Hooks/getStorageData'
import getQuizes from '../Hooks/getQuizes'

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

export default function Home() {
	const [cCards, setcCards] = useState<cCard[]>([]);
	const [quizes, setQuizes] = useState<quizScoreType[]>([]);
	
	const [showAssessments, setShowAssessments] = useState<boolean>(false);

	useEffect(() => {
		loadData();
	}, [])

	const loadData = async () => {
		const cards = await getStorageData('cCards');
		const allQuizes = await getStorageData('quizes');

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
		</View>
	)
}
