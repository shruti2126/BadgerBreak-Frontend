import React, {useState, useEffect} from 'react'
import {View, Text, ScrollView, TouchableOpacity} from 'react-native'
import QuizCard from '../Components/QuizCard'
import getQuizes from '../Hooks/getQuizes'
import getStyling from '../Styling/Styling'

type Quiz = {
	title: string,
	description: string,
	questions: string[],
	minPerQuestion: number,
	maxPerQuestion: number,
	answerLegend: string[],
}

const styles = getStyling();

export default function ViewAssessments({navigation}) {

	const [quizes, setQuizes] = useState<Quiz[]>([]);

	useEffect(async () => {
		const quizArray = await getQuizes()
		setQuizes(quizArray);
	}, []);

	return (
		<View style={styles.container}>
			<Text style={styles.h1}>Take an Assessment</Text>
			<ScrollView>
				{quizes[0] !== "Could not fetch Quizes" && 
					<View style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start'}}>
						{quizes.map((quiz, i) => {
							return <QuizCard quiz={quiz} navigation={navigation} key={i} />
						})}
					</View>
				}
			</ScrollView>
		</View>
	)
}
