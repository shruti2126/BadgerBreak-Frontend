import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import axios from 'axios';

const url = 'http://localhost:3001/posts';

const getPosts = async () => {
	return await axios.get(url)
		.then(response => response.data)
		.catch(error => ['Could not fetch posts']);
}

export default getPosts

const styles = StyleSheet.create({})
