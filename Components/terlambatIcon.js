import React from "react";
import { StyleSheet, Text, View } from "react-native";

const TerlambatIcon = props => {
  return (
    <View style={styles.iconBox}>
      <Text style={styles.iconText}>TERLAMBAT</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconBox: {
    borderRadius: 6,
    backgroundColor: "#B91F1F"
  },
  iconText: {
    color: "white",
    fontSize: 13,
    fontFamily: "D-DIN",
    padding: 6
  }
});

export default TerlambatIcon;
