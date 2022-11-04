import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { colors, sizes } from "../constants/theme";
import Rating from "../components/Rating";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";

const ShopScreen = () => {
  const { fontScale } = useWindowDimensions();
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <View style={styles.headerTitle}>
          <TouchableOpacity onPress={() => navigation.navigate("Menu")}>
            <MaterialIcons name="menu" size={30} color="black" />
          </TouchableOpacity>

          <Text style={[styles.title, { fontSize: 16 / fontScale }]}>Shop</Text>
          <TouchableOpacity style={{ height: 30, width: 30 }}>
            {/* <MaterialIcons name="search" size={30} color="black" /> */}
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          flex: 1,
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{
            height: "40%",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 15,
          }}
        >
          <View style={{ height: "75%", width: "100%" }}>
            <Image
              source={require("../../assets/shopCover.png")}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 14,
                // resizeMode: "contain",
              }}
            />
          </View>

          <Image
            source={require("../../assets/pf.png")}
            style={{
              height: 100,
              width: 100,
              borderRadius: 50,
              position: "absolute",
              zIndex: 1,
              bottom: 0,
              left: 10,
            }}
          />
        </View>
        <View
          style={{
            paddingHorizontal: 10,
            paddingTop: "2%",
          }}
        >
          <Text
            style={{
              color: colors.textPrimary,
              fontWeight: sizes.bold,
              fontSize: 28 / fontScale,
            }}
          >
            Rosario
          </Text>
          <View style={{ flexDirection: "row", paddingTop: 2 }}>
            <Rating rating={4} />
            <Text
              style={[
                styles.subTitle,
                { fontSize: 16 / fontScale, marginLeft: 8 },
              ]}
            >
              4.5 Rating
            </Text>
          </View>

          <View style={{ marginTop: 0 }}>
            {/* <Text
              style={{
                fontSize: 14 / fontScale,
                color: colors.textThree,
                marginTop: 5,
                fontWeight: sizes.semiBold,
              }}
            >
              Shop Type:
            </Text> */}
            <Text
              style={{
                fontSize: 16 / fontScale,
                color: colors.primary,
                marginBottom: 10,
                marginTop: 4,
                fontWeight: sizes.semiBold,
              }}
            >
              • Groceries
            </Text>
            <Text
              style={[
                styles.subTitle,
                { fontStyle: "normal", color: colors.textThree },
              ]}
            >
              This is description This is description This is description This
              is description This is description This is description
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          height: "12.5%",
          justifyContent: "center",
          backgroundColor: colors.grey2,
          elevation: 15,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 7 },
          shadowOpacity: 0.5,
          shadowRadius: 7,
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5,

          paddingHorizontal: 20,
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                width: 45,
                height: 45,
                marginRight: 12,
              }}
            >
              <Image
                source={require("../../assets/pf.png")}
                style={{
                  height: 45,
                  width: 45,
                  borderRadius: 45 / 2,
                }}
              />
            </View>
            <View>
              <Text
                style={{
                  fontWeight: sizes.bold,
                  fontSize: 18 / fontScale,
                  marginBottom: 8,
                }}
              >
                Contact to shop owner
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Rating rating={4} />
                <Text
                  style={[
                    styles.subTitle,
                    { fontSize: 16 / fontScale, marginLeft: 8 },
                  ]}
                >
                  4.5 Rating
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              height: "90%",
              width: 1,
              borderWidth: 1,
              borderColor: "#DDDDDD",
            }}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate("ChatScreen")}
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginRight: 5,
            }}
          >
            <MaterialCommunityIcons
              name="message-text-outline"
              size={30}
              color={colors.primary}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ShopScreen;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    backgroundColor: "white",
    height: "12.5%",
    alignItems: "center",
  },
  headerTitle: {
    marginTop: "10%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20,
  },
  title: {
    fontWeight: sizes.bold,
    color: colors.textPrimary,
  },
  subTitle: {
    fontWeight: "400",
    color: colors.textSecondary,

    fontStyle: "italic",
  },
});
