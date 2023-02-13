import React from "react";
import { View, Text, ScrollView } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

type FeaturedRowType = {
  id: string;
  title: string;
  description: string;
};

const FeaturedRow = (props: FeaturedRowType) => {
  const { title, description } = props;
  return (
    <View className="px-4">
      <View className="mt-4 flex-row items-center justify-between">
        <Text className="font-bold text-xl">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-sm text-gray-500 mb-3">{description}</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <RestaurantCard
          id="123"
          imgUrl="https://links.papareact.com/gn7"
          title="yoSushi"
          rating={4.3}
          genre="japanese"
          adress="123 main str"
          shortDescription="this is a test description"
          dishes={[]}
          long={20}
          lat={10}
        />
        <RestaurantCard
          id="123"
          imgUrl="https://links.papareact.com/gn7"
          title="yoSushi"
          rating={4.3}
          genre="japanese"
          adress="123 main str"
          shortDescription="this is a test description"
          dishes={[]}
          long={20}
          lat={10}
        />
        <RestaurantCard
          id="123"
          imgUrl="https://links.papareact.com/gn7"
          title="yoSushi"
          rating={4.3}
          genre="japanese"
          adress="123 main str"
          shortDescription="this is a test description"
          dishes={[]}
          long={20}
          lat={10}
        />
        <RestaurantCard
          id="123"
          imgUrl="https://links.papareact.com/gn7"
          title="yoSushi"
          rating={4.3}
          genre="japanese"
          adress="123 main str"
          shortDescription="this is a test description"
          dishes={[]}
          long={20}
          lat={10}
        />
        <RestaurantCard
          id="123"
          imgUrl="https://links.papareact.com/gn7"
          title="yoSushi"
          rating={4.3}
          genre="japanese"
          adress="123 main str"
          shortDescription="this is a test description"
          dishes={[]}
          long={20}
          lat={10}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
