import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
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
        setReplies(await getReplies())
    }
    
    return (
        <View style={[styles.container, {justifyContent: 'flex-start'}]}>
            <FullPost post={post} />
            {
                replies.map((reply, i) => {
                    return <ReplyCard reply={reply} author={post.author} key={i}/>
                })
            }
        </View>
    )
}

export default CBReplies
