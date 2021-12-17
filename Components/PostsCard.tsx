import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native'
import getStyles from '../Styling/Styling'
import {Post} from '../Interfaces/Interfaces'
import { TouchableHighlight } from 'react-native-gesture-handler'
import updatePost from '../Hooks/updatePost'
import getStorageData from '../Hooks/getStorageData'
import deletePost from '../Hooks/deletePost'

type propType = {
    post: Post,
    navigation: any,
    refresh: Function,
}

const styles = getStyles();

const PostCard: React.FC<propType> = ({post, navigation, refresh}) => {
    const [likes, setLikes] = useState<number>(post.Likes)
    const [user, setUser] = useState<string>('')

    useEffect(() => {
        loadUser()
    }, [])

    const loadUser = async () => {
        const data = await getStorageData('user')
        setUser(data.email)
    }
    
    const increaseLikes = () => {
        setLikes(likes + 1);
        updateLikes(likes + 1)
    }
    
    const updateLikes = (likes) => {
        post.Likes = likes
        updatePost(post);
    }
   
    return (
        <View
            style={[styles.postCard, {width:'100%', padding: 20}]}
        >
            <TouchableOpacity 
                onPress={() => {navigation.navigate("Replies", {post})}}
            >
            <Text style={{fontSize: 20}}>{post.Title}</Text>
            <View style={{height: 15}}/>
            </TouchableOpacity>
            <View style={[styles.like, {justifyContent: 'flex-start'}]}>
                <TouchableOpacity 
                    style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}
                    onPress={increaseLikes}
                >
                    <View style={{marginTop: 1, display: 'flex', alignItems: 'center', flexDirection: 'row', minWidth: 60}}>
                        <Image style={styles.like_image} source={require('../assets/like.webp')} /> 
                        <Text style={{fontSize: 20}}> {likes}  </Text>
                    </View>
                </TouchableOpacity>
                {(post.Author === user || post.Author === 'admin@admin.com')?
                    <TouchableOpacity 
                        style={[styles.loginCard, {backgroundColor: 'red', height: 40, minWidth: '50%', margin: 15, marginLeft: 100}]}
<<<<<<< HEAD
                        onPress={() => {deletePost(post); refresh()}}
=======
                        onPress={async () => {await deletePost(post); refresh()}}
>>>>>>> 3b30e1a0a316f0d664384209e35bc2ecfd3bfe3e
                    >
                        <Text style={{fontSize: 16, color: 'white'}}> Delete This Post </Text>
                    </TouchableOpacity>
                    : <></>
                }
            </View>
        </View>
    )
}

export default PostCard
