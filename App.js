import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "react-navigation";
import Screen1 from "./Screen1";
import Screen2 from "./Screen2";

const RootStack = createStackNavigator({
  Screen1: {
    screen: Screen1
  },
  Screen2: {
    screen: Screen2
  }
});

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
