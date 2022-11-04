import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MapView from "react-native-maps";
import Login from "./src/Auth/Login";
import CustomButton from "./src/components/CustomButton";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { sizes } from "./src/constants/theme";
import Main from "./src/navigation/Main";
import Maps from "./src/UserModule/Maps";

const Stack = createNativeStackNavigator();

export default function App() {
  return <Main />;
}

const styles = StyleSheet.create({});
