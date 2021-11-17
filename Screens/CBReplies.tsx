import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import PostsCard from '../Components/PostsCard'
import FullPost from '../Components/FullPost'
import ReplyCard from '../Components/ReplyCard'
import getReplies from '../Hooks/getReplies'

type Replies = {
    Text: String, 
    Author: String, 
    PostId: Number,
    Date: String, 
    Likes: Number
}

// const getReplies = () => {
//     return [
//         {
//             Text: "Bruh!",
//             Author: "Don't give a damn!",
//             PostId: 123,
//             Date: "11/15/2021",
//             Likes: 100000
//         }
//     ]
// }
const CBReplies = ({navigation, route}) => {
    const post = route.params.post
    
    const [replies, setReplies] = useState<Replies[]>([])
    
    useEffect(async () => {
        setReplies(await getReplies())
    }, [])
    
    return (
        <View>
            <FullPost post={post} />
            {
                replies.map((reply, i) => {
                    return <ReplyCard reply={reply} postId={post._id} key={i}/>
                })
            }
        </View>
    )
}

export default CBReplies

const styles = StyleSheet.create({})
