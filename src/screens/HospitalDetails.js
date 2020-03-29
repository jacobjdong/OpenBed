import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import MaterialCardWithImageAndTitle2 from "../components/MaterialCardWithImageAndTitle2";
import HeaderX from "../components/HeaderX";

function HospitalDetails(props) {
  return (
    <View style={styles.container}>
      <MaterialCardWithImageAndTitle2
        style={styles.materialCardWithImageAndTitle1}
      ></MaterialCardWithImageAndTitle2>
      <HeaderX icon2Name="power" style={styles.headerX1}></HeaderX>
      <Text style={styles.text}>
        - 60 Open Intensive Care Unit Beds{"\n"}
        {"\n"}- 118 Open Non-ICU Beds{"\n"}
        {"\n"}Phone Number: (303) 689 - 4000
      </Text>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Welcome")}
        style={styles.button}
      >
        <Text style={styles.home}>Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  materialCardWithImageAndTitle1: {
    height: 127,
    marginTop: 100
  },
  headerX1: {
    height: 100,
    elevation: 15,
    shadowOffset: {
      height: 7,
      width: 1
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    marginTop: -227
  },
  button: {
    width: 132,
    height: 59,
    borderRadius: 25,
    borderColor: "#000000",
    borderWidth: 2,
    marginTop: 189,
    alignSelf: "center"
  },
  home: {
    width: 81,
    height: 40,
    color: "rgba(0,0,0,1)",
    fontSize: 30,
    fontFamily: "roboto-regular",
    marginTop: 5,
    marginLeft: 24,
    overflow: 'visible'
  },
  text: {
    color: "#121212",
    fontFamily: "roboto-regular",
    marginTop: 150,
    marginLeft: 18
  }
});

export default HospitalDetails;
