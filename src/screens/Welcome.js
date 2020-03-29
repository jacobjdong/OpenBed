import React, { Component } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";

function Welcome(props) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/openbed1.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
      <View style={styles.enterStack}>
        <Text style={styles.enter}>Enter</Text>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("MapView")}
          style={styles.button}
        ></TouchableOpacity>
      </View>
      <Text style={styles.welcomeToOpenbed}>Welcome to Openbed</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255,166,166,1)"
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 290,
    alignSelf: "center"
  },
  enter: {
    top: 2,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    justifyContent: "center",
    fontSize: 50,
    fontFamily: "roboto-regular",
    left: 52
  },
  button: {
    top: 0,
    left: 25,
    width: 170,
    height: 73,
    position: "absolute",
    borderRadius: 25,
    borderColor: "rgba(255,255,255,1)",
    borderWidth: 2
  },
  enterStack: {
    width: 170,
    height: 73,
    marginTop: 43,
    marginLeft: 95
  },
  welcomeToOpenbed: {
    color: "rgba(255,255,255,1)",
    fontSize: 50,
    fontFamily: "roboto-regular",
    textAlign: "center",
    marginTop: -495
  }
});

export default Welcome;
