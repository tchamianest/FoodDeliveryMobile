import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import React from "react";
import * as Icon from "react-native-feather";
import { themecolors } from "../theme";

const restaurentCard = ({ el }) => {
  console.log(el, "------------------------ items");
  return (
    <TouchableWithoutFeedback>
      <View
        style={{ shadowColor: themecolors.bgColor(0.2), shadowRadius: 7 }}
        className="mr-6 bg-white rounded-3xl shadow-lg"
      >
        <Image className="h-36 w-64 rounded-l-3xl" source={el.image} />
        <View className="px-3 pb-4 space-y-2">
          <Text className="text-lg font-bold pt-2">{el.name}</Text>
          <View className="flex-row items-center space-x-1">
            <Image source={require("../assets/images/star.png")} />
            <Text className="text-xs">
              <Text className="text-green-700">{el.stars}</Text>
              <Text className="text-gray-700">
                ({el.reviews} reviews) .{" "}
                <Text className="font-semibold">{el.type} </Text>
              </Text>
            </Text>
          </View>
          <View className="flex-row items-center space-x-1">
            <Icon.MapPin color="gray" width={15} height={15} />
            <Text className="text-gray-700 text-xs">NearBy . {el.address}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default restaurentCard;
