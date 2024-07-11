import { View, Text, TextInput, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import * as Icon from "react-native-feather";
import { featured } from "../constants";
import Categolies from "../components/categolies";
import { themecolors } from "../theme";
import FeatureRow from "../components/featureRow";

export default function HomeScreen() {
  return (
    <SafeAreaView className="bg-white pt-10">
      <StatusBar barStyle="dark-content" />
      {/* Search Icons sections */}
      <View className="flex-row items-center space-x-2 px-4 pb-2">
        <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-400">
          <Icon.Search height={25} width={25} stroke="gray" />
          <TextInput placeholder="Enter The place" className="ml-2 flex-1" />
          <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-gray-200">
            <Icon.MapPin height={20} width={20} stroke="gray" />
            <Text className="text-gray-600">Kigali, KN 250st</Text>
          </View>
        </View>
        {/* filter button  */}
        <View
          style={{ backgroundColor: themecolors.bgColor(1) }}
          className="p-3 bg-gray-300 rounded-full"
        >
          <Icon.Sliders height={20} width={20} stroke="gray" />
        </View>
      </View>
      {/* Main sections  */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        {/* Categolies of different components  */}

        <Categolies />

        {/* Feature Home  */}
        <View className="mt-5">
          {[featured, featured, featured].map((el, index) => {
            return (
              <FeatureRow
                key={el.id}
                title={el.title}
                restaurants={el.restaurants}
                decription={el.description}
                
              />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
