import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  FlatList,
  ActivityIndicator
} from "react-native";
import moment from "moment";
import ViewShot, { releaseCapture } from "react-native-view-shot";
import JoinCard from "./joinCards";
import CardDetail from "./detailCard";

export default class MainApp extends Component {
  constructor() {
    super();

    this.state = {
      data: [],
      modalVisible: false,
      image: "image"
    };
  }

  onImageLoad = () => {
    //this will capture the Flatlist view and put it in <Imagebackground /> and make it blurry
    this.refs.viewShot.capture().then(uri => {
      this.setState({ image: uri, modalVisible: !this.state.modalVisible });
    });
  };

  _Loading = () => {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  };

  async componentDidMount() {
    const response = await fetch("http://illank.getsandbox.com/all");
    const data = await response.json();
    await this.setState({ data });
    //mapping date state for checking expired status
    const today = moment();
    this.state.data.map(el => {
      //compare the date with current date(today)
      const dateExpired = moment(el.expire, "DD MMMM YYYY");
      //check expired date if its exist
      if (moment(dateExpired).isSameOrBefore(today)) {
        //call blurry view
        return this.onImageLoad();
      }
    });
  }

  render() {
    if (this.state.data.length === 0) {
      return this._Loading();
    } else {
      return (
        <View style={styles.container}>
          {this.state.modalVisible ? (
            <ImageBackground
              source={{ uri: this.state.image }}
              style={[styles.listCont, { justifyContent: "center" }]}
              resizeMode="contain"
              blurRadius={5}
            >
              <View style={styles.overlay} />
              <JoinCard />
            </ImageBackground>
          ) : (
            <ViewShot ref="viewShot" style={styles.listCont}>
              <FlatList
                style={{ flex: 1 }}
                data={this.state.data}
                renderItem={items => <CardDetail />}
                keyExtractor={(data, index) => index.toString()}
              />
            </ViewShot>
          )}
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EEEEEE"
  },
  navbarCont: {
    flex: 0.15,
    width: "100%"
  },
  listCont: {
    flex: 1,
    width: "100%"
  },
  texts: {
    fontFamily: "D-DINCondensed-Bold",
    fontSize: 20,
    color: "black"
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.5)"
  }
});
