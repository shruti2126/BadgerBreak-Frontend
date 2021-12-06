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
            backgroundColor: '#1f2f3f',
            flex: 1,
            flexDirection: "column",
            justifyContent: 'flex-start'
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
        card: {
            backgroundColor: 'white',
            margin: 20,
            padding: 20,
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            borderRadius: 10,
        },
        textInput: {
            backgroundColor: 'white', 
            height: 40, 
            width: 150, 
            padding: 10, 
            marginTop: 10, 
            marginBottom: 10,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: 'black',
        },
    })
}