import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { themecolors } from "../theme";
import { useNavigation } from "@react-navigation/native";

export default function CartIcon() {
  const navigation = useNavigation();
  return (
    <View className="absolute bottom-5 w-full z-50">
      <TouchableOpacity
      onPress={()=>navigation.navigate('Cart',)}
        style={{ backgroundColor: themecolors.bgColor(2) }}
        className="flex-row justify-between items-center mt-5 rounded-full p-4 py-3 shadow-lg"
      >
        <View
          className="p-2 px-4 rounded-full"
          style={{ backgroundColor: "rgba(253,255,255,0.3)" }}
        >
          <Text className=" font-extrabold text-white text-lg">3</Text>
        </View>
        <Text className="flex-1 text-center font-extrabold text-white text-lg">
          View cart
        </Text>
        <Text className="font-extrabold text-lg">${23}</Text>
      </TouchableOpacity>
    </View>
  );
}
