import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { colors, sizes } from "../constants/theme";
import Links from "../components/Links";
import MenuItem from "../components/MenuItem";

const Menu = () => {
  const { fontScale } = useWindowDimensions();
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <View style={styles.header}>
        <View style={styles.headerTitle}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons name="arrow-back" size={30} color="black" />
          </TouchableOpacity>

          <Text style={[styles.title, { fontSize: 16 / fontScale }]}>Menu</Text>
          <TouchableOpacity style={{ height: 30, width: 30 }}>
            {/* <MaterialIcons name="search" size={30} color="black" /> */}
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView contentContainerStyle={{ paddingTop: 0 }}>
        <View
          style={{
            //   width: "100%",
            height: "10%",
            margin: "6%",
            marginTop: "10%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 22,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              overflow: "hidden",
            }}
          >
            <View
              style={{
                width: 100,
                height: 100,
                marginRight: 12,
              }}
            >
              <Image
                source={require("../../assets/pf.png")}
                style={{
                  height: 100,
                  width: 100,
                  borderRadius: 16,
                }}
              />
            </View>
            <View style={{ padding: 9 }}>
              <Text
                style={{
                  fontWeight: sizes.bold,
                  fontSize: 16 / fontScale,
                  marginBottom: 2,
                }}
              >
                Waqar
              </Text>
              <Text
                style={[
                  styles.subTitle,
                  {
                    fontStyle: "normal",
                    color: "rgba(19, 26, 46, 0.5)",
                    maxWidth: "85%",
                  },
                ]}
              >
                @waqar7
              </Text>
              <Links
                text={"Edit Profile"}
                marginTop={7}
                onPress={() => {
                  console.log("first");
                }}
              />
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            marginTop: 15,
            margin: 25,
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("Orders")}
            style={styles.menuButtonContainer}
          >
            <View style={styles.menuItem}>
              <MaterialIcons
                name="receipt"
                size={18}
                color={colors.textPrimary}
              />
            </View>
            <Text
              style={[
                styles.buttonText,
                {
                  fontSize: 15 / fontScale,
                },
              ]}
            >
              My Orders
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("Cart")}
            style={styles.menuButtonContainer}
          >
            <View style={styles.menuItem}>
              <MaterialIcons
                name="shopping-cart"
                size={18}
                color={colors.textPrimary}
              />
            </View>
            <Text
              style={[
                styles.buttonText,
                {
                  fontSize: 15 / fontScale,
                },
              ]}
            >
              My Cart
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuButtonContainer}>
            <View style={styles.menuItem}>
              <MaterialIcons
                name="inventory"
                size={18}
                color={colors.textPrimary}
              />
            </View>
            <Text
              style={[
                styles.buttonText,
                {
                  fontSize: 15 / fontScale,
                },
              ]}
            >
              Packages
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuButtonContainer}>
            <View style={styles.menuItem}>
              <MaterialCommunityIcons
                name="wallet-outline"
                size={18}
                color={colors.textPrimary}
              />
            </View>
            <Text
              style={[
                styles.buttonText,
                {
                  fontSize: 15 / fontScale,
                },
              ]}
            >
              My Wallet
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuButtonContainer}>
            <View style={styles.menuItem}>
              <MaterialIcons
                name="qr-code-scanner"
                size={18}
                color={colors.textPrimary}
              />
            </View>
            <Text
              style={[
                styles.buttonText,
                {
                  fontSize: 15 / fontScale,
                },
              ]}
            >
              Vouchers{" "}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuButtonContainer}>
            <View style={styles.menuItem}>
              <MaterialCommunityIcons
                name="form-textbox-password"
                size={18}
                color={colors.textPrimary}
              />
            </View>
            <Text
              style={[
                styles.buttonText,
                {
                  fontSize: 15 / fontScale,
                },
              ]}
            >
              Change Password
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuButtonContainer}>
            <View style={styles.menuItem}>
              <MaterialIcons
                name="support-agent"
                size={18}
                color={colors.textPrimary}
              />
            </View>
            <Text
              style={[
                styles.buttonText,
                {
                  fontSize: 15 / fontScale,
                },
              ]}
            >
              Call support
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuButtonContainer}>
            <View style={styles.menuItem}>
              <MaterialIcons
                name="contact-support"
                size={18}
                color={colors.textPrimary}
              />
            </View>
            <Text
              style={[
                styles.buttonText,
                {
                  fontSize: 15 / fontScale,
                },
              ]}
            >
              Help/Live support
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuButtonContainer}>
            <View style={styles.menuItem}>
              <MaterialIcons
                name="wysiwyg"
                size={18}
                color={colors.textPrimary}
              />
            </View>
            <Text
              style={[
                styles.buttonText,
                {
                  fontSize: 15 / fontScale,
                },
              ]}
            >
              Terms and Condition
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuButtonContainer}>
            <View style={styles.menuItem}>
              <MaterialIcons
                name="logout"
                size={18}
                color={colors.textPrimary}
              />
            </View>
            <Text
              style={[
                styles.buttonText,
                {
                  fontSize: 15 / fontScale,
                },
              ]}
            >
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    backgroundColor: "white",
    height: "12.5%",
    alignItems: "center",
    borderBottomColor: colors.grey2,
    borderBottomWidth: 1,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0.5 },
    shadowOpacity: 0.25,
    shadowRadius: 2,
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
    marginBottom: 12.5,
    fontStyle: "italic",
  },
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
    color: colors.textPrimary,
  },
});
