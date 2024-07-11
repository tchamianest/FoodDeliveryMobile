import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Categolie } from "../constants/index";
export default function Categolies() {
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
          return (
            <View key={index} className="flex justify-center items-center mr-6">
              <TouchableOpacity className="p-1 rounded-full shadow bg-gray-200">
                <Image style={{ width: 45, height: 45 }} source={el.image} />
              </TouchableOpacity>
              <Text>{el.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
