import { View, Text, Image, TouchableOpacity, Linking } from "react-native";
import React from "react";
import * as Icon from "react-native-feather";
import { featured } from "../constants";
import { useNavigation } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";
import { themecolors } from "../theme";
export default function DeliveryScreen() {
  const restaurant = featured.restaurants[0];
  const navigate = useNavigation();

  const makePhoneCall = (phoneNumber) => {
    const url = `tel:${`0789696745`}`;
    Linking.openURL(url).catch((err) =>
      console.error("Error opening URL:", err)
    );
  };
  return (
    <View className="flex-1 ">
      {/* map view  */}
      <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.lang,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        className="flex-1"
        mapType="standard"
      >
        <Marker
          coordinate={{
            latitude: restaurant.lat,
            longitude: restaurant.lang,
          }}
          title={restaurant.name}
          description={restaurant.description}
          pinColor={themecolors.bgColor(1)}
          className="flex-1"
          mapType="standard"
        />
      </MapView>
      <View className="rounded-t-3xl -mt-12 bg-white relative">
        <View className="flex-row justify-between px-5 pt-10">
          <View>
            <Text className="text-lg text-gray-700 font-semibold">
              Estimated Arrival time
            </Text>
            <Text className="text-3xl font-extrabold text-gray-700">
              20-30 Minutes
            </Text>
            <Text className="mt-2 text-gray-700 font-semibold">
              Your order is own its way!
            </Text>
          </View>
          <Image
            className="w-24 h-24"
            source={require("../assets/images/categories/bugger.png")}
          />
        </View>
        <View
          style={{ backgroundColor: themecolors.bgColor(0.8) }}
          className="p-2 flex-row justify-between  items-center rounded-full my-5 mx-2"
        >
          <View
            className="p-1 rounded-full"
            style={{ backgroundColor: "rgba(255,255,255,0.4)" }}
          >
            <Image
              className="h-16 w-16 rounded-full"
              source={require("../assets/favicon.png")}
            />
          </View>
          <View className="text-lg font-bold text-white">
            <Text className="text-lg font-bold text-white">Syed Noman</Text>
            <Text className="text-lg font-bold text-white">Your Rider</Text>
          </View>
          <View className="flex-row items-center space-x-3 mr-3">
            <TouchableOpacity
              onPress={makePhoneCall}
              className=" bg-white p-2 rounded-full"
            >
              <Icon.Phone
                fill={themecolors.bgColor(1)}
                stroke={themecolors.bgColor(1)}
                strokeWidth={1}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigate.navigate("Home")}
              className=" bg-white p-2 rounded-full"
            >
              <Icon.X
                fill={themecolors.bgColor(1)}
                strokeWidth={1}
                stroke="red"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
