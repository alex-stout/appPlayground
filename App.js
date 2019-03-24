import React from "react";
import { StyleSheet, Text, View, Button, WebView } from "react-native";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Hello"
    };
  }

  handleClick = () => {
    if (this.state.text === "Hello") {
      this.setState({ text: "Goodbye" });
    } else {
      this.setState({ text: "Hello" });
    }
  };

  render() {
    return (
      <WebView
        style={styles.container}
        source={{ uri: "https://ectbustracker.doublemap.com/map/" }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30
  }
});
