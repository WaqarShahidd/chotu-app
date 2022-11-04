import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../constants/theme";

const Header = () => {
  return (
    <View
      style={{
        width: "100%",
        height: "20%",
        paddingHorizontal: 14,
      }}
    >
      <View
        style={{
          marginTop: "5%",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <MaterialIcons name="menu" size={30} color="black" />
        <Text style={{ fontSize: 24 }}>Chotu App</Text>
        <MaterialIcons name="search" size={30} color="black" />
      </View>
      <View style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            position: "absolute",
            bottom: 10,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: colors.white,
              width: "49%",
              padding: 15,
              marginVertical: 5,
              alignItems: "center",
              borderRadius: 10,
              borderWidth: 1,
              borderColor: colors.primary,
              elevation: 5,
            }}
          >
            <Text
              style={{
                color: colors.primary,
                fontSize: 16 / fontScale,
                fontWeight: sizes.semiBold,
              }}
            >
              Grocery shops
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: colors.white,
              width: "49%",
              padding: 15,
              marginVertical: 5,
              alignItems: "center",
              borderRadius: 10,
              borderWidth: 1,
              borderColor: colors.borderColor,
              elevation: 0,
            }}
          >
            <Text
              style={{
                color: colors.textPrimary,
                fontSize: 16 / fontScale,
                fontWeight: sizes.semiBold,
              }}
            >
              Services Shops
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: "30%",
    backgroundColor: colors.white,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
