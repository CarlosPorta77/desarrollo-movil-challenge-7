import React from "react";
import { Button, View, Text } from "react-native";

class Screen3 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Screen 3</Text>
        <Button
          title="Ir a Screen1"
          onPress={() => this.props.navigation.navigate("Screen1")}
        />
      </View>
    );
  }
}

export default Screen3;
