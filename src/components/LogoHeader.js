import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function LogoHeader(props) {
  return (
    <View style={[styles.root, props.style]}>
      <Text style={styles.text5}>openbed</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {},
  text5: {
    color: "rgba(255,255,255,1)",
    fontSize: 36,
    marginLeft: 35
  }
});

export default LogoHeader;
