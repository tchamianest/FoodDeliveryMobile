import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import * as Icon from "react-native-feather";
import { useRoute, useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { themecolors } from "../theme";
import Dishesh from "../components/dishesh";

export default function RestaurantScreen() {
  const { params } = useRoute();
  const item = params;
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View className="relative">
        <Image source={item.image} className="h-72 w-full" />
        <TouchableOpacity
          className="absolute top-9 left-3 bg-gray-50 rounded-full shadow"
          onPress={() => navigation.goBack()}
        >
          <Icon.ArrowLeft stroke={themecolors.bgColor(1)} strokeWidth={3} />
        </TouchableOpacity>
      </View>
      <View
        style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
        className="bg-white -mt-12 pt-6"
      >
        <View className="px-5">
          <Text className="text-2xl font-bold capitalize">{item.name}</Text>
          <View className="flex-row space-x-3 my-1">
            <View className="flex-row items-center space-x-1">
              <Image
                source={require("../assets/star.png")}
                className="w-4 h-4"
              />
              <Text className="text-xs">
                <Text className="text-green-700">{item.stars}</Text>
                <Text className="text-gray-700">
                  ({item.reviews} reviews) .{" "}
                  <Text className="font-semibold">{item.type} </Text>
                </Text>
              </Text>
            </View>
            <View className="flex-row items-center space-x-1">
              <Icon.MapPin color="gray" width={15} height={15} />
              <Text className="text-gray-700 text-xs">
                NearBy . {item.address}
              </Text>
            </View>
          </View>
        </View>
        <Text className="text-gray-500 mt-2 mx-4">{item.description}</Text>
      </View>
      <View className="pb-36 bg-white">
        <Text className="px-3 py-4 text-2xl font-bold">Menu</Text>
        {item.dishes.map((dish, index) => {
          return <Dishesh />;
        })}
      </View>
    </ScrollView>
  );
}
