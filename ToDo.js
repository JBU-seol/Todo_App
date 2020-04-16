import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

export default class ToDo extends React.Component{
    state = {
        isEditing: false,
        isCompleted: false
    };

    render() {
        const { isCompleted } = this.state;
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this._toggleComplete}>
                    <View style={ [styles.circle, isCompleted ? styles.completedCricle : styles.uncompletedCircle]}>
                    </View>
                </TouchableOpacity>
                <Text style={[styles.text,
                isCompleted? styles.completedText : styles.uncompletedText ]}>
                    Hello, I'am To Do !
                </Text>
            </View>
        )
    }  
    
    _toggleComplete = () => {
        this.setState(prevState => {
            return {
                isCompleted: !prevState.isCompleted
            };
        })
    }
}

const styles = StyleSheet.create({
    container: {
        width: width - 80,
        borderBottomColor: "#bbb",
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: "row",
        alignItems: "center"
    },
    text:{
        fontSize: 20,
        marginVertical: 10
    },
    completedText: {
        color: "#bbb",
        textDecorationLine: "line-through"
    },
    uncompletedText: {
        color: "black"
    },
    circle: {
        width: 24,
        height: 24,
        borderRadius: 12,
        borderColor: "red",
        borderWidth: 3,
        marginRight: 20,
    },
    completedCricle: {
        borderColor: "#bbb"
    },
    uncompletedCircle: {
        borderColor: "red"
    }
})