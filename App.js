import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class App extends React.Component {
  state = {
    arr: ["yo", "dude", "sup", "okay"]
  };
  render() {
    let greetings = this.state.arr.map(greet => {
      return <Text key={greet}>{greet}</Text>;
    });
    return (
      <View style={styles.container}>
        {greetings}
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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
