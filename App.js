import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Picker } from 'react-native';
import { Select, Option } from 'react-native-chooser';

const data = [
  {
    name: "ada",
    age: "25",
    position: "ceo",
  },
  {
    name: "rah",
    age: "27",
    position: "cto",
  },
  {
    name: "sono",
    age: "23",
    position: "tiger",
  },
]

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectUser:data[0],
    }

    this.handleSelectUser = (e) => {
      const selectUserName = data.filter(d => d.name === e)[0];
      this.setState({
        selectUser: selectUserName,
      })
    }
  }
  render() {
    const { selectUser} = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hello World!</Text>
        <Select
          defaultText = {this.state.name}
          style={{ height: 50, width: 100 }}
          onSelect = {this.handleSelectUser}>
          {data.map((d, index) =>
            <Option
             key={index}
             value={d.name}
            >{d.name}</Option>
          )}
        </Select>
        <Text>User Info</Text>
        <Text>name: {selectUser.name}</Text>
        <Text>age: {selectUser.age}</Text>
        <Text>position: {selectUser.position}</Text>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#0000ff',
  },
});
