import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { themecolors } from "../theme";
import * as Icon from "react-native-feather";

export default function Dishesh({ items }) {
  return (
    <View className="flex-row items-center bg-white p-3 rounded-3xl shadow-3xl mb-3 mx-2">
      <Image
        className="rounded-3xl"
        style={{ height: 100, width: 100 }}
        source={items.image}
      />
      <View className="flex flex-1 space-y-3">
        <View className="pl-3">
          <Text className="text-xl">{items.name}</Text>
          <Text className="text-gray-700">{items.description}</Text>
        </View>
        <View className="flex-row justify-between pl-3 items-center">
          <Text className="text-gray-700 text-lg">$ {items.price}</Text>
          <View className="flex-row items-center">
            <TouchableOpacity
              style={{ backgroundColor: themecolors.bgColor(1) }}
              className="p-1 rounded-full"
            >
              <Icon.Minus
                stroke={"white"}
                strokeWidth={2}
                height={20}
                width={20}
              />
            </TouchableOpacity>
            <Text className="px-4">{2}</Text>
            <TouchableOpacity
              style={{ backgroundColor: themecolors.bgColor(1) }}
              className="p-1 rounded-full"
            >
              <Icon.Plus
                stroke={"white"}
                strokeWidth={2}
                height={20}
                width={20}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
