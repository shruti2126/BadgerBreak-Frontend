import React, {useState, useEffect} from 'react'
import {View, Text, ScrollView, TouchableOpacity} from 'react-native'
import QuizCard from '../Components/QuizCard'
import getQuizes from '../Hooks/getQuizes'

type Quiz = {
	title: string,
	description: string,
	questions: string[],
	minPerQuestion: number,
	maxPerQuestion: number,
	answerLegend: string[],
}

export default function ViewAssessments({navigation}) {

	const [quizes, setQuizes] = useState<Quiz[]>([]);

	useEffect(async () => {
		const quizArray = await getQuizes()
		setQuizes(quizArray);
	}, []);

	return (
		<View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-start', backgroundColor: '#1f2f3f'}}>
			<Text style={{color: 'white', fontSize: 32}}>Take an Assessment</Text>
			<ScrollView>
				<View style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start'}}>
					{quizes.map((quiz) => {
						return <QuizCard quiz={quiz} navigation={navigation} />
					})}
				</View>
			</ScrollView>
		</View>
	)
}
