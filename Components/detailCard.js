import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";

const CardDetail = props => {
  return (
    <View style={styles.cardBox} elevation={10}>
      <View style={styles.detail}>
        <View style={styles.detailTopContent}>
          <Text style={styles.merchant}>Shopee</Text>
          <Text style={styles.invoice}>BL-19827</Text>
        </View>
        <View style={styles.detailBottomContent}>
          <View style={styles.detailBottomLeftContent}>
            <Text style={styles.date}>18 Sep 2018, 07.00</Text>
          </View>
          <View style={styles.detailBottomRightContent}>
            <Text style={styles.items}>
              <Text style={styles.totalItem}>3</Text> barang
            </Text>
            <Text style={styles.priceTag}>Rp. 159.000</Text>
          </View>
        </View>
      </View>
      <View style={styles.button}>
        <TouchableOpacity
          style={styles.buttonBayar}
          onPress={() => Alert.alert("Yesss")}
        >
          <Text style={styles.buttonText}>BAYAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardBox: {
    height: 150,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 7
  },
  detail: {
    flex: 1,
    padding: 15
  },
  button: {
    flex: 0.6,
    backgroundColor: "#333333",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
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
    flex: 0.8,
    flexDirection: "row"
  },
  detailBottomRightContent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  merchant: {
    fontFamily: "D-DIN-Bold",
    fontSize: 25,
    color: "#333333"
  },
  invoice: {
    fontFamily: "D-DINCondensed-Bold",
    fontSize: 23
  },
  buttonBayar: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    fontFamily: "D-DINCondensed",
    color: "white",
    fontSize: 23
  },
  date: {
    fontFamily: "D-DIN",
    fontSize: 15,
    color: "#333333"
  },
  items: {
    fontFamily: "D-DIN",
    fontSize: 19
  },
  totalItem: {
    color: "black",
    fontSize: 21
  },
  priceTag: {
    fontFamily: "D-DINCondensed-Bold",
    fontSize: 25,
    color: "#333333"
  }
});

export default CardDetail;
