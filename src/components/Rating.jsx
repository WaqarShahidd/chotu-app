import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";

const Rating = ({ rating }) => {
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);
  return (
    <View style={{ flexDirection: "row" }}>
      {maxRating.map((item, key) => {
        return (
          <View key={item} style={{ marginBottom: 0 }}>
            <FontAwesome
              name={item <= rating ? "star" : "star-o"}
              size={18}
              color="#F1BE08"
            />
          </View>
        );
      })}
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({});
