import { ScrollView, Text, View } from "react-native";
import CategoryCard from "./CategoryCard";

const categories = [
  {
    imgUrl: "https://links.papareact.com/gn7",
    title: "Testing 1",
  },
  {
    imgUrl: "https://links.papareact.com/gn7",
    title: "Testing 2",
  },
  {
    imgUrl: "https://links.papareact.com/gn7",
    title: "Testing 3",
  },
  {
    imgUrl: "https://links.papareact.com/gn7",
    title: "Testing 4",
  },
  {
    imgUrl: "https://links.papareact.com/gn7",
    title: "Testing 6",
  },
  {
    imgUrl: "https://links.papareact.com/gn7",
    title: "Testing 7",
  },
  {
    imgUrl: "https://links.papareact.com/gn7",
    title: "Testing 8",
  },
  {
    imgUrl: "https://links.papareact.com/gn7",
    title: "Testing 9",
  },
];

const Categories = () => {
  return (
    <ScrollView className="py-4 pl-4" horizontal showsHorizontalScrollIndicator>
      {categories.map((cat) => (
        <CategoryCard key={cat.title} imgUrl={cat.imgUrl} title={cat.title} />
      ))}
    </ScrollView>
  );
};

export default Categories;
