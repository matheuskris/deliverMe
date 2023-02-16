import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useEffect } from "react";
import { SafeAreaView, Text, View } from "react-native";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { StackParamList } from "../../App";

//<div class="tenor-gif-embed" data-postid="20475644" data-share-method="host" data-aspect-ratio="1" data-width="100%"><a href="https://tenor.com/view/clipp-delivery-kradac-ktaxi-gif-20475644">Clipp Delivery Kradac Sticker</a>from <a href="https://tenor.com/search/clipp+delivery-stickers">Clipp Delivery Stickers</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>}

export type PreOrderProps = NativeStackScreenProps<StackParamList, "Preorder">;

const PreparingOrderScreen = ({ navigation, route }: PreOrderProps) => {
  useEffect(() => {
    setTimeout(() => {
      const restaurant = route.params.restaurantDetails;
      navigation.navigate("Delivery", { restaurantDetails: restaurant });
    }, 4000);
  }, []);

  return (
    <SafeAreaView className="bg-[#00CCBB] flex-1 justify-center items-center">
      <Animatable.Image
        source={require("../../assets/order.gif")}
        animation="slideInUp"
        iterationCount={7}
        className="h-96 w-96"
      />
      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-lg my-10 text-white font-bold text-center"
      >
        Waiting for Restaurant to accept your order!
      </Animatable.Text>
      <Progress.Circle size={60} indeterminate={true} color="white" />
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
