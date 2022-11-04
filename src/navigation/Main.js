import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Maps from "../UserModule/Maps";
import Test from "./Test";
import Login from "../Auth/Login";
import Start from "../UserModule/Start";
import MapScreen from "../UserModule/MapScreen";
import ShopScreen from "../UserModule/ShopScreen";
import ChatScreen from "../UserModule/ChatScreen";
import ServiceScreen from "../UserModule/ServiceScreen";
import Menu from "../UserModule/Menu";
import RiderMap from "../RiderModule/RiderMap";
import ChatWithRider from "../RiderModule/ChatWithRider";
import Cart from "../UserModule/Cart";
import Orders from "../UserModule/Orders";
import OrderDetails from "../UserModule/OrderDetails";

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          gestureDirection: "horizontal",
        }}
      >
        <Stack.Screen name="MapScreen" component={MapScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Maps" component={Maps} />
        <Stack.Screen name="ShopScreen" component={ShopScreen} />
        <Stack.Screen name="ServiceScreen" component={ServiceScreen} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
        <Stack.Screen name="Test" component={Test} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="RiderMap" component={RiderMap} />
        <Stack.Screen name="ChatWithRider" component={ChatWithRider} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Orders" component={Orders} />
        <Stack.Screen name="OrderDetail" component={OrderDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;

const styles = StyleSheet.create({});
