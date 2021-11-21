import React, {useEffect, useState} from 'react'
import { StyleSheet, Button, Text, View } from 'react-native'
import PostsCard from '../Components/PostsCard'
import FullPost from '../Components/FullPost'
import ReplyCard from '../Components/ReplyCard'
import getReplies from '../Hooks/getReplies'
import getStyles from '../Styling/Styling'

type Replies = {
    Text: String, 
    Author: String, 
    PostId: Number,
    Date: String, 
    Likes: Number
}

const styles = getStyles();

const CBReplies = ({navigation, route}) => {
    const post = route.params.post
    
    const [replies, setReplies] = useState<Replies[]>([])
    
    useEffect(() => {
        loadReplies();
    }, [])

    const loadReplies = async () => {
        const repls = await getReplies();
        setReplies(repls.sort((a, b) => a.date.cmp(b.date)));
    }
    
    return (
        <View style={[styles.container, {justifyContent: 'flex-start'}]}>
            <View style={{height: 15, width: 30}} />
            <Button onPress={() => {navigation.goBack()}} title='Back' color="steelblue" />
            <View style={{height: 20, width: 30}} />
            <FullPost post={post} />
            {
                replies.map((reply, i) => {
                    return <ReplyCard reply={reply} author={post.author} key={i}/>
                })
            }
            <View style={{height: 20, width: 30}} />
            <Button onPress={() => {navigation.navigate('Create', {mode: false, post: post})}} title='Reply' color="steelblue" />
            <View style={{height: 15, width: 30}} />
        </View>
    )
}

export default CBReplies
