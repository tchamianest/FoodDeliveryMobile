import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { themecolors } from "../theme";
import RestaurentCard from "./restaurentCard";

export default function FeatureRow({ title, restaurants, decription }) {
  return (
    <View>
      <View className="flex-row justify-between items-center px-4">
        <View>
          <Text className="font-bold  text-lg">{title}</Text>
          <Text className="text-gray-500 text-x5">{decription}</Text>
        </View>
        <TouchableOpacity>
          <Text style={{ color: themecolors.text }} className="font-semibold">
            See All
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        className="overflow-visible py-5"
      >
        {restaurants.map((el, index) => {
          return <RestaurentCard items={el} key={index} />;
        })}
      </ScrollView>
    </View>
  );
}
