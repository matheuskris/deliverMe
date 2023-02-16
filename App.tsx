import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";

import HomeScreen from "./src/screens/Home";
import RestaurantScreen from "./src/screens/RestaurantScreen";
import { Restaurant } from "./src/components/RestaurantCard";
import { store } from "./src/store/store";
import BasketScreen from "./src/screens/BasketScreen";
import PreparingOrderScreen from "./src/screens/PreparingOrderScreen";
import DeliveryScreen from "./src/screens/DeliveryScreen";

export type StackParamList = {
  Home: undefined;
  Restaurant: { restaurantDetails: Restaurant };
  Basket: { restaurantDetails: Restaurant };
  Preorder: { restaurantDetails: Restaurant };
  Delivery: { restaurantDetails: Restaurant };
};

const Stack = createNativeStackNavigator<StackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Restaurant" component={RestaurantScreen} />
          <Stack.Screen
            name="Basket"
            component={BasketScreen}
            options={{ presentation: "modal", headerShown: false }}
          />
          <Stack.Screen
            name="Preorder"
            component={PreparingOrderScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Delivery"
            component={DeliveryScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
