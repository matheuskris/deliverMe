import React, { useEffect, useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { XCircleIcon } from "react-native-heroicons/solid";
import { useDispatch, useSelector } from "react-redux";

import {
  selectBasketItems,
  selectBasketTotal,
} from "../store/basketSlice/basketSelector";
import { removeFromBasket } from "../store/basketSlice/basketSlice";
import { urlFor } from "../lib/sanity";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParamList } from "../../App";

export type RestScreenRouteProps = NativeStackScreenProps<
  StackParamList,
  "Basket"
>;

export default function BasketScreen({
  navigation,
  route,
}: RestScreenRouteProps) {
  const restaurant = route.params.restaurantDetails;
  const basketTotal = useSelector(selectBasketTotal);
  const items = useSelector(selectBasketItems);
  const dispatch = useDispatch();

  return (
    <SafeAreaView className="mt-32 flex-1 bg-white">
      <View className="flex-1 bg-gray-100">
        <View className="p-5 border-b border-[#00CCBB] bg-white shadow-xs">
          <View>
            <Text className="text-lg font-bold text-center">Basket</Text>
            <Text className="text-center text-gray-400">{restaurant.name}</Text>
          </View>
          <TouchableOpacity
            onPress={navigation.goBack}
            className="rounded-full bg-gray-100 absolute top-3 right-5"
          >
            <XCircleIcon color="#00CCBB" height={50} width={50} />
          </TouchableOpacity>
        </View>
        <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
          <Image
            source={{
              uri: "https://www.pngitem.com/pimgs/m/533-5338534_motor-21-philosophychicchic-home-delivery-service-bike-hd.png",
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
          <Text className="flex-1">Deliver in 50-70 min</Text>
          <TouchableOpacity>
            <Text className="text-[#00CCBB]">Change</Text>
          </TouchableOpacity>
        </View>
        <ScrollView className="divide-y divide-gray-200">
          {items.map((item) => (
            <View
              key={item._id}
              className="flex-row items-center space-x-3 bg-white py-2 px-5"
            >
              <Text className="text-[#00CCBB]">{item.quantity} x</Text>
              <Image
                source={{ uri: urlFor(item.image).url() }}
                className="h-12 w-12 rounded-full"
              />
              <Text className="flex-1">{item.name}</Text>
              <Text className="text-gray-600">{item.price}</Text>
              <TouchableOpacity>
                <Text
                  className="text-[#00CCBB] text-xs"
                  onPress={() => dispatch(removeFromBasket(item))}
                >
                  Remove
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        <View className="p-5 bg-white mt-5 space-y-4">
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Total do Pedido</Text>
            <Text className="text-gray-400">{basketTotal}</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Taxa de Entrega</Text>
            <Text className="text-gray-400">2.99</Text>
          </View>
          <View className="flex-row justify-between">
            <Text>Valor Total</Text>
            <Text className="font-extrabold">{basketTotal + 2.99}</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Preorder", {
                restaurantDetails: restaurant,
              });
            }}
            className="rounded-lg bg-[#00CCBB] p-4"
          >
            <Text className="text-center text-white text-lg font-bold">
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
