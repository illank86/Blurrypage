import React from "react";
import LinearGradient from "react-native-linear-gradient";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import { StyleSheet, Text, View, Alert } from "react-native";

const Navbar = props => {
  return (
    <LinearGradient colors={["#454545", "#171717"]} style={styles.navCont}>
      <View style={styles.topRow}>
        <MaterialIcon
          name="center-focus-weak"
          size={30}
          color="white"
          onPress={() => Alert.alert("What a beautiful day!")}
        />
        <Text style={styles.brandText}>
          4X
          {"    "}E M P A T {"  "} K A L I
        </Text>
        <MaterialIcon name="notifications-none" size={30} color="white" />
      </View>
      <View style={styles.bottomRow}>
        <Text style={styles.menuText}>FOR YOU</Text>
        <Text style={[styles.menuText, styles.activeMenu]}>YOUR PAYMENT</Text>
        <Text style={styles.menuText}>ABOUT YOU</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  navCont: {
    flex: 1,
    height: 100,
    paddingTop: 15
  },
  topRow: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10
  },
  bottomRow: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingLeft: 10,
    paddingRight: 10
  },
  brandText: {
    color: "white",
    fontSize: 17,
    fontFamily: "D-DINCondensed"
  },
  activeMenu: {
    color: "white"
  },
  menuText: {
    color: "#999999",
    fontSize: 22,
    fontFamily: "D-DINCondensed"
  }
});
export default Navbar;
