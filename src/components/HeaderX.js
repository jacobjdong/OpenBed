import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import LogoHeader from "./LogoHeader";

function HeaderX(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.group}>
        <View style={styles.iconStack}>
          <MaterialIconsIcon
            name="refresh"
            style={styles.icon}
          ></MaterialIconsIcon>
          <TouchableOpacity
            onPress={() => console.log("Navigate to ListView")}
            style={styles.button}
          ></TouchableOpacity>
        </View>
        <LogoHeader style={styles.logoHeader}></LogoHeader>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255,166,166,1)"
  },
  group: {
    height: 55,
    backgroundColor: "rgba(255,166,166,1)",
    flexDirection: "row",
    marginTop: 25
  },
  icon: {
    color: "rgba(255,255,255,1)",
    fontSize: 50,
    width: 54,
    position: "absolute",
    left: 0,
    height: 53,
    top: 0
  },
  button: {
    top: 0,
    left: 12,
    width: 31,
    height: 37,
    position: "absolute"
  },
  iconStack: {
    width: 54,
    height: 53,
    marginLeft: 17
  },
  logoHeader: {
    marginLeft: 34
  },
  button2: {
    top: 0,
    left: 0,
    width: 42,
    height: 37,
    position: "absolute"
  },
  icon1: {
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    width: 54,
    position: "absolute",
    left: 0,
    height: 53,
    top: 0
  },
  button2Stack: {
    width: 54,
    height: 53,
    marginLeft: 179
  }
});

export default HeaderX;
