import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import Video from "react-native-video";
import { useRoute, useNavigation } from "@react-navigation/native";
export default function OrderPreparing() {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 3000);
  }, []);
  return (
    <View className="flex-1 bg-white justify-center items-center">
      {/* <Video source={require("../assets/images/animated.mp4")} /> */}
    </View>
  );
}
