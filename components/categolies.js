import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Categolie } from "../constants/index";
export default function Categolies() {
  const [activeCategolies, setActiveCategory] = useState(null);
  return (
    // All categolies s
    <View className="mt-4">
      <Text className="pl-3 mb-3 font-semibold text-lg">categolies</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible min-h-[100px]"
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {Categolie.map((el, index) => {
          let isActive = el.id === activeCategolies;
          let btnclass = isActive ? "bg-gray-600" : "bg-gray-200";
          let textclass = isActive
            ? "font-semibold text-gray-800"
            : "text-gray-500";
          return (
            <View key={index} className="flex justify-center items-center mr-6">
              <TouchableOpacity
                onPress={() => setActiveCategory(el.id)}
                className={`p-1 rounded-full shadow bg-gray-200  ${btnclass}`}
              >
                <Image style={{ width: 45, height: 45 }} source={el.image} />
              </TouchableOpacity>
              <Text className={`text-sm  ${textclass}`}>{el.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
