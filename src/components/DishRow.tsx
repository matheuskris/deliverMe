import React, { useState } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import {
  MinusCircleIcon,
  PlusCircleIcon,
} from "react-native-heroicons/outline";
import { useDispatch, useSelector } from "react-redux";
import { urlFor } from "../lib/sanity";
import { selectBasketItemWithId } from "../store/basketSlice/basketSelector";
import {
  addToBasket,
  removeFromBasket,
} from "../store/basketSlice/basketSlice";
import { AppDispatch } from "../store/store";
import { Dishe } from "./RestaurantCard";

type DishRowProps = {
  dish: Dishe;
};

const DishRow = ({ dish }: DishRowProps) => {
  const { name, price, image, short_description } = dish;
  const [isPressed, setIsPressed] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const basketItem = useSelector(selectBasketItemWithId(dish._id));

  const addItemToBasket = () => {
    dispatch(addToBasket(dish));
  };

  const removeItemFromBasket = () => {
    if (!basketItem) return;

    dispatch(removeFromBasket(dish));
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        className={`bg-white border p-4 border-gray-200`}
      >
        <View className="flex-row">
          <View className="flex-1 pr-2">
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-gray-400">{short_description} </Text>
            <Text className="text-gray-400 mt-2">{price}</Text>
          </View>
          <View>
            <Image
              source={{
                uri: urlFor(image).url(),
              }}
              className="h-20 w-20 bg-gray-300 p-4"
            />
          </View>
        </View>
      </TouchableOpacity>
      {isPressed && (
        <View className="bg-white px-4 flex-row items-center space-x-2 py-1">
          <TouchableOpacity disabled={!basketItem && true}>
            <MinusCircleIcon
              onPress={removeItemFromBasket}
              color={basketItem ? "#00CCBB" : "gray"}
              size={40}
            />
          </TouchableOpacity>
          <Text> {basketItem ? basketItem.quantity : "0"} </Text>
          <TouchableOpacity>
            <PlusCircleIcon
              onPress={addItemToBasket}
              color="#00CCBB"
              size={40}
            />
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

export default DishRow;
