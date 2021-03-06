import React from 'react';
import { StyleSheet, Text, View, StatusBar, TextInput, Dimensions, Platform, ScrollView } from 'react-native';
import { AppLoading } from "expo";
import ToDo from './ToDo';

const { height, width } = Dimensions.get("window");

export default class App extends React.Component {
  state = {
    newToDo: "",
    loadedToDos: false
  }

  componentDidMount = () => {
    this._loadToDos();
  }
  
  render() {
    const { newToDo, loadedToDos } = this.state;
    if( !loadedToDos){
      return <AppLoading />
    }

    return (
      <View style={styles.container}>
        <StatusBar style="light-content" />
        <Text style={styles.text}>Simple To Do App</Text>
        <View style={styles.card}>
          <TextInput 
          style={styles.input} 
          placeholder={"New To Do"}
          value={newToDo}
          onChangeText={this._controlNewToDo}
          placeholderTextColor={"#999"}
          returnKeyType={"done"}
          autoCorrect={false} />
          <ScrollView contentContainerStyle={styles.toDos}>
            <ToDo text={"Hello !"} />
          </ScrollView>
        </View>
      </View>
    );
  }

  _controlNewToDo = text => {
    this.setState({
      newToDo: text
    });
  };

  _loadToDos = () => {
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f23657',
    alignItems: 'center',
  },
  text: {
    color: "white",
    fontSize: 30,
    fontWeight: "100",
    marginTop: 30,
    marginBottom: 20
  },
  card: {
    flex: 1,
    backgroundColor: "white",
    width: width - 50,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    ...Platform.select({
      ios: {
        shadowColor: "rgb(50, 50, 50)",
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: {
          height: -1,
          width: 0
        }
      },
      android: {
        elevation: 3
      }
    })
  },
  input: {
    padding: 10,
    borderBottomColor: "#bbb",
    borderBottomWidth: 1,
    fontSize: 25
  },
  toDos: {
    alignItems: "center"
  }
});
