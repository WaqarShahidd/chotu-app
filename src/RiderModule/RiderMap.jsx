import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from "react-native-maps";
import {
  shopMarkers,
  serviceMarkers,
  category,
  riderInfo,
} from "../components/data";
import { Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { colors, sizes } from "../constants/theme";
import * as Location from "expo-location";
import MapModal from "../components/MapModal";
import { Modalize } from "react-native-modalize";
import CustomButton from "../components/CustomButton";
import Rating from "../components/Rating";
import { useNavigation } from "@react-navigation/native";

const RiderMap = () => {
  const navigation = useNavigation();
  const { fontScale } = useWindowDimensions();

  const CustomMarker = ({ name }) => {
    return (
      <View style={{ flex: 1 }}>
        {/* <MaterialIcons
          name="location-history"
          size={50}
          color={colors.secondary}
        /> */}
        <View
          style={{
            width: 60,
            height: 60,
            borderRadius: 60 / 2,
            backgroundColor: colors.white,
            borderColor: "#4282FF",
            borderWidth: 2,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <MaterialIcons
            name="electric-bike"
            size={30}
            color="black"
            style={{
              position: "absolute",
              left: 12,
              right: 0,
              top: 6,
              bottom: 0,
            }}
          />
        </View>
        <View
          style={{
            position: "absolute",
            backgroundColor: "#4282FF",
            top: 40,
            width: "100%",

            justifyContent: "center",
            alignItems: "center",
            borderRadius: 12,
          }}
        >
          <Text style={{ color: colors.white }}>3/4</Text>
        </View>
      </View>
    );
  };

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
        latitudeDelta: 0.07166,
        longitudeDelta: 0.07956,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);
  const [location, setLocation] = useState({
    latitude: 24.926295,
    latitudeDelta: 0.04166,
    longitude: 67.130499,
    longitudeDelta: 0.0456,
  });
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTitle}>
          <TouchableOpacity onPress={() => navigation.navigate("Menu")}>
            <MaterialIcons name="menu" size={30} color="black" />
          </TouchableOpacity>

          <Image
            source={require("../../assets/logo.png")}
            style={{ height: "100%", width: "45%", resizeMode: "contain" }}
          />
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity>
              <MaterialIcons name="search" size={30} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={StyleSheet.absoluteFillObject}
        initialRegion={location}
        region={location}
      >
        <Marker
          coordinate={location}
          image={require("../../assets/map_marker.png")}
        />

        {shopMarkers.map((marker, index) => (
          <Marker
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}
          >
            <CustomMarker name={"local-grocery-store"} />
          </Marker>
        ))}
      </MapView>
      <Modalize
        alwaysOpen={250}
        scrollViewProps={{ showsVerticalScrollIndicator: false }}
        panGestureEnabled={false}
        disableScrollIfPossible={true}
        HeaderComponent={
          <>
            <Text></Text>
          </>
        }
        withHandle={false}
      >
        <View
          style={{
            flexDirection: "row",
            marginHorizontal: 20,
            marginTop: 26,
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                width: 45,
                height: 45,
                borderRadius: 45 / 2,
                justifyContent: "center",
                alignItems: "center",
                marginRight: 20,
              }}
            >
              <Feather name="user" size={39} color={"black"} />
            </View>

            <View>
              <Text
                style={{
                  fontWeight: sizes.bold,
                  fontSize: 18 / fontScale,
                  marginBottom: 8,
                }}
              >
                Rider Name
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
              {riderInfo.map((_, index) => {
                return (
                  <View
                    key={index}
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 16 / fontScale,
                        fontWeight: "400",
                        color: colors.textSecondary,

                        marginRight: 25,
                      }}
                    >
                      {_.detailHead}
                    </Text>
                    <Text>{_.detailBody}</Text>
                  </View>
                );
              })}
            </View>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("MapScreen")}
            style={{
              height: 28,
              width: 28,
              borderRadius: 28 / 2,
              borderWidth: 1,
              borderColor: "red",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MaterialIcons name="close" size={24} color={"red"} />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            margin: 20,
          }}
        >
          <CustomButton
            title="Connect to the Rider"
            onPress={() => {
              navigation.navigate("ChatWithRider");
            }}
          />
        </View>
      </Modalize>
    </View>
  );
};

export default RiderMap;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    position: "absolute",
    top: 0,
    zIndex: 999,
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
    paddingHorizontal: 16,
  },
  headerButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 10,
    paddingHorizontal: 14,
  },
  headerButton: {
    backgroundColor: colors.white,
    width: "49%",
    padding: 15,
    marginVertical: 5,
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 1,
  },
  headerButtonText: {
    fontWeight: sizes.semiBold,
  },
  subTitle: {
    fontWeight: "400",
    color: colors.textSecondary,
    marginBottom: 12.5,
    fontStyle: "italic",
  },
  bubble: {
    flexDirection: "column",
    alignSelf: "flex-start",
    backgroundColor: "#fff",
    borderRadius: 6,
    borderColor: "#ccc",
    borderWidth: 0.5,
    padding: 15,
    width: 150,
    flex: 1,
  },
  // Arrow below the bubble
  arrow: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderTopColor: "#fff",
    borderWidth: 16,
    alignSelf: "center",
    marginTop: -32,
  },
  arrowBorder: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderTopColor: "#007a87",
    borderWidth: 16,
    alignSelf: "center",
    marginTop: -0.5,
    // marginBottom: -15
  },
  // Character name
  name: {
    fontSize: 16,
    marginBottom: 5,
  },
  // Character image
  image: {
    width: "100%",
    height: "50%",
    height: 80,
  },
});
