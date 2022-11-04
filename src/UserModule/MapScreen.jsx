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
import moment from "moment";

const MapScreen = () => {
  const navigation = useNavigation();
  const { fontScale } = useWindowDimensions();
  const [shopSelect, setshopSelect] = useState(true);
  const [serviceSelect, setserviceSelect] = useState(false);
  const [showModal, setshowModal] = useState(false);
  const [riderMode, setriderMode] = useState(false);
  const shopModalizeRef = useRef(null);
  const serviceModalizeRef = useRef(null);
  const categoryRef = useRef(null);
  const riderModalizeRef = useRef(null);

  const [categorySelect, setcategorySelect] = useState(1);
  const handleCategory = (item, id) => {
    setcategorySelect(id);
  };

  useEffect(() => {
    if (riderModalizeRef.current?.close()) {
      setriderMode(false);
    }
  }, []);

  const riderModal = () => {
    setriderMode(true);
    if (riderMode) {
      riderModalizeRef.current?.open();
    }
  };
  const onShopOpen = () => {
    shopModalizeRef.current?.open();
  };
  const onServiceOpen = () => {
    serviceModalizeRef.current?.open();
  };

  const CustomMarker = ({ name }) => {
    return (
      <View>
        {/* <MaterialIcons
          name="location-history"
          size={50}
          color={colors.secondary}
        /> */}
        <View
          style={{
            width: 50,
            height: 50,
            borderRadius: 50 / 2,
            backgroundColor: colors.white,
            borderColor: colors.secondary,
            borderWidth: 2,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <MaterialIcons
            name={name}
            size={30}
            color="black"
            style={{
              position: "absolute",
              left: 8,
              right: 0,
              top: 8,
              bottom: 0,
            }}
          />
        </View>
      </View>
    );
  };

  const RiderMarker = () => {
    return (
      <View style={{ flex: 1 }}>
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

  const now = new Date();
  const greater = () => {
    if (moment().format("LLLL") < "Friday, October 21, 2022 3:23 PM") {
      return console.log("first");
    } else {
      console.log("stfu");
    }
  };
  return (
    <View style={styles.container}>
      <View style={[styles.header, { height: riderMode ? "12.5%" : "22.5%" }]}>
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
        {!riderMode && (
          <View style={styles.headerButtonContainer}>
            <TouchableOpacity
              onPress={() => {
                setserviceSelect(false);
                setshopSelect(true);
              }}
              style={[
                styles.headerButton,
                {
                  borderColor: shopSelect ? colors.primary : colors.borderColor,
                  elevation: shopSelect ? 5 : 0,
                },
              ]}
            >
              <Text
                style={[
                  styles.headerButtonText,
                  {
                    color: shopSelect ? colors.primary : colors.textPrimary,
                    fontSize: 16 / fontScale,
                  },
                ]}
              >
                Grocery shops
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setserviceSelect(true);
                setshopSelect(false);
              }}
              style={[
                styles.headerButton,
                {
                  borderColor: serviceSelect
                    ? colors.primary
                    : colors.borderColor,
                  elevation: serviceSelect ? 5 : 0,
                },
              ]}
            >
              <Text
                style={[
                  styles.headerButtonText,
                  {
                    color: serviceSelect ? colors.primary : colors.textPrimary,
                    fontSize: 16 / fontScale,
                  },
                ]}
              >
                Services Shops
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={StyleSheet.absoluteFillObject}
        initialRegion={location}
        region={location}
      >
        {/* <TouchableOpacity
          onPress={() => navigation.navigate("RiderMap")}
          style={{
            position: "absolute",
            right: "-18.5%",
            top: "50%",
            height: "7%",
            width: 175,
            borderRadius: 8,
            backgroundColor: colors.primary,
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: 10,
            transform: [{ rotate: "270deg" }],
          }}
        >
          <Text
            style={{
              color: colors.white,
              fontWeight: sizes.semiBold,
              fontSize: 14 / fontScale,
            }}
          >
            Connect with a rider
          </Text>
        </TouchableOpacity> */}

        <Marker
          coordinate={location}
          image={require("../../assets/map_marker.png")}
        />
        {riderMode ? (
          <>
            {shopMarkers.map((marker, index) => (
              <Marker
                onPress={onShopOpen}
                coordinate={{
                  latitude: marker.latitude,
                  longitude: marker.longitude,
                }}
              >
                <RiderMarker name={"local-grocery-store"} />
              </Marker>
            ))}
          </>
        ) : (
          <>
            {shopSelect && (
              <>
                {shopMarkers.map((marker, index) => (
                  <Marker
                    onPress={onShopOpen}
                    coordinate={{
                      latitude: marker.latitude,
                      longitude: marker.longitude,
                    }}
                  >
                    <CustomMarker name={"local-grocery-store"} />
                    {/* <Callout style={{ width: "100%" }}>
                  <Text style={{ fontWeight: "600", fontSize: 18 / fontScale }}>
                    {marker.title}
                  </Text>
                </Callout> */}
                    <Callout tooltip>
                      <View>
                        <View style={styles.bubble}>
                          <Text style={styles.name}>Grocery Shop</Text>
                          {/* <Text>A short description</Text> */}
                          <Image
                            style={styles.image}
                            source={require("../../assets/shopCover.png")}
                          />
                        </View>
                        <View style={styles.arrowBorder} />
                        <View style={styles.arrow} />
                      </View>
                    </Callout>
                  </Marker>
                ))}
              </>
            )}
            {serviceSelect && (
              <>
                {serviceMarkers.map((marker, index) => (
                  <Marker
                    onPress={onServiceOpen}
                    coordinate={{
                      latitude: marker.latitude,
                      longitude: marker.longitude,
                    }}
                  >
                    <CustomMarker name={"miscellaneous-services"} />
                    <Callout tooltip>
                      <View>
                        <View style={styles.bubble}>
                          <Text style={styles.name}>Service</Text>
                          {/* <Text>A short description</Text> */}
                          <Image
                            style={styles.image}
                            source={require("../../assets/shopCover.png")}
                          />
                        </View>
                        <View style={styles.arrowBorder} />
                        <View style={styles.arrow} />
                      </View>
                    </Callout>
                  </Marker>
                ))}
              </>
            )}
            <TouchableOpacity
              onPress={() => categoryRef.current?.open()}
              style={{
                position: "absolute",
                right: 15,
                bottom: 35,
                height: 50,
                width: 50,
                borderRadius: 50 / 2,
                backgroundColor: "white",
                elevation: 3,
                shadowColor: colors.black,
                justifyContent: "center",
                alignItems: "center",
                shadowRadius: 4,
                shadowOpacity: 0.3,
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
              }}
            >
              <MaterialIcons
                name="filter-list"
                size={30}
                color={colors.primary}
                style={{ left: 1, top: 1 }}
              />
            </TouchableOpacity>
          </>
        )}

        <TouchableOpacity
          onPress={() => navigation.navigate("RiderMap")}
          style={{
            backgroundColor: colors.primary,
            width: "75%",
            padding: 15,
            marginVertical: 5,
            alignItems: "center",
            borderRadius: 10,
            position: "absolute",
            bottom: 30,
            left: 15,
            marginRight: 15,
          }}
        >
          <Text style={styles.button}>Connect with a rider</Text>
        </TouchableOpacity>
      </MapView>
      <Modalize
        ref={serviceModalizeRef}
        scrollViewProps={{ showsVerticalScrollIndicator: false }}
        snapPoint={250}
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
            marginVertical: 26,
          }}
        >
          <View
            style={{
              width: 45,
              height: 45,
              borderRadius: 45 / 2,
              borderWidth: 1,
              marginRight: 12,
            }}
          >
            {/* <Feather
                  name="user"
                  size={39}
                  color={colors.primary}
                  style={{ paddingRight: 7, paddingBottom: 10 }}
                /> */}
          </View>
          <View>
            <Text
              style={{
                fontWeight: sizes.bold,
                fontSize: 18 / fontScale,
                marginBottom: 8,
              }}
            >
              More In Your Pockets Shop
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
            <Text
              style={{
                fontSize: 16 / fontScale,
                fontWeight: "400",
                color: colors.textSecondary,
                maxWidth: "90%",
              }}
            >
              Electrician | Repair | Mechanics | Home Accessories
            </Text>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            marginHorizontal: 20,
          }}
        >
          <CustomButton
            title="Go to Service"
            onPress={() => {
              navigation.navigate("ServiceScreen");
              serviceModalizeRef.current?.close();
            }}
          />
        </View>
      </Modalize>
      <Modalize
        ref={shopModalizeRef}
        scrollViewProps={{ showsVerticalScrollIndicator: false }}
        snapPoint={250}
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
            marginVertical: 26,
          }}
        >
          <View
            style={{
              width: 45,
              height: 45,
              borderRadius: 45 / 2,
              borderWidth: 1,
              marginRight: 12,
            }}
          >
            {/* <Feather
                  name="user"
                  size={39}
                  color={colors.primary}
                  style={{ paddingRight: 7, paddingBottom: 10 }}
                /> */}
          </View>
          <View>
            <Text
              style={{
                fontWeight: sizes.bold,
                fontSize: 18 / fontScale,
                marginBottom: 8,
              }}
            >
              More In Your Pockets Services
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
            <Text
              style={{
                fontSize: 16 / fontScale,
                fontWeight: "400",
                color: colors.textSecondary,
                maxWidth: "90%",
              }}
            >
              Electrician | Repair | Mechanics | Home Accessories
            </Text>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            marginHorizontal: 20,
          }}
        >
          <CustomButton
            title="Go to Shop"
            onPress={() => {
              navigation.navigate("ShopScreen");
              shopModalizeRef.current?.close();
            }}
          />
        </View>
      </Modalize>
      <Modalize
        ref={categoryRef}
        scrollViewProps={{ showsVerticalScrollIndicator: false }}
        snapPoint={250}
        HeaderComponent={
          <>
            <Text></Text>
          </>
        }
        withHandle={false}
      >
        <Text
          style={{
            margin: 5,
            fontSize: 18,
            fontWeight: sizes.bold,
            color: colors.textPrimary,
            marginVertical: 10,
            marginHorizontal: 15,
          }}
        >
          Categories
        </Text>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            marginBottom: 30,
            marginHorizontal: 10,
          }}
        >
          {category.map((item, i) => {
            return (
              <TouchableOpacity
                key={item.key}
                onPress={() => handleCategory(item, i + 1)}
                style={{
                  width: "45%",
                  height: 50,
                  margin: 5,
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor:
                    item.key === categorySelect ? colors.primary : colors.grey2,
                  backgroundColor:
                    item.key === categorySelect
                      ? "rgba(25, 145, 113, 0.02)"
                      : colors.white,
                  flexDirection: "row",
                  alignItems: "center",
                  paddingLeft: 15,
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
                      item.key === categorySelect
                        ? "radio-button-on"
                        : "radio-button-off"
                    }
                    size={15}
                    color={
                      item.key === categorySelect ? colors.primary : "#000"
                    }
                  />
                </View>
                <Text
                  style={{
                    color:
                      item.key === categorySelect
                        ? colors.textPrimary
                        : colors.textSecondary,
                    fontSize: 16,
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
      </Modalize>

      <Modalize
        ref={riderModalizeRef}
        scrollViewProps={{ showsVerticalScrollIndicator: false }}
        snapPoint={250}
        tapGestureEnabled={false}
        closeOnOverlayTap={false}
        closeSnapPointStraightEnabled={false}
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
          }}
        >
          <View
            style={{
              width: 45,
              height: 45,
              borderRadius: 45 / 2,
              borderWidth: 0,
              marginRight: 12,
            }}
          >
            <Feather
              name="user"
              size={39}
              color={"black"}
              style={{ paddingRight: 0, paddingBottom: 10 }}
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
              <View>
                <MaterialIcons name="close" color={"black"} size={24} />
              </View>
            </View>
            {riderInfo.map((_, index) => {
              return (
                <View key={index} style={{ flexDirection: "row" }}>
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
                  <Text>{_.detailHead}</Text>
                </View>
              );
            })}
          </View>
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
              //   navigation.navigate("ServiceScreen");
              riderModalizeRef.current?.close();
            }}
          />
        </View>
      </Modalize>
    </View>
  );
};

export default MapScreen;

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

  name: {
    fontSize: 16,
    marginBottom: 5,
  },

  image: {
    width: "100%",
    height: "50%",
    height: 80,
  },
  button: { color: "white", fontSize: 16, fontWeight: sizes.semiBold },
});
