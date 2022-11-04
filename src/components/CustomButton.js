import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  TouchableOpacity,
} from "react-native";

import { sizes, colors } from "../constants/theme";

const CustomButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.button}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    width: "100%",
    padding: 15,
    marginVertical: 5,
    alignItems: "center",
    borderRadius: 10,
  },
  button: { color: "white", fontSize: 16, fontWeight: sizes.semiBold },
});

export default CustomButton;
