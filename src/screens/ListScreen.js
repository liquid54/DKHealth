import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const ListItem = () => {
    const friends = [
        {name: 'Friends №1', age: 20},
        {name: 'Friends №2', age: 45},
        {name: 'Friends №3', age: 32},
        {name: 'Friends №4', age: 11},
        {name: 'Friends №5', age: 6},
        {name: 'Friends №6', age: 9},
        {name: 'Friends №7', age: 10}
    ];
    return (<FlatList

            keyExtractor={(friend) => friend.name}
            data={friends}
            renderItem={({item}) => {
                return <Text style={styles.textStyle}>{item.name}, Age: {item.age}</Text>
            }}
        />
    );
};


const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListItem;