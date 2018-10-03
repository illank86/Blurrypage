import React, { Component } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";

import MainApp from "./Components/index";
import Navbar from "./Components/navbar";

export default class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#454545" barStyle="light-content" />
        <View style={styles.navbarCont}>
          <Navbar />
        </View>
        <MainApp />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  navbarCont: {
    flex: 0.15,
    width: "100%"
  }
});
