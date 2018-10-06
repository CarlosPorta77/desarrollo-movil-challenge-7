import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createStackNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation";
import Screen1 from "./Screen1";
import Screen2 from "./Screen2";
import Screen3 from "./Screen3";

const RootStack = createStackNavigator({
  Screen1: {
    screen: Screen1
  },
  Screen2: {
    screen: Screen2
  }
});

const RootStackTab = createBottomTabNavigator(
  {
    Screen1: {
      screen: Screen1
    },
    Screen2: {
      screen: Screen2
    },
    Screen3: {
      screen: Screen3
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Screen1") {
          iconName = `ios-information-circle${focused ? "" : "-outline"}`;
        } else if (routeName === "Screen3") {
          iconName = `ios-analytics${focused ? "" : "-outline"}`;
        } else if (routeName === "Screen2") {
          iconName = `ios-options${focused ? "" : "-outline"}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return (
          <Ionicons
            name={iconName}
            size={horizontal ? 20 : 25}
            color={tintColor}
          />
        );
      }
    }),
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray"
    }
  }
);

export default class App extends React.Component {
  render() {
    return <RootStackTab />;
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
