import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { colors, sizes } from "../constants/theme";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";

const OrderDetails = () => {
  const { fontScale } = useWindowDimensions();
  const navigation = useNavigation();
  const [location, setLocation] = useState({
    latitude: 24.926295,
    latitudeDelta: 0.04166,
    longitude: 67.130499,
    longitudeDelta: 0.0456,
  });
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={[styles.header, { height: "12.5%" }]}>
        <View style={styles.headerTitle}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons name="arrow-back" size={30} color="black" />
          </TouchableOpacity>

          <Text
            style={{
              color: colors.textPrimary,
              fontWeight: sizes.bold,
              fontSize: 18 / fontScale,
            }}
          >
            Order Detail
          </Text>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity style={{ height: 30, width: 30 }} />
          </View>
        </View>
      </View>

      {/* Map  */}

      <MapView
        provider={PROVIDER_GOOGLE}
        style={{ height: "45%", width: "100%" }}
        initialRegion={location}
        region={location}
      />

      <View style={{ padding: 14 }}>
        <View style={{ marginBottom: 14 }}>
          <Text
            style={{
              fontWeight: sizes.semiBold,
              fontSize: 18 / fontScale,
              color: colors.textPrimary,
              marginBottom: 7,
            }}
          >
            Housekeeping & cleaning service
          </Text>
          <Text
            style={{
              fontWeight: "500",
              fontSize: 14 / fontScale,
              color: "rgba(19, 26, 46, 0.5)",
            }}
          >
            Arteriovenous anastomosis, open; by forearm vein transposition ...
          </Text>
        </View>

        <View
          style={{
            borderBottomColor: "#DCDCDC",
            borderBottomWidth: 1,
            borderTopColor: "#DCDCDC",
            borderTopWidth: 1,
            paddingVertical: 18,
            marginHorizontal: 14,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 9,
            }}
          >
            <Text
              style={{
                fontWeight: "500",
                fontSize: 14 / fontScale,
                color: "rgba(19, 26, 46, 0.5)",
              }}
            >
              Delivery Charges
            </Text>
            <Text
              style={{
                fontSize: 14 / fontScale,
                fontWeight: "500",
                color: colors.textPrimary,
              }}
            >
              $8.99
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 9,
            }}
          >
            <Text
              style={{
                fontWeight: "500",
                fontSize: 14 / fontScale,
                color: "rgba(19, 26, 46, 0.5)",
              }}
            >
              Delivery Charges
            </Text>
            <Text
              style={{
                fontSize: 14 / fontScale,
                fontWeight: "500",
                color: colors.textPrimary,
              }}
            >
              $8.99
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default OrderDetails;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    backgroundColor: "white",
    alignItems: "center",
  },
  headerTitle: {
    marginTop: "10%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 16,
  },
});
