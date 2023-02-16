import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StarIcon, MapPinIcon } from "react-native-heroicons/outline";

import { urlFor } from "../lib/sanity";
import { StackParamList } from "../../App";

type Props = NativeStackScreenProps<StackParamList, "Restaurant">;

export type Dishe = {
  _id: string;
  name: string;
  short_description: string;
  price: number;
  image: SanityImageSource;
};

export type Restaurant = {
  _id: string;
  image: SanityImageSource;
  name: string;
  rating: number;
  type: {
    image: SanityImageSource;
    name: string;
  };
  adress: string;
  short_description: string;
  dishes: Dishe[];
  long: number;
  lat: number;
};

type RestaurantCardProps = {
  restaurant: Restaurant;
};

const RestaurantCard = ({ restaurant }: RestaurantCardProps) => {
  const { image, name, rating, type, adress } = restaurant;

  const navigation = useNavigation<Props["navigation"]>();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Restaurant", { restaurantDetails: restaurant })
      }
      className="bg-white mr-3 shadow"
    >
      <View className="h-36 w-64 rounded-sm">
        <Image
          source={{ uri: urlFor(image).url() }}
          className="w-64 h-36"
          resizeMode="contain"
        />
      </View>
      <View className="px-3 pb-4 w-64">
        <Text className="font-bold text-lg pt-2">{name}</Text>
        <View className="flex-row items-center gap-1">
          <StarIcon color="green" opacity={0.49} size={22} />
          <View className="flex-row">
            <Text className="text-sm text-green-500">{rating}</Text>
            <Text> · </Text>
            <Text className="text-sm text-gray-500">{type.name}</Text>
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
