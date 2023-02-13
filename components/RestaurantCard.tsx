import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { StarIcon, MapPinIcon } from "react-native-heroicons/outline";

type Dishe = {
  name: string;
};

type RestCardProps = {
  id: string;
  imgUrl: string;
  title: string;
  rating: number;
  genre: string;
  adress: string;
  shortDescription: string;
  dishes: Dishe[];
  long: number;
  lat: number;
};

const RestaurantCard = (props: RestCardProps) => {
  const { imgUrl, title, rating, genre, adress } = props;
  return (
    <TouchableOpacity className="bg-white mr-3 shadow">
      <Image source={{ uri: imgUrl }} className="h-36 w-64 rounded-sm" />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-center gap-1">
          <StarIcon color="green" opacity={0.49} size={22} />
          <View className="flex-row">
            <Text className="text-sm text-green-500">{rating}</Text>
            <Text> · </Text>
            <Text className="text-sm text-gray-500">{genre}</Text>
          </View>
        </View>

        <View className="flex-row items-center space-x-1">
          <MapPinIcon color="gray" opacity="0.4" size={22} />
          <Text className="text-xm text-gray-500">Nearby · {adress}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
