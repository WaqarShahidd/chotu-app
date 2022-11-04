import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { colors, sizes } from "../constants/theme";
import * as Location from "expo-location";
import CustomButton from "../components/CustomButton";

const markers = [
  {
    title: "Super Store",
    latitude: 24.9190052,
    longitude: 67.1273316,
    latitudeDelta: 0.007166,
    longitudeDelta: 0.007956,
  },
  {
    title: "Super Store",
    latitude: 24.948582,
    longitude: 67.1152422,
    latitudeDelta: 0.007166,
    longitudeDelta: 0.007956,
  },
  {
    title: "Super Store",
    latitude: 24.9265682,
    longitude: 67.1436422,
    latitudeDelta: 0.007166,
    longitudeDelta: 0.007956,
  },
  {
    title: "Super Store",
    latitude: 24.9558582,
    longitude: 67.1274562,
    latitudeDelta: 0.007166,
    longitudeDelta: 0.007956,
  },
  {
    title: "Super Store",
    latitude: 24.9153452,
    longitude: 67.1152422,
    latitudeDelta: 0.007166,
    longitudeDelta: 0.007956,
  },
];

const Maps = () => {
  const [location, setLocation] = useState({
    latitude: 24.9389,
    latitudeDelta: 0.007166,
    longitude: 67.1237,
    longitudeDelta: 0.007956,
  });

  const getLocation = async () => {
    try {
      const { granted } = await Location.requestForegroundPermissionsAsync();
      if (!granted) return;
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      setLocation({
        latitude,
        longitude,
        latitudeDelta: 0.007166,
        longitudeDelta: 0.007956,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <View style={styles.container}>
      <View style={{ position: "absolute", top: 0, zIndex: 999 }}>
        <Headers />
      </View>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{ width: sizes.width, height: sizes.height }}
        region={{
          latitude: 24.9389,
          latitudeDelta: 0.007166,
          longitude: 67.1237,
          longitudeDelta: 0.007956,
        }}
      >
        <Marker
          coordinate={location}
          image={require("../../assets/map_marker.png")}
        />
        {markers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}
            title={marker.title}
            style={{
              height: 50,
              width: 50,
            }}
          >
            <Image
              source={require("../../assets/map_marker.png")}
              style={{
                height: 35,
                width: 35,
                borderRadius: 35 / 2,
                borderWidth: 2,
                borderColor: "#FE4B3F",
                backgroundColor: "#000",
                resizeMode: "contain",
              }}
            />
          </Marker>
        ))}
      </MapView>
    </View>
  );
};

export default Maps;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: sizes.width,
    height: sizes.height,
  },
});
