import { createSlice } from '@reduxjs/toolkit';
import { fetchAllProduct } from './action';

interface CounterState {
  data: TCardProduct[];
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
}

const initialState: CounterState = {
  data: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
};

const cartProduct = createSlice({
  name: 'cartProduct',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAllProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data = action.payload;
      })
      .addCase(fetchAllProduct.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
      });
  },
});

// Action creators are generated for each case reducer function

export { cartProduct };
