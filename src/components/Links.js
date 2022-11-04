import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { colors } from "../constants/theme";

const Links = ({ text, marginTop, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, { marginTop: marginTop }]}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    textDecorationLine: "underline",
    fontSize: 15,
    color: colors.primary,
  },
  container: {
    justifyContent: "center",
  },
});

export default Links;
