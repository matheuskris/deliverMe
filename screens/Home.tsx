import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import {
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
  UserIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";

import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="">
      <View className="bg-white pt-12 flex-row pb-3 items-center px-4">
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className="h-7 w-7 p-4 rounded-full"
        />

        <View className="flex-1 ml-3">
          <Text className="font-bold text-gray-400 text-sm">Deliver Now!</Text>
          <View className="flex-row items-center gap-1">
            <Text className="font-bold text-xl">Localização atual</Text>
            <ChevronDownIcon size={20} color="#00CCBB" />
          </View>
        </View>

        <UserIcon size={34} color="#00CCBB" />
      </View>

      <View className="flex-row items-center gap-4 pb-2 px-4 bg-white">
        <View className="flex-row space-x-2 flex-1 items-center bg-gray-200 p-3 ">
          <MagnifyingGlassIcon color="gray" size={20} />
          <TextInput
            className="flex-1"
            placeholder="Restaurantes"
            keyboardType="default"
          />
        </View>
        <AdjustmentsVerticalIcon color="#00CCBB" />
      </View>

      <ScrollView className="bg-gra">
        <Categories />
        <FeaturedRow
          id="123"
          title="Featured"
          description="paid placemants for partners"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
