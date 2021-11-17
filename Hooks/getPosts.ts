import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import axios from 'axios';
import url from './getUrl'

const getPosts = async () => {
	return await axios.get(url + '/posts')
		.then(response => response.data)
		.catch(error => ['Could not fetch posts']);
}

export default getPosts

const styles = StyleSheet.create({})
