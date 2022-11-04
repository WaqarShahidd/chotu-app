import {
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import Links from "../components/Links";
import {
  Feather,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { colors, sizes } from "../constants/theme";

const Login = ({ navigation }) => {
  const { fontScale } = useWindowDimensions();

  const { height, width } = useWindowDimensions();

  const [phone, setphone] = useState("");
  const [password, setpassword] = useState("");

  const [secure, setSecure] = useState({
    secureTextEntry: true,
  });

  const updateSecureTextEntry = () => {
    setSecure({
      secureTextEntry: !secure.secureTextEntry,
    });
  };

  const onSignInPressed = () => {};

  return (
    <View style={[styles.container, { marginTop: "4%" }]}>
      <View
        style={{
          alignItems: "center",
          flex: 1,
        }}
      >
        {/* <Image
            source={require("../../assets/PorterLogoColored.png")}
            style={[styles.logo, { height: height * 0.1, marginBottom: 25 }]}
            resizeMode="contain"
          /> */}
        <View
          style={{
            marginBottom: 20,
            height: height * 0.1,
            width: width * 0.75,
          }}
        >
          <Text style={styles.title}>Sign In</Text>
          <Text
            style={{
              fontSize: 14 / fontScale,
              textAlign: "center",
              color: "#9B9B9B",
            }}
          >
            We've already met
          </Text>
        </View>
        {/* {error && (
            <View
              style={{
                height: 50,
                width: "100%",
                flexDirection: "row",
                backgroundColor: "#FFD8D8",
                paddingHorizontal: 15,
                marginVertical: 10,
                borderRadius: 12,
                alignItems: "center",
              }}
            >
              <FontAwesome5 name="info-circle" size={24} color="red" />
              <Text style={{ color: "red", paddingHorizontal: 12 }}>
                Phone or Email or Password did not match.
              </Text>
            </View>
          )} */}

        <View style={styles.textInput}>
          <MaterialCommunityIcons
            name="phone-outline"
            size={20}
            color="black"
          />
          <CustomInput
            placeholder="Phone"
            value={phone}
            setValue={setphone}
            onChangeText={(text) => setphone(text)}
            autoCapitalize={"none"}
          />
        </View>

        <View style={styles.textInput}>
          <Feather name="lock" size={20} color="black" />
          <CustomInput
            placeholder="Password"
            value={password}
            setValue={setpassword}
            onChangeText={(text) => setpassword(text)}
            secureTextEntry={secure.secureTextEntry ? true : false}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {secure.secureTextEntry ? (
              <Feather name="eye-off" size={20} color="black" />
            ) : (
              <Feather name="eye" size={20} color="black" />
            )}
          </TouchableOpacity>
        </View>

        <Links
          onPress={() => Alert.alert("ForgotPassword")}
          marginTop={15}
          text="Forgot Password?"
        />
      </View>

      <View
        style={{
          alignItems: "center",
          flex: 1,
          justifyContent: "flex-end",
        }}
      >
        <CustomButton
          onPress={() => navigation.navigate("MapScreen")}
          title="Sign In"
        />

        <View
          style={{
            marginTop: 15,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Text style={{ fontSize: 15 / fontScale }}>
            Don't have an account?
          </Text>
          <Links onPress={() => console.log("s")} text=" SignUp" />
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
  },
  logo: {
    width: "70%",
    maxWidth: 166,
    maxHeight: 252,
  },
  title: {
    fontWeight: "700",
    fontSize: 34,
    color: "#3B3B3B",
    textAlign: "center",
    paddingBottom: 8,
  },
  bottomContainer: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    marginBottom: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    width: "100%",
    flexDirection: "row",
    marginTop: 10,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
    marginVertical: 10,
    borderRadius: 12,
    elevation: 5,
  },
});
