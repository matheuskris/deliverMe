import React from "react";
import { View, Text, ScrollView } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard, { Restaurant } from "./RestaurantCard";

export type Featured = {
  _id: string;
  name: string;
  short_description: string;
  restaurants: Restaurant[];
};

export type FeaturedRowType = {
  featured: Featured;
};

const FeaturedRow = (props: FeaturedRowType) => {
  const { name, short_description, restaurants } = props.featured;
  return (
    <View className="px-4">
      <View className="mt-4 flex-row items-center justify-between">
        <Text className="font-bold text-xl">{name}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-sm text-gray-500 mb-3">{short_description}</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {restaurants?.map((rest) => (
          <RestaurantCard key={rest._id} restaurant={rest} />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
