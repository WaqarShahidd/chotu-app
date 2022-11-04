import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import React, { useState } from "react";
import { colors, sizes } from "../constants/theme";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { groupButtons, images, serviceDetails } from "../components/data";
import { useNavigation } from "@react-navigation/native";
import Rating from "../components/Rating";
import Swiper from "react-native-swiper";

const ServiceScreen = () => {
  const { fontScale } = useWindowDimensions();
  const navigation = useNavigation();
  const [toggle, settoggle] = useState(0);
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.header}>
        <View style={styles.headerTitle}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons name="arrow-back" size={30} color="black" />
          </TouchableOpacity>

          <Text style={[styles.title, { fontSize: 16 / fontScale }]}>Shop</Text>
          <TouchableOpacity style={{ height: 30, width: 30 }}>
            {/* <MaterialIcons name="search" size={30} color="black" /> */}
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          //   width: "100%",
          height: "10%",
          margin: "6%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
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
              width: 60,
              height: 60,
              marginRight: 12,
            }}
          >
            <Image
              source={require("../../assets/pf.png")}
              style={{
                height: 60,
                width: 60,
                borderRadius: 60 / 2,
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
              More In Your Pockets Shop
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
              Type Wood Repairing & Spare Part
            </Text>
          </View>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <View style={styles.groupButton}>
          {groupButtons.map((_, index) => {
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

        <ScrollView>
          {toggle === 0 ? (
            <>
              <View
                style={{
                  height: 100,
                  borderBottomWidth: 1,
                  borderBottomColor: colors.grey2,
                  // borderTopColor: colors.grey2,
                  // borderTopWidth: 1,
                  justifyContent: "flex-start",
                  // alignItems: "center",
                  flexDirection: "row",
                  paddingHorizontal: 25,
                }}
              >
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <MaterialCommunityIcons
                    name="email-outline"
                    size={20}
                    color="rgba(19, 26, 46, 0.4)"
                  />
                </View>
                <View
                  style={{
                    marginLeft: 10,
                    alignItems: "flex-start",
                    paddingVertical: 20,
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "500",
                      fontSize: 10 / fontScale,
                      color: "rgba(19, 26, 46, 0.6)",
                      marginBottom: 5,
                    }}
                  >
                    Email Address
                  </Text>
                  <Text
                    style={{
                      fontWeight: "500",
                      color: colors.textPrimary,
                      fontSize: 14 / fontScale,
                    }}
                  >
                    william_marshal2000@email.com
                  </Text>
                </View>
              </View>
              <View
                style={{
                  height: 100,
                  borderBottomWidth: 1,
                  borderBottomColor: colors.grey2,
                  borderTopColor: colors.grey2,
                  borderTopWidth: 1,
                  justifyContent: "flex-start",
                  // alignItems: "center",
                  flexDirection: "row",
                  paddingHorizontal: 25,
                }}
              >
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <MaterialCommunityIcons
                    name="store"
                    size={20}
                    color="rgba(19, 26, 46, 0.4)"
                  />
                </View>
                <View
                  style={{
                    marginLeft: 10,
                    alignItems: "flex-start",
                    paddingVertical: 20,
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "500",
                      fontSize: 10 / fontScale,
                      color: "rgba(19, 26, 46, 0.6)",
                      marginBottom: 5,
                    }}
                  >
                    About store:
                  </Text>
                  <Text
                    style={{
                      fontWeight: "500",
                      color: colors.textPrimary,
                      fontSize: 14 / fontScale,
                    }}
                  >
                    Sanjay is the head-chef here. He is extremely experienced
                    and he is someone who can... more
                  </Text>
                </View>
              </View>
              <View
                style={{
                  height: 100,
                  borderBottomWidth: 1,
                  borderBottomColor: colors.grey2,
                  borderTopColor: colors.grey2,
                  borderTopWidth: 1,
                  justifyContent: "flex-start",
                  // alignItems: "center",
                  flexDirection: "row",
                  paddingHorizontal: 25,
                }}
              >
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <MaterialCommunityIcons
                    name="store"
                    size={20}
                    color="rgba(19, 26, 46, 0.4)"
                  />
                </View>
                <View
                  style={{
                    marginLeft: 10,
                    alignItems: "flex-start",
                    paddingVertical: 20,
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "500",
                      fontSize: 10 / fontScale,
                      color: "rgba(19, 26, 46, 0.6)",
                      marginBottom: 5,
                    }}
                  >
                    About store:
                  </Text>
                  <Text
                    style={{
                      fontWeight: "500",
                      color: colors.textPrimary,
                      fontSize: 14 / fontScale,
                    }}
                  >
                    Sanjay is the head-chef here. He is extremely experienced
                    and he is someone who can... more
                  </Text>
                </View>
              </View>
              <View
                style={{
                  height: 100,
                  borderBottomWidth: 1,
                  borderBottomColor: colors.grey2,
                  borderTopColor: colors.grey2,
                  borderTopWidth: 1,
                  justifyContent: "flex-start",
                  // alignItems: "center",
                  flexDirection: "row",
                  paddingHorizontal: 25,
                }}
              >
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <MaterialCommunityIcons
                    name="store"
                    size={20}
                    color="rgba(19, 26, 46, 0.4)"
                  />
                </View>
                <View
                  style={{
                    marginLeft: 10,
                    alignItems: "flex-start",
                    paddingVertical: 20,
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "500",
                      fontSize: 10 / fontScale,
                      color: "rgba(19, 26, 46, 0.6)",
                      marginBottom: 5,
                    }}
                  >
                    About store:
                  </Text>
                  <Text
                    style={{
                      fontWeight: "500",
                      color: colors.textPrimary,
                      fontSize: 14 / fontScale,
                    }}
                  >
                    Sanjay is the head-chef here. He is extremely experienced
                    and he is someone who can... more
                  </Text>
                </View>
              </View>
            </>
          ) : toggle === 1 ? (
            <View style={{ marginTop: 12 }}>
              {serviceDetails.map((_, index) => {
                return (
                  <View
                    key={index}
                    style={{
                      borderRadius: 12,
                      flex: 1,
                      borderWidth: 1,
                      borderColor: colors.grey2,
                      marginBottom: 12,
                      flexDirection: "row",
                      marginHorizontal: 20,
                      padding: 8,
                    }}
                  >
                    <View style={{ flex: 1 }}>
                      <View
                        style={{
                          flex: 1,
                          borderRadius: 10,
                        }}
                      >
                        <Image
                          source={{
                            uri: "https://cdn.shopify.com/s/files/1/0598/0818/6530/products/171341c_1.jpg?v=1649232921",
                          }}
                          style={{ height: 45, width: 45 }}
                        />
                      </View>
                    </View>
                    <View
                      style={{
                        flex: 5,
                        padding: 10,
                        justifyContent: "space-between",
                      }}
                    >
                      <Text
                        style={{
                          fontWeight: "500",
                          fontSize: 16 / fontScale,
                          color: colors.textPrimary,
                          marginBottom: 10,
                        }}
                      >
                        {_.title}
                      </Text>
                      <Text
                        style={{
                          fontWeight: "400",
                          fontSize: 14 / fontScale,
                          color: "rgba(19, 26, 46, 0.5)",
                          marginBottom: 10,
                        }}
                      >
                        {_.desc}
                      </Text>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <Text
                          style={{
                            fontWeight: "400",
                            fontSize: 14 / fontScale,
                            color: "rgba(19, 26, 46, 0.5)",
                          }}
                        >
                          {_.date}
                        </Text>
                        <Text
                          style={{
                            fontWeight: sizes.semiBold,
                            color: "#03B602",
                            fontSize: 14 / fontScale,
                          }}
                        >
                          {_.price}
                        </Text>
                      </View>
                    </View>
                  </View>
                );
              })}
            </View>
          ) : (
            <View style={{ marginHorizontal: 15, marginTop: 10 }}>
              {/* {images.map((_, index) => {
                return (
                  <View
                    style={{
                      flex: 1,

                      marginHorizontal: 20,
                    }}
                    key={index}
                  >
                    {index % 2 === 0 ? (
                      <Image
                        source={{
                          uri: _,
                        }}
                        style={{
                          height: 300,
                          width: "100%",
                          resizeMode: "contain",
                        }}
                      />
                    ) : (
                      <View style={{ flexDirection: "row" }}>
                        <Image
                          key={index % 2 !== 0 + 1}
                          source={{
                            uri: _,
                          }}
                          style={{
                            height: 200,
                            width: "50%",
                            resizeMode: "contain",
                          }}
                        />
                        <Image
                          source={{
                            uri: _,
                          }}
                          style={{
                            height: 200,
                            width: "50%",
                            resizeMode: "contain",
                          }}
                        />
                      </View>
                    )}
                  </View>
                );
              })} */}
              <Swiper
                nestedScrollEnabled={true}
                horizontal={true}
                pagingEnabled
                height={sizes.width * 0.8}
                style={{
                  overflow: "hidden",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                showsPagination={false}
              >
                {images.map((item, index) => {
                  return (
                    <View style={styles.slide} key={index}>
                      <Image
                        source={{
                          uri: item,
                        }}
                        resizeMode="cover"
                        style={styles.sliderImage}
                      />
                    </View>
                  );
                })}
              </Swiper>
            </View>
          )}
        </ScrollView>
      </View>

      <View
        style={{
          height: "12.5%",
          //   flex: 1,
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

export default ServiceScreen;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    backgroundColor: "white",
    height: "12.5%",
    alignItems: "center",
    borderBottomColor: colors.grey2,
    borderBottomWidth: 1,
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
  groupButton: {
    // width: "100%",

    height: "17.5%",
    backgroundColor: "#F2F2F2",
    borderRadius: 12,
    marginHorizontal: 14,
    padding: 8,
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
  slide: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "transparent",
    borderRadius: 8,
  },
  sliderImage: {
    height: "100%",
    width: "100%",
    alignSelf: "center",
    // borderRadius: 8,
  },
});
