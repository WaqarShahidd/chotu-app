import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "../constants/theme";

const MenuItem = ({ iconName, iconColor, textColor, title }) => {
  const { fontScale } = useWindowDimensions();

  return (
    <TouchableOpacity style={styles.menuButtonContainer}>
      <View style={styles.menuItem}>
        <MaterialIcons name={iconName} size={18} color={iconColor} />
      </View>
      <Text
        style={[
          styles.buttonText,
          {
            fontSize: 15 / fontScale,
            color: textColor,
          },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default MenuItem;

const styles = StyleSheet.create({
  menuButtonContainer: {
    borderColor: colors.grey2,
    borderWidth: 1,
    width: "48%",
    height: 125,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: 14,
    marginRight: 2,
    marginBottom: 12,
    paddingHorizontal: 6,
  },
  menuItem: {
    backgroundColor: "#F3F3F3",
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    fontWeight: "400",
  },
});
