import React from "react";
import { Text, StyleSheet, View } from "react-native";
import CardExpired from "./expiredCard";
import SimpleCard from "./simpleCard";

const JoinCard = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.introText}>
        Lorem Ipsum del Horaro main jailangkung, Lorem Ipsum del Horaro main
        jailangkung
      </Text>
      <SimpleCard />
      <CardExpired />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center"
  },
  introText: {
    alignSelf: "center",
    color: "white",
    fontFamily: "D-DIN",
    fontSize: 16,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10
  }
});

export default JoinCard;
