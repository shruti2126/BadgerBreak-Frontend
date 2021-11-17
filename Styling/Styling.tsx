// https://reactnative.dev/docs/layout-props
import { StyleSheet } from "react-native"

export default function getStyling() {
    return StyleSheet.create({
        button: {
        },
        buttonContainer: {
            padding: 10
        },
        container: {
            alignItems: 'center',
            alignContent: 'center',
            backgroundColor: '#1f2f3f',
            flex: 1,
            flexDirection: "column",
            justifyContent: 'center'
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