import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import React, { useState } from "react";
import { colors, sizes } from "../constants/theme";
import { payment, shopCartData } from "../components/data";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const Cart = () => {
  const { fontScale } = useWindowDimensions();
  const [showMore, setshowMore] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const [paymentMethod, setpaymentMethod] = useState(1);

  const handlePaymentToggle = (id) => {
    setpaymentMethod(id);
  };
  return (
    <View
      style={{
        flex: 1,
        marginTop: "5%",
        backgroundColor: "white",
      }}
    >
      <View style={{ paddingHorizontal: 20, marginVertical: 25 }}>
        <Text
          style={{
            color: colors.textPrimary,
            fontWeight: "700",
            fontSize: 18 / fontScale,
          }}
        >
          Cart
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        {shopCartData.map((shop, index) => {
          return (
            <TouchableOpacity
              key={index}
              activeOpacity={0.8}
              onPress={() => {
                setshowMore(!showMore);
                setCurrentIndex(shop.id === currentIndex ? null : shop.id);
              }}
              style={{
                flex: 1,
                backgroundColor: "#F4F4F4",
                marginHorizontal: 15,
                borderRadius: 12,
                justifyContent: "center",
                paddingHorizontal: 10,
                height: 55,
                marginBottom: 15,
              }}
            >
              <View style={{ flex: 1 }}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    flex: 1,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      source={shop.image}
                      style={{
                        height: 35,
                        width: 35,
                        borderRadius: 35 / 2,
                      }}
                    />
                    <Text
                      style={{
                        fontWeight: sizes.semiBold,
                        fontSize: 16 / fontScale,
                        color: colors.textPrimary,
                        marginLeft: 7.5,
                      }}
                    >
                      {shop.name}
                    </Text>
                  </View>
                  <View
                    style={{ justifyContent: "center", alignItems: "center" }}
                  >
                    <MaterialIcons
                      name={showMore ? "arrow-drop-up" : "arrow-drop-down"}
                      size={28}
                      color="black"
                    />
                  </View>
                </View>
                {shop.id === currentIndex && showMore && (
                  <View style={{ marginTop: 0 }}>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        paddingHorizontal: 45,
                        paddingBottom: 15,
                      }}
                    >
                      <Text
                        style={{
                          fontWeight: "700",
                          fontSize: 16 / fontScale,
                          color: colors.textPrimary,
                        }}
                      >
                        Total
                      </Text>
                      <Text style={{ color: colors.primary }}>7000PKR</Text>
                    </View>
                  </View>
                )}
              </View>
            </TouchableOpacity>
          );
        })}
      </View>

      <View style={{ flex: 1, justifyContent: "flex-end", marginBottom: 10 }}>
        <View
          style={{
            marginBottom: 30,
            marginHorizontal: 30,
            paddingVertical: 20,
            borderBottomWidth: 0.5,
            borderBottomColor: "#DCDCDC",
            borderTopColor: "#DCDCDC",
            borderTopWidth: 0.5,
          }}
        >
          {payment.map((item, i) => {
            return (
              <TouchableOpacity
                key={item.key}
                onPress={() => handlePaymentToggle(i + 1)}
                style={{
                  width: "100%",
                  //   height: 50,
                  margin: 5,
                  borderRadius: 10,
                  flexDirection: "row",
                  alignItems: "center",
                  paddingLeft: 5,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "flex-start",
                  }}
                >
                  <Ionicons
                    name={
                      item.key === paymentMethod
                        ? "radio-button-on"
                        : "radio-button-off"
                    }
                    size={15}
                    color={item.key === paymentMethod ? colors.primary : "#000"}
                  />
                </View>
                <Text
                  style={{
                    color:
                      item.key === paymentMethod
                        ? colors.textPrimary
                        : colors.textSecondary,
                    fontSize: 16 / fontScale,
                    fontWeight: sizes.semiBold,
                    paddingLeft: 8,
                  }}
                >
                  {item.title}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 5,
            // paddingBottom: 15,
            borderBottomWidth: 0.5,
            borderBottomColor: "#DCDCDC",
            marginHorizontal: 30,
            paddingVertical: 20,
          }}
        >
          <Text
            style={{
              fontWeight: "700",
              fontSize: 16 / fontScale,
              color: colors.textPrimary,
            }}
          >
            Total:
          </Text>
          <Text style={{ color: colors.primary }}>7000PKR</Text>
        </View>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({});
