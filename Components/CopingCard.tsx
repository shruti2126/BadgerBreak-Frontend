import React, {useState} from 'react';
import {Button, Text, View, TouchableOpacity, TextInput} from 'react-native';
import getStyles from '../Styling/Styling'

type cCard = {
	emotion: string,
	text: string
}

type cardProps = {
	ccard: cCard,
	editCard: (cCard: cCard) => void,
	delCard: () => void
}

const styles = getStyles();

const CopingCard: React.FC<cardProps> = ({ccard, editCard, delCard}) => {
	const [isEditing, setEditing] = useState<boolean>();
	const [emotion, setEmotion] = useState<string>(ccard.emotion);
	const [text, setText] = useState<string>(ccard.text);

	return (
		<View style={[styles.card, {width: 250}]}>
			<TouchableOpacity 
				style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: 200}}
				onPress={() => setEditing(!isEditing)}
			>
				<Text style={{fontSize: 14, fontWeight: 'bold'}}>{ccard.emotion}</Text>
				<Text style={{fontSize: 14}}>{ccard.text}</Text>
			</TouchableOpacity>
			{isEditing ?
			<>
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
				<View style={{display: 'flex', flexDirection: 'row'}}>
					<Button
						onPress={() => {editCard({emotion: emotion, text: text}); setEditing(false)}}
						title='Save Changes'
						color='green'
					/>
					<Button
						onPress={() => delCard()}
						title='Delete Card'
						color='red'
					/>
				</View>
			</>: <></>
			}
        </View>
	)
}

export default CopingCard;