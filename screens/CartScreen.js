import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import { featured } from "../constants";
import { themecolors } from "../theme";
import { useRoute, useNavigation } from "@react-navigation/native";
import * as Icon from "react-native-feather";

export default function CartScreen() {
  const data = featured.restaurants[0];
  const navigation = useNavigation();
  return (
    <View className="bg-white flex-1">
      {/* back button  */}
      <View className="relative py-4 shadow-sm">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ backgroundColor: themecolors.bgColor(1) }}
          className="absolute z-10 rounded-full p-1 shadow top-5 left-2 "
        >
          <Icon.ArrowLeft strokeWidth={3} stroke="white" />
        </TouchableOpacity>
        <View>
          <Text className="text-center font-bold text-xl">Your Cart</Text>
          <Text className="text-center text-gray-500">{data.name}</Text>
        </View>
      </View>
      {/* Delivery Time  */}
      <View
        style={{ backgroundColor: themecolors.bgColor(0.2) }}
        className="flex-row px-4 items-center"
      >
        <Image
          source={require("../assets/images/categories/fanta.png")}
          className="w-20 h-20 rounded-full"
        />
        <Text className="flex-1 pl-4">Deliver in 20-30 minutes</Text>
        <TouchableOpacity>
          <Text className="font-bold" style={{ color: themecolors.text }}>
            Change
          </Text>
        </TouchableOpacity>
      </View>
      {/* dishesh  */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
        className="bg-white pt-5"
      >
        {data.dishes.map((dish, index) => {
          return (
            <View
              key={index}
              className="flex-row items-center space-x-3 py-3 px-4 bg-white rounded-3xl mx-2 mb-3 shadow-md"
            >
              <Text className="font-bold" style={{ color: themecolors.text }}>
                2 ×
              </Text>
              <Image className="h-14 w-14 rounded-full" source={dish.image} />
              <Text className="flex-1 font-bold text-gray-700">
                {dish.name}
              </Text>
              <Text className="font-semibold text-base">${dish.proce}</Text>
              <TouchableOpacity
                className="p-1 rounded-full"
                style={{ backgroundColor: themecolors.bgColor(1) }}
              >
                <Icon.Minus
                  strokeWidth={2}
                  height={20}
                  width={20}
                  stroke="white"
                />
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
      {/* Total Sections  */}
      <View
        style={{ backgroundColor: themecolors.bgColor(0.2) }}
        className="p-6 px-8 rounded-t-3xl space-y-4"
      >
        <View className="flex-row justify-between ">
          <Text className="text-gray-700">Subtotal</Text>
          <Text className="text-gray-700">$ 30</Text>
        </View>
        <View className="flex-row justify-between ">
          <Text className="text-gray-700">deliveri Fees</Text>
          <Text className="text-gray-700">$ 2</Text>
        </View>
        <View className="flex-row justify-between ">
          <Text className="text-gray-700 font-extrabold">Order total</Text>
          <Text className="text-gray-700 font-extrabold">$ 32</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("orderPreparing")}
            style={{ backgroundColor: themecolors.bgColor(1) }}
            className="p-3 rounded-full"
          >
            <Text className="text-white text-center font-bold text-lg">
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
