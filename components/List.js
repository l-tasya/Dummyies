import React from 'react';
import {StyleSheet, Text, View} from "react-native";

const List = ({title, data, numeric = false}) => {
    return <View style={styles.container}>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.list}>
            {
                data.map((i, index) => <Text style={styles.item} key={i}>{`${numeric?index + 1:'\u2022'} ${i}`}</Text>)
            }
        </View>
    </View>
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 40,
    },
    list: {
        marginBottom: 10,
    },
    title: {
        fontWeight: "bold",
        fontSize: 18,
        margin: 4,
        textAlign: "center",
        padding: 6,
        color: 'white'

    },
    titleContainer: {
        borderBottomColor: 'white',
        borderBottomWidth: 5,
        marginBottom: 10,
    },
    item: {
        backgroundColor: 'white',
        borderRadius: 4,
        padding: 4,
        marginVertical: 2,
        fontWeight: 'bold',
    }
})
export default List;