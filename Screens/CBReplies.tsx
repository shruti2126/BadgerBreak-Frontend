import React, {useEffect, useState} from 'react'
import { StyleSheet, Button, Text, View, ScrollView, ImageBackground } from 'react-native'
import PostsCard from '../Components/PostsCard'
import FullPost from '../Components/FullPost'
import ReplyCard from '../Components/ReplyCard'
import getReplies from '../Hooks/getReplies'
import getStyles from '../Styling/Styling'
import { Post, Replies } from '../Interfaces/Interfaces'

const styles = getStyles();

const CBReplies = ({navigation, route}) => {
    const post = route.params.post
    
    const [replies, setReplies] = useState<Replies[]>([])
    
    useEffect(() => {
		navigation.addListener('focus', () => loadReplies())
        loadReplies();
    }, [])

    const loadReplies = async () => {
        setReplies([])
        const repls = await getReplies(post._id);
        setReplies(repls);
    }
    
    //{justifyContent: 'flex-start'}
    return (
		<ImageBackground source={require('../assets/com.jpg')} resizeMode="cover" style={[styles.image, {flex: 1}]}> 
        <View style={[styles.repliesContainer]}>
            <View style={{height: 15, width: 30}} />
            <Button onPress={() => {navigation.goBack()}} title='Back' color="steelblue" />
            <FullPost post={post} refresh={() => {navigation.goBack()}} />
            <ScrollView>
                <View style={{display: 'flex', alignItems: 'flex-end'}}>
                    {
                        replies.map((reply, i) => {
                            return <ReplyCard reply={reply} refresh={loadReplies} key={i}/>
                        })
                    }
                </View>
            </ScrollView>
            <View style={{height: 20, width: 30}} />
            <Button onPress={() => {navigation.navigate('Create', {mode: false, post: post})}} title='Reply' color="steelblue" />
            <View style={{height: 15, width: 30}} />
        </View>
        </ImageBackground>
    )
}

export default CBReplies
