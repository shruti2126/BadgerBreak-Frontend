import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import deletePost from '../Hooks/deletePost';
import getStorageData from '../Hooks/getStorageData';
import updatePost from '../Hooks/updatePost';
import { Post } from '../Interfaces/Interfaces'
import getStyles from '../Styling/Styling'

const styles = getStyles();

type propType = {
    post: Post,
    refresh: Function,
}

const FullPost: React.FC<propType> = ({post, refresh}) => {
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
        setLikes(likes + 1)
        updateLikes(likes + 1)
    }
    
    const updateLikes = (likes) => {
        post.Likes = likes
        updatePost(post);
    }

    return (
        <View
            style={[styles.postCard, {width: '95%', padding: 20}]}
        >
            <Text style={{fontSize: 24, fontWeight: 'bold'}}>{post.Title}</Text>
            <Text style={{fontSize: 14, marginBottom: 15}}>{post.Text}</Text>
            <TouchableOpacity 
                    style={{display: 'flex', flexDirection: 'row', alignItems: 'center', width: 50, marginRight: 30}}
                    onPress={increaseLikes}
            >
                <View style={{marginTop: 1, display: 'flex', alignItems: 'center', flexDirection: 'row'}}>
                    <Image style={styles.like_image} source={require('../assets/like.webp')} /> 
                    <Text style={{fontSize: 20}}> {likes}  </Text>
                </View>
                {(post.Author === user || post.Author === 'admin@admin.com')?
                    <TouchableOpacity 
                        style={[styles.loginCard, styles.redBorder, {backgroundColor: 'white', height: 40, minWidth: 150, width: 150, margin: 15, marginLeft: 100}]}
                        onPress={() => {deletePost(post); refresh()}}
                    >
                        <Text style={{fontSize: 16, color: '#8f0000', textDecorationLine: 'underline', margin: 0}}>Delete</Text>
                    </TouchableOpacity>
                    : <></>
                }
            </TouchableOpacity>
        </View>
    )
}

export default FullPost
