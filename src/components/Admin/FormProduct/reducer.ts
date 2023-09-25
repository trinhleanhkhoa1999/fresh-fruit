import { createSlice } from '@reduxjs/toolkit';
import { postProduct } from './action';

interface TFormProduct {
  data: TPostProduct[] | any;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
}

const initialState: TFormProduct = {
  data: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
};

const formProduct = createSlice({
  name: 'formProduct',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(postProduct.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(postProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.data = action.payload;
      })
      .addCase(postProduct.rejected, (state) => {
        state.isError = true;
        state.isSuccess = false;
        state.isLoading = false;
      });
  },
});

// Action creators are generated for each case reducer function

export { formProduct };
