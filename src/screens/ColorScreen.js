import React, {useState} from 'react';
import {StyleSheet, Button, View, FlatList} from 'react-native';


const ColorScreen = () => {
    const [colors, setColors] = useState([]);

    return (
        <View>
            <Button title="Add a color" onPress={() => {
                setColors([...colors, RandomRgb()])
            }}/>
            <View style={{height: 100, width: 100, backgroundColor: RandomRgb()}}></View>
            <FlatList
                keyExtractor={(item) => item}
                data={colors}
                renderItem={({item}) => {
                    return <View style={{height: 100, width: 100, backgroundColor: item}}/>

                }}
            />
        </View>
    );
};

const RandomRgb = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
}

const styles = StyleSheet.create({});

export default ColorScreen;