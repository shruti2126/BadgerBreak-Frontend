import React, {useEffect, useState} from 'react'
import { Button, Text, ScrollView, View } from 'react-native'
import PostCard from '../Components/PostsCard'
import getPosts from  '../Hooks/getPosts'
import getStyles from '../Styling/Styling'

type Post = {
    _id: Number,
    Title: String, 
    Author: String, 
    Text: String, 
    Date: Date, 
    Likes: Number, 
    NumReplies: Number,
}

const styles = getStyles();

const CBPosts = ({navigation, route}) => {
    const [posts, setPosts] = useState<Post[]>([])

    useEffect(() => {
        loadPosts()
    }, [])

    const loadPosts = async () => {
        const psts = await getPosts();
        setPosts(psts.sort((a, b) => a.date.cmp(b.date)));
    }

    return (
        <View style={[styles.container, {justifyContent: 'flex-start'}]}>
            <View style={{height: 20, width: 30}} />
            <Button onPress={() => {navigation.navigate('Create', {mode: true})}} title='Create Post' color="steelblue" />
            <View style={{height: 20, width: 30}} />
            <ScrollView style={{width: '100vw'}}>
                { 
                    posts.map((post, i)=>{
                        return <PostCard post={post} navigation={navigation} key={i}/>
                    })
                }
            </ScrollView>
        </View>
    )
}

export default CBPosts
