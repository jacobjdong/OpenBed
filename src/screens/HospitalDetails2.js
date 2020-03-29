import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import MaterialCardWithImageAndTitle3 from "../components/MaterialCardWithImageAndTitle3";
import HeaderX from "../components/HeaderX";

function HospitalDetails2(props) {
  return (
    <View style={styles.container}>
      <MaterialCardWithImageAndTitle3
        style={styles.materialCardWithImageAndTitle1}
      ></MaterialCardWithImageAndTitle3>
      <HeaderX icon2Name="power" style={styles.headerX1}></HeaderX>
      <Text style={styles.text1}>
        - 7 Open Intensive Care Unit Beds{"\n"}
        {"\n"}- 18 Open Non-ICU Beds{"\n"}
        {"\n"}Phone Number: (303) 430 - 5560
      </Text>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Welcome")}
        style={styles.button1}
      >
        <Text style={styles.home1}>Home</Text>
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  materialCardWithImageAndTitle1: {
    height: 140,
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
  button1: {
    width: 132,
    height: 59,
    borderRadius: 25,
    borderColor: "#000000",
    borderWidth: 2,
    marginTop: 189,
    alignSelf: "center"
  },
  home1: {
    width: 81,
    height: 40,
    color: "rgba(0,0,0,1)",
    fontSize: 30,
    fontFamily: "roboto-regular",
    marginTop: 5,
    marginLeft: 24,
    overflow: 'visible'
  },
  text1: {
    color: "#121212",
    fontFamily: "roboto-regular",
    marginTop: 150,
    marginLeft: 18
  }
});

export default HospitalDetails2;
