import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

export default class ToDo extends React.Component{
    state = {
        isEditing: false,
        isCompleted: false,
        toDoValue: ""
    };

    render() {
        const { isCompleted, isEditing } = this.state;
        const {toDoValue} = this.state;
        const { text } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.column}>
                    <TouchableOpacity onPress={this._toggleComplete}>
                        <View style={
                            [styles.circle, 
                            isCompleted ? 
                            styles.completedCricle : 
                            styles.uncompletedCircle]} />
                    </TouchableOpacity>
                    
                    { isEditing ? 
                    (
                        <TextInput 
                        style={styles.inputText} 
                        value={toDoValue} 
                        multiline={true}
                        onChangeText={this._controlInput}
                        returnKeyType={"done"}
                        onBlur={this._finishEditing}
                        />
                    )
                     : (
                        <Text
                        style={[styles.text,
                        isCompleted ? styles.completedText : styles.uncompletedText]}>
                        {text}
                    </Text>
                    )}
                </View>
                {isEditing ?
                    (
                    <View style={styles.action}>
                        <TouchableOpacity onPress={this._finishEditing}>
                            <View style={styles.actionContainer} >
                                <Text style={styles.actionText}>V</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    )
                    :(
                    <View style={styles.action}>
                        <TouchableOpacity onPress={this._startEditing}>
                            <View style={styles.actionContainer}>
                                <Text style={styles.actionText}>O</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.actionContainer}>
                                <Text style={styles.actionText}>X</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    )}
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

    _startEditing = () => {
        const { text } = this.props;
        this.setState({
            isEditing: true,
            toDoValue: text
        })
    }

    _finishEditing = () => {
        this.setState({
            isEditing: false
        })
    }

    _controlInput = text => {
        this.setState({
            toDoValue: text
        })
    }

}

const styles = StyleSheet.create({
    container: {
        width: width - 80,
        borderBottomColor: "#bbb",
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
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
        marginTop: 10
    },
    completedCricle: {
        borderColor: "#bbb"
    },
    uncompletedCircle: {
        borderColor: "red"
    },
    column: {
        flexDirection: "row"      
    },
    action : {
        flexDirection: "row",
    },
    actionContainer: {
        marginVertical: 10,
        marginHorizontal: 10
    },
    actionText: {
        fontSize: 30
    },
    inputText: {
        fontSize: 20,
        marginVertical: 10,
        width: width / 2
    }
})