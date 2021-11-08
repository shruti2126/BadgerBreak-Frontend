import { StyleSheet } from "react-native"

export default function getStyling() {
    return StyleSheet.create({
        container: {
            backgroundColor: '#1f2f3f',
            flex: 1,
            justifyContent: 'flex-start',
            alignItems: 'center'
        }
    })
}