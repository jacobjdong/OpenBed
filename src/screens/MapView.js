import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  Text
} from "react-native";
import MaterialMapView from "../components/MaterialMapView";
import HeaderX from "../components/HeaderX";

function MapView(props) {
  return (
    <View style={styles.root}>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="rgba(0,0,0,0)"
      ></StatusBar>
      <View style={styles.tabs1}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("ListView")}
          style={styles.following}
        ></TouchableOpacity>
        <Text style={styles.text}>List View</Text>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("MapView")}
          style={styles.button}
        ></TouchableOpacity>
        <Text style={styles.text3}>Map View</Text>
      </View>
      <MaterialMapView style={styles.materialMapView}></MaterialMapView>
      <HeaderX icon2Name="power" style={styles.headerX}></HeaderX>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgba(255,166,166,1)"
  },
  tabs1: {
    height: 80,
    backgroundColor: "rgba(255,166,166,1)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    elevation: 0,
    shadowOffset: {
      height: 0,
      width: 0
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowRadius: 0,
    marginTop: 100
  },
  following: {
    width: 100,
    height: 38,
    backgroundColor: "rgba(247,247,247,0)",
    alignSelf: "center",
    opacity: 1,
    borderRadius: 5
  },
  text: {
    top: 29,
    left: 101,
    color: "rgba(255,255,255,1)",
    position: "absolute"
  },
  button: {
    width: 100,
    height: 38,
    right: 25,
    backgroundColor: "rgba(247,247,247,0)",
    opacity: 1,
    borderRadius: 5,
    borderColor: "rgba(255,255,255,1)",
    borderWidth: 1
  },
  text3: {
    top: 29,
    left: 255,
    width: 68,
    height: 30,
    color: "rgba(255,255,255,1)",
    position: "absolute"
  },
  materialMapView: {
    height: 600
  },
  headerX: {
    height: 100,
    elevation: 15,
    shadowOffset: {
      height: 7,
      width: 1
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    marginTop: -780
  }
});

export default MapView;
