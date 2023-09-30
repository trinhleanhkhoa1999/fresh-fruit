import { createSlice, current } from '@reduxjs/toolkit';
import { fetchAllProduct } from './action';

interface CounterState {
  data: TCardProduct[];
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  value: number;
  cart: { _id?: string; name: string; urlImge: string; price: number; percentDiscount: number }[];
}

const initialState: CounterState = {
  data: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  value: 0,
  cart: [],
};

const cartProduct = createSlice({
  name: 'cartProduct',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },

    addToCart: (state: any, action) => {
      state.cart = [
        ...state.cart,
        {
          _id: action.payload._id,
          name: action.payload.name,
          urlImge: action.payload.urlImge,
          price: action.payload.price,
          percentDiscount: action.payload.percentDiscount,
        },
      ];
    },
    deleteItemInCart: (state: any, action) => {
      console.log('action deleteItemInCart: ', action.payload);
      console.log('state deleteItemInCart: ', current(state.cart));
      state.cart = state.cart.filter((item: any) => item._id !== action.payload._id);
      state.value -= 1;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchAllProduct.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(fetchAllProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.data = action.payload;
      })
      .addCase(fetchAllProduct.rejected, (state) => {
        state.isError = true;
        state.isSuccess = false;
        state.isLoading = false;
      });
  },
});

// Action creators are generated for each case reducer function
export const { increment, addToCart, deleteItemInCart } = cartProduct.actions;

export { cartProduct };
