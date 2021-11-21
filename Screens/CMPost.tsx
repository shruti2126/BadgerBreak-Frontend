import React, {useEffect, useState} from 'react'
import { TextInput, Text, View, TouchableOpacity } from 'react-native'
import getStorageData from '../Hooks/getStorageData'
import getStyles from '../Styling/Styling'

type Reply = {
    Text: String, 
    Author: String, 
    PostId: Number,
    Date: String, 
    Likes: Number
}

type Post = {
    Title: String, 
    Author: String, 
    Text: String, 
    Date: String, 
    Likes: Number, 
    NumReplies: Number,
}

const styles = getStyles();

const CMPost = ({navigation, route}) => {
    const post = route.params.post
    
	// Mode will be true if we are submitting a post, false if we are submitting a reply
	const mode = post === undefined;

	const [Title, setTitle] = useState('')
	const [Txt,  setText ] = useState('')
    const [status, setStat] = useState('')
    
    return (
        <View style={[styles.container, {justifyContent: 'flex-start'}]}>
			<View style={styles.card}>
				<Text>Make your {(mode)? "Post" : "Reply"}</Text>
				{mode && 
					<TextInput
						onChangeText={setTitle}
						value={Title}
						secureTextEntry={false}
						placeholder="Post Title"
						style={styles.textInput}
					/>
				}
				<TextInput
						onChangeText={setText}
						value={Txt}
						secureTextEntry={false}
						placeholder="Email"
						style={styles.textInput}
				/>
				<TouchableOpacity
					style={[styles.card, {backgroundColor: 'steelblue', height: 35, margin: 15}]}
					onPress={async () => {
						// submit correct type of document to the api
						const user = await getStorageData('user');

						if (post && Title.length < 12) {
							setStat("Your Title must be at least 12 characters!");
							return;
						}

						if (Text.length < 24) {
							setStat("Your Post must be at least 24 characters!");
							return;
						}

						if (post) {
							const post: Post = {
								Title, 
								Text: Txt, 
								Author: user.email, 
								Date: JSON.stringify(new Date().getDate()),
								Likes: 0,
								NumReplies: 0
							}
							// send it off to the api
							try { 
								// await createPost(post);
							}
							catch (err) {
								setStat(err.message);
							}
						}
						else { 
							const reply: Reply = {
								Text: Txt,
								Author: user.email,
								Date: JSON.stringify(new Date().getDate()),
								PostId: post.postId,
								Likes: 0
							}
							// send it off to the api
							try { 
								// await createReply(reply);
							}
							catch (err) {
								setStat(err.message);
							}
						}
						navigation.goBack();
					}}
				>
					<Text style={{fontSize: 16, color: 'white'}}>Submit {(post)? "Post" : "Reply"}</Text>
				</TouchableOpacity>
			</View>

			{status !== '' && 
				<View style={[styles.card, {borderWidth: 5, borderColor: 'red'}]}>
					<Text>{status}</Text>
				</View>
			}
        </View>
    )
}

export default CMPost
