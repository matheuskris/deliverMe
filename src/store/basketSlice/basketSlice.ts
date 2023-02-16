import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Dishe } from "../../components/RestaurantCard";

type BasketDish = Dishe & {
  quantity: number;
};

type BascketState = {
  items: BasketDish[];
};

const initialState: BascketState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action: PayloadAction<Dishe>) => {
      const index = state.items.findIndex(
        (item) => item._id === action.payload._id
      );

      if (index >= 0) {
        state.items[index] = {
          ...state.items[index],
          quantity: state.items[index].quantity + 1,
        };
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromBasket: (state, action: PayloadAction<Dishe>) => {
      const index = state.items.findIndex(
        (item) => item._id === action.payload._id
      );
      if (state.items[index].quantity > 1) {
        state.items[index].quantity--;
      } else if (state.items[index].quantity === 1) {
        state.items.splice(index, 1);
      }
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

export default basketSlice.reducer;
