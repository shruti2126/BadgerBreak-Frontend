import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import PostCard from '../Components/PostsCard'
import getPosts from  '../Hooks/getPosts'

type Post = {
    _id: Number,
    Title: String, 
    Author: String, 
    Text: String, 
    Date: Date, 
    Likes: Number, 
    NumReplies: Number,
}

// const getPosts = async () => {
//     return [
//         {
//             _id: 1,
//             Title: "You wont believe what I saw on the back of my pet turtle!", 
//             Author: "The real G.O.A.T", 
//             Text: "It was a turtle shell :|", 
//             Date: new Date(2018, 11, 24, 10, 33, 30, 0), 
//             Likes: 50000, 
//             NumReplies: 100,
//         }
//     ]
// }

const CBPosts = ({navigation, route}) => {
    const [posts, setPosts] = useState<Post[]>([])

    useEffect(async () => {
        console.log("here")
        setPosts(await getPosts())
    }, [])

    return (
        <View>
            { 
                posts.map((post, i)=>{
                    return <PostCard post={post} navigation={navigation} key={i}/>
                })
                
            }
        </View>
    )
}

export default CBPosts

const styles = StyleSheet.create({})
