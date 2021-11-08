// https://reactnative.dev/docs/layout-props

import { StyleSheet } from "react-native"

export default function getStyling() {
    return StyleSheet.create({
        container: {
            backgroundColor: '#1f2f3f',
            flex: 1,
            justifyContent: 'flex-start',
            alignItems: 'center'
        },
        h1: {
            color: 'white',
            fontSize: 32,
            marginBottom: 12,
            textAlign: 'center'
        },
        simpleText: {
            color: 'white',
            fontSize: 16,
            marginBottom: 10
        },
    })
}