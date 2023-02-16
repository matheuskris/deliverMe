import React, { useLayoutEffect } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  ArrowLeftIcon,
  StarIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
  ChevronRightIcon,
} from "react-native-heroicons/outline";

import { StackParamList } from "../../App";
import { urlFor } from "../lib/sanity";
import DishRow from "../components/DishRow";
import BasketIcon from "../components/BasketIcon";

export type RestScreenRouteProps = NativeStackScreenProps<
  StackParamList,
  "Restaurant"
>;

const RestaurantScreen = ({ navigation, route }: RestScreenRouteProps) => {
  const restaurant = route.params.restaurantDetails;
  const {
    _id,
    image,
    name,
    rating,
    type,
    adress,
    short_description,
    dishes,
    long,
    lat,
  } = restaurant;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <>
      <BasketIcon restaurant={restaurant} />
      <ScrollView>
        <View className="relative">
          <Image
            source={{ uri: urlFor(image).url() }}
            className="h-56 bg-gray-300 p-4"
          />
          <TouchableOpacity
            onPress={navigation.goBack}
            className="absolute top-14 left-5 bg-gray-100 rounded-full p-2"
          >
            <ArrowLeftIcon size={20} color="#00CCBB" />
          </TouchableOpacity>
        </View>
        <View className="bg-white">
          <View className="px-4 pt-4">
            <Text className="text-3xl font-bold">{name}</Text>
            <View className="flex-row space-x-2 my-1">
              <View className="flex-row item-center space-x-1">
                <StarIcon color="green" opacity={0.5} size={22} />
                <View className="flex-row text-xs items-center text-gray-500">
                  <Text className="text-green-500">{rating}</Text>
                  <Text> · </Text>
                  <Text>{type.name}</Text>
                </View>
              </View>
              <View className="flex-row items-center space-x-1">
                <MapPinIcon color="gray" opacity={0.4} size={22} />
                <Text className="text-xs text-gray-500">Nearby · {adress}</Text>
              </View>
            </View>
            <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
          </View>
        </View>
        <TouchableOpacity className="flex-row bg-white items-center space-x-2 p-4 border-y border-gray-300">
          <QuestionMarkCircleIcon color="gray" opacity={0.6} size={20} />
          <Text className="pl-2 flex-1 text-md font-bold">
            Have a food allergy
          </Text>
          <ChevronRightIcon color="#00CCBB" />
        </TouchableOpacity>
        <View className="pb-36">
          <Text className="px-4 pt-6 font-bold text-xl">Menu</Text>
          {dishes.map((dish) => (
            <DishRow key={dish.name} dish={dish} />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default RestaurantScreen;
