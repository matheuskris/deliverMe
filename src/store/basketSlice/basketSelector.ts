import { RootReducer } from "../store";

export const selectBasketItems = (state: RootReducer) => state.basket.items;

export const selectBasketItemWithId = (id: string) => (state: RootReducer) =>
  state.basket.items.filter((item) => item._id == id)[0];

export const selectBasketTotal = (state: RootReducer) =>
  state.basket.items.reduce(
    (total, item) => (total += item.price * item.quantity),
    0
  );
