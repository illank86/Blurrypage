import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SmallIcon = props => {
  return (
    <View style={styles.smallIcon}>
      <Text style={styles.howMany}>{props.times}X</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  smallIcon: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 22,
    width: 22,
    borderRadius: 5,
    backgroundColor: "#B91F1F"
  },
  howMany: {
    fontSize: 13,
    color: "white"
  }
});

export default SmallIcon;
