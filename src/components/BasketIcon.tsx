import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";

import {
  selectBasketItems,
  selectBasketTotal,
} from "../store/basketSlice/basketSelector";

import { RestScreenRouteProps } from "../screens/RestaurantScreen";
import { Restaurant } from "./RestaurantCard";
import { StackParamList } from "../../App";

type BasketIconProps = {
  restaurant: Restaurant;
};

type Navigation = RestScreenRouteProps["navigation"];

export default function BasketIcon({ restaurant }: BasketIconProps) {
  const items = useSelector(selectBasketItems);
  const navigation = useNavigation<Navigation>();
  const basketTotal = useSelector(selectBasketTotal);

  if (items.length === 0) return null;

  const numberOfItems = items.reduce((total, item) => {
    total += item.quantity;
    return total;
  }, 0);

  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Basket", {
            restaurantDetails: restaurant,
          })
        }
        className="mx-5 bg-[#00CCBB] p-4 items-center rounded-lg flex-row"
      >
        <Text className="text-white font-extrabold text-lg bg-[#01A296] py-1 px-2">
          {numberOfItems}
        </Text>
        <Text className="flex-1 text-white font-extrabold text-lg text-center">
          View Basket
        </Text>
        <Text className="text-lg text-white font-extrabold">{basketTotal}</Text>
      </TouchableOpacity>
    </View>
  );
}
