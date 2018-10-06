import React from "react";
import { Button, View, Text } from "react-native";
import { createStackNavigator } from "react-navigation";

class Screen1 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Screen 1</Text>
        <Button
          title="Ir a Screen2"
          onPress={() => this.props.navigation.navigate("Screen2")}
        />
      </View>
    );
  }
}

export default Screen1;
