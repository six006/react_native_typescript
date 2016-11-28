import React, { Component } from "react";
import { 
    View, 
    Text, 
    StyleSheet 
  } from "react-native";


interface Props {

}

interface State {

}

enum Direction {
  A = 1,
  B,
  C = 2
}

export default class ReactNativeTypeScript extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }


  //greeter: Greeter;
  componentWillMount(): void {
  }

  render() {
    return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
        welcome china
      </Text>
      <Text style={styles.instructions}>
        To get started, edit index.android.js
      </Text>
      <Text style={styles.instructions}>
      Shake or press menu button for dev menu
      </Text>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  } as React.ViewStyle,
  
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  } as React.TextStyle,

  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  } as React.TextStyle,

  helloworld: {
    marginVertical: 15,
  } as React.ViewStyle,
});