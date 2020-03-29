import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  StatusBar
} from "react-native";
import { Center } from "@builderx/utils";
import MaterialCardWithImageAndTitle2 from "../components/MaterialCardWithImageAndTitle2";
import MaterialCardWithImageAndTitle3 from "../components/MaterialCardWithImageAndTitle3";
import MaterialCardWithImageAndTitle4 from "../components/MaterialCardWithImageAndTitle4";
import MaterialCardWithImageAndTitle5 from "../components/MaterialCardWithImageAndTitle5";
import MaterialCardWithImageAndTitle6 from "../components/MaterialCardWithImageAndTitle6";
import MaterialCardWithImageAndTitle7 from "../components/MaterialCardWithImageAndTitle7";
import HeaderX from "../components/HeaderX";

function ListView(props) {
  return (
    <View style={styles.root}>
      <View style={styles.bodyStack}>
        <Center horizontal>
          <View style={styles.body}>
            <View style={styles.tabs1}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("ListView")}
                style={styles.following}
              ></TouchableOpacity>
              <Text style={styles.text}>List View</Text>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("MapView")}
                style={styles.button5}
              ></TouchableOpacity>
              <Text style={styles.text3}>Map View</Text>
            </View>
            <View style={styles.materialCardWithImageAndTitle2Stack}>
              <MaterialCardWithImageAndTitle2
                style={styles.materialCardWithImageAndTitle2}
              ></MaterialCardWithImageAndTitle2>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("HospitalDetails")}
                style={styles.button2}
              ></TouchableOpacity>
            </View>
            <View style={styles.materialCardWithImageAndTitle3Stack}>
              <MaterialCardWithImageAndTitle3
                style={styles.materialCardWithImageAndTitle3}
              ></MaterialCardWithImageAndTitle3>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("HospitalDetails2")}
                style={styles.button3}
              ></TouchableOpacity>
            </View>
            <View style={styles.materialCardWithImageAndTitle4Stack}>
              <MaterialCardWithImageAndTitle4
                style={styles.materialCardWithImageAndTitle4}
              ></MaterialCardWithImageAndTitle4>
            </View>
            <View style={styles.materialCardWithImageAndTitle4Stack}>
              <MaterialCardWithImageAndTitle5
                style={styles.materialCardWithImageAndTitle4}
              ></MaterialCardWithImageAndTitle5>
            </View>
            <View style={styles.materialCardWithImageAndTitle4Stack}>
              <MaterialCardWithImageAndTitle6
                style={styles.materialCardWithImageAndTitle4}
              ></MaterialCardWithImageAndTitle6>
            </View>
            <View style={styles.materialCardWithImageAndTitle4Stack}>
              <MaterialCardWithImageAndTitle7
                style={styles.materialCardWithImageAndTitle4}
              ></MaterialCardWithImageAndTitle7>
            </View>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Welcome")}
              style={styles.button4}
            >
              <Text style={styles.home1}>Home</Text>
            </TouchableOpacity>
          </View>
        </Center>
        <HeaderX icon2Name="power" style={styles.headerX1}></HeaderX>
      </View>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="rgba(0,0,0,0)"
      ></StatusBar>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgb(255,255,255)"
  },
  body: {
    top: 80,
    width: 410,
    position: "absolute",
    bottom: 0
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
    marginTop: 20
  },
  following: {
    width: 100,
    height: 38,
    backgroundColor: "rgba(247,247,247,0)",
    left: 25,
    opacity: 1,
    borderRadius: 5,
    borderColor: "rgba(255,255,255,1)",
    borderWidth: 1
  },
  text: {
    top: 29,
    left: 101,
    color: "rgba(255,255,255,1)",
    position: "absolute"
  },
  button5: {
    width: 105,
    height: 50,
    backgroundColor: "rgba(247,247,247,0)",
    opacity: 1,
    borderRadius: 5
  },
  text3: {
    top: 29,
    left: 255,
    width: 68,
    height: 30,
    color: "rgba(255,255,255,1)",
    position: "absolute"
  },
  materialCardWithImageAndTitle2: {
    top: 0,
    left: 0,
    height: 141,
    position: "absolute",
    right: 0
  },
  button2: {
    top: 0,
    left: 0,
    height: 141,
    position: "absolute",
    right: 0
  },
  materialCardWithImageAndTitle2Stack: {
    height: 141
  },
  materialCardWithImageAndTitle3: {
    top: 0,
    left: 0,
    height: 142,
    position: "absolute",
    right: 0
  },
  materialCardWithImageAndTitle4: {
    top: 0,
    left: 0,
    height: 142,
    position: "absolute",
    right: 0,
    overflow: 'scroll'
  },
  button3: {
    top: 0,
    left: 0,
    height: 142,
    position: "absolute",
    right: 0
  },
  materialCardWithImageAndTitle3Stack: {
    height: 142
  },
  materialCardWithImageAndTitle4Stack: {
    height: 142
  },
  button4: {
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
  headerX1: {
    top: 0,
    left: 0,
    height: 100,
    position: "absolute",
    right: 0,
    elevation: 15,
    shadowOffset: {
      height: 7,
      width: 1
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.1,
    shadowRadius: 5
  },
  bodyStack: {
    flex: 1
  }
});

export default ListView;
