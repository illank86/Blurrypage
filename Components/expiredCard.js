import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import Svg, { Line } from "react-native-svg";

import TerlambatIcon from "./terlambatIcon";

const CardExpired = props => {
  return (
    <View elevation={10}>
      <Svg height="20" width="100">
        <Line x1="45" y1="45" x2="45" y2="0" stroke="#B91F1F" strokeWidth="5" />
      </Svg>
      <View style={styles.cardBox}>
        <View style={styles.detail}>
          <View style={styles.leftContent}>
            <Text style={styles.xTimes}>2X</Text>
          </View>

          <View style={styles.rightContent}>
            <View style={styles.top}>
              <View style={styles.detailTopContent}>
                <Text style={styles.date}>18 Sep 2018</Text>
                <Text style={styles.pembayaran}>Rp. 150.000</Text>
              </View>
              <View style={styles.detailBottomContent}>
                <View style={styles.detailBottomLeftContent}>
                  <TerlambatIcon />
                </View>
                <View style={styles.detailBottomRightContent}>
                  <Text style={styles.sisaPembayaran}>Sisa pembayaran</Text>
                  <Text style={styles.priceTag}>Rp. 159.000</Text>
                </View>
              </View>
            </View>

            <View style={styles.button}>
              <TouchableOpacity
                style={styles.buttonBayar}
                onPress={() => Alert.alert("No money, :)")}
              >
                <Text style={styles.buttonText}>SEGERA BAYAR</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardBox: {
    height: 120,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "white",
    backgroundColor: "transparent",
    borderRadius: 8,
    borderWidth: 3,
    borderColor: "#B91F1F",
    borderRightColor: "#B91F1F"
  },
  detail: {
    flex: 1,
    flexDirection: "row"
  },
  top: {
    flex: 1,
    paddingRight: 15,
    paddingLeft: 15
  },
  rightContent: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8
  },
  leftContent: {
    flex: 0.15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#B91F1F"
  },
  button: {
    flex: 0.4
  },
  detailTopContent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  detailBottomContent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  detailBottomLeftContent: {
    flex: 0.6,
    flexDirection: "row"
  },
  detailBottomRightContent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  xTimes: {
    fontFamily: "D-DIN",
    fontSize: 20,
    color: "white"
  },
  merchant: {
    fontFamily: "D-DIN-Bold",
    fontSize: 25,
    color: "#333333"
  },
  pembayaran: {
    fontFamily: "D-DINCondensed-Bold",
    fontSize: 23
  },
  buttonBayar: {
    flex: 1,
    backgroundColor: "#333333",
    justifyContent: "center",
    alignItems: "center",
    borderBottomRightRadius: 6
  },
  buttonText: {
    fontFamily: "D-DINCondensed",
    color: "white",
    fontSize: 21
  },
  date: {
    fontFamily: "D-DIN",
    fontSize: 15,
    color: "#333333"
  },
  sisaPembayaran: {
    fontFamily: "D-DIN",
    fontSize: 13
  },
  totalItem: {
    color: "black",
    fontSize: 21
  },
  priceTag: {
    fontFamily: "D-DINCondensed",
    fontSize: 19,
    color: "#333333"
  }
});

export default CardExpired;
