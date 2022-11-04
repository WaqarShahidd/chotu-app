import {
  Animated,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { colors, sizes } from "../constants/theme";
import {
  Feather,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import CustomButton from "./CustomButton";
import Rating from "./Rating";

const MapModal = ({ isVisible, onClose, onPress }) => {
  const { fontScale } = useWindowDimensions();
  const modalAnimatedValue = useRef(new Animated.Value(0)).current;
  const [showModal, setShowModal] = useState(isVisible);

  useEffect(() => {
    if (showModal) {
      Animated.timing(modalAnimatedValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(modalAnimatedValue, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start(() => onClose());
    }
  }, [showModal]);

  const modalY = modalAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [sizes.height, sizes.width / 1 + 50],
  });

  return (
    <Modal animationType="fade" transparent={true} visible={isVisible}>
      <View style={{ flex: 1 }}>
        <TouchableWithoutFeedback onPress={() => setShowModal(false)}>
          <View
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          />
        </TouchableWithoutFeedback>

        <Animated.View
          style={{
            position: "absolute",
            left: 0,
            top: modalY,
            width: "100%",
            height: "100%",
            padding: 20.5,
            borderTopRightRadius: sizes.radius,
            borderTopLeftRadius: sizes.radius,
            backgroundColor: colors.white,
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              height: 200,
              // alignItems: "center",
              // justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row" }}>
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

            <View style={{ flex: 1, justifyContent: "flex-end" }}>
              <CustomButton title="Go to Shop" onPress={onPress} />
            </View>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default MapModal;

const styles = StyleSheet.create({
  subTitle: {
    fontWeight: "400",
    color: colors.textSecondary,
    marginBottom: 12.5,
    fontStyle: "italic",
  },
});
