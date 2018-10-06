import React from "react";
import { Button, View, Text } from "react-native";

class Screen2 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Screen 2</Text>
        <Button
          title="Ir a Screen1"
          onPress={() => this.props.navigation.navigate("Screen1")}
        />
      </View>
    );
  }
}

export default Screen2;
