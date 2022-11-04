import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { orderToggle } from "../components/data";
import { colors, sizes } from "../constants/theme";
import { useNavigation } from "@react-navigation/native";

const Orders = () => {
  const [toggle, settoggle] = useState(0);
  const { fontScale } = useWindowDimensions();
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      {/* Header */}
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
            Orders
          </Text>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={{ height: 30, width: 30 }}
            ></TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Toggle Buttons */}
      <View style={{ flex: 1 }}>
        <View style={styles.groupButton}>
          {orderToggle.map((_, index) => {
            return (
              <TouchableOpacity
                onPress={() => settoggle(index)}
                style={[
                  styles.toggleButton,
                  { backgroundColor: toggle === index ? "#fff" : "#F2F2F2" },
                ]}
                key={index}
              >
                <Text
                  style={[styles.groupButtonText, { fontSize: 14 / fontScale }]}
                >
                  {_.title}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <TouchableOpacity
          activeOpacity={0.4}
          onPress={() => navigation.navigate("OrderDetail")}
          style={{
            borderRadius: 12,
            // flex: 1,
            borderBottomWidth: 1,
            borderBottomColor: colors.grey2,
            marginBottom: 12,
            flexDirection: "row",
            marginHorizontal: 20,
            padding: 8,
          }}
        >
          <View
            style={{
              flex: 5,
              padding: 10,
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <View>
              <Text
                style={{
                  fontWeight: "500",
                  fontSize: 16 / fontScale,
                  color: colors.textPrimary,
                  marginBottom: 10,
                }}
              >
                Order # DA9212320
              </Text>
              <Text
                style={{
                  fontWeight: "400",
                  fontSize: 14 / fontScale,
                  color: "rgba(19, 26, 46, 0.5)",
                  marginBottom: 10,
                }}
              >
                Date{" "}
                <Text
                  style={{
                    fontWeight: "500",
                    fontSize: 14 / fontScale,
                    color: colors.textPrimary,
                  }}
                >
                  7 July 2022
                </Text>
              </Text>

              <Text
                style={{
                  fontWeight: "400",
                  fontSize: 14 / fontScale,
                  color: "rgba(19, 26, 46, 0.5)",
                }}
              >
                Payment{" "}
                <Text
                  style={{
                    fontWeight: "500",
                    fontSize: 14 / fontScale,
                    color: colors.textPrimary,
                  }}
                >
                  Bank Transfer
                </Text>
              </Text>
            </View>

            <View>
              <Text
                style={{
                  fontWeight: sizes.semiBold,
                  color: "#03B602",
                  fontSize: 14 / fontScale,
                  marginBottom: 8,
                }}
              >
                $8000
              </Text>
              <Text
                style={{
                  fontWeight: "500",
                  fontSize: 13 / fontScale,
                  fontStyle: "italic",
                }}
              >
                Rider Delivery
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      {/* Toggle Screen */}
    </View>
  );
};

export default Orders;

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
  groupButton: {
    height: "10%",
    backgroundColor: "#F2F2F2",
    borderRadius: 12,
    marginHorizontal: 14,
    padding: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  toggleButton: {
    flex: 1,
    height: "100%",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  groupButtonText: {
    fontWeight: sizes.semiBold,
  },
});
