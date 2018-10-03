import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SmallIcon from "./smallIcon";

const SimpleCard = props => {
  return (
    <View style={styles.detailCont} elevation={10}>
      <View style={styles.topDetail}>
        <Text style={styles.storeText}>Tokopedia</Text>
        <Text style={styles.codeText}>FJS-28473403947G3H8</Text>
      </View>
      <View style={styles.bottomDetail}>
        <View style={styles.icon}>
          <Text style={styles.date}>09.06</Text>
          <SmallIcon times={2} />
        </View>
        <View style={styles.Item}>
          <Text style={styles.totalItem}>12</Text>
          <Text style={styles.pieces}>barang</Text>
          <Text style={styles.priceTag}>
            Rp. {"1450000".substr(0, "1450000".length - 3)}
            <Text style={styles.lastThreeDigit}>{"1450000".substr(-3)}</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  detailCont: {
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "white",
    height: 80,
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 15,
    paddingRight: 15,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    borderRadius: 8,
    borderWidth: 3,
    borderColor: "#B91F1F"
  },
  topDetail: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 30
  },
  bottomDetail: {
    flex: 1,
    flexDirection: "row"
  },
  storeText: {
    fontFamily: "D-DIN",
    fontSize: 21,
    color: "black"
  },
  codeText: {
    fontFamily: "D-DINCondensed",
    fontSize: 21
  },
  icon: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  Item: {
    flexDirection: "row",
    alignItems: "center"
  },
  totalItem: {
    fontFamily: "D-DIN",
    fontSize: 18,
    color: "black"
  },
  pieces: {
    fontFamily: "D-DIN",
    fontSize: 18,
    marginLeft: 5
  },
  priceTag: {
    fontFamily: "D-DINCondensed-Bold",
    fontSize: 25,
    marginLeft: 20
  },
  lastThreeDigit: {
    fontSize: 19
  },
  date: {
    fontFamily: "D-DIN",
    fontSize: 15,
    marginRight: 10
  }
});
export default SimpleCard;
