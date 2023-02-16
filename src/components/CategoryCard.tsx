import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { urlFor } from "../lib/sanity";

type CategoryPropsType = {
  imgUrl: SanityImageSource;
  title: string;
};

const CategoryCard = ({ imgUrl, title }: CategoryPropsType) => {
  return (
    <TouchableOpacity className="h-20 w-20 rounded relative mr-2">
      <Image source={{ uri: urlFor(imgUrl).url() }} className="h-20 w-20" />
      <Text className="absolute bottom-1 left-1 text-white font-bold">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
