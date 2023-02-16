import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import client from "../lib/sanity";
import CategoryCard from "./CategoryCard";

const category = {
  imgUrl: "https://links.papareact.com/gn7",
  title: "Testing 1",
};

type Category = {
  _id: string;
  image: SanityImageSource;
  name: string;
};

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    client
      .fetch<Category[]>(
        `
    *[_type=="category"] {
      _id,      
      name,
      image,
      }
    `
      )
      .then((data) => {
        setCategories(data);
      });
  }, []);

  return (
    <ScrollView className="py-4 pl-4" horizontal showsHorizontalScrollIndicator>
      {categories.map((cat) => (
        <CategoryCard key={cat._id} imgUrl={cat.image} title={cat.name} />
      ))}
    </ScrollView>
  );
};

export default Categories;
