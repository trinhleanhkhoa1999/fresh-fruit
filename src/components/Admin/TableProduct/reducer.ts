import { createSlice, current } from '@reduxjs/toolkit';
import { deleteProduct, getAllProduct } from './action';

interface TProductTable {
  data: TTableProduct[];
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
}

const initialState: TProductTable = {
  data: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
};

const tableProduct = createSlice({
  name: 'tableProduct',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(deleteProduct.fulfilled, (state, action) => {
        console.log('action.payload: ', action.payload._id, 'state: ', current(state.data));

        state.data = state.data.filter((item) => item._id !== action.payload._id);
      })
      .addCase(getAllProduct.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(getAllProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.data = action.payload;
      })
      .addCase(getAllProduct.rejected, (state) => {
        state.isError = true;
        state.isSuccess = false;
        state.isLoading = false;
      });
  },
});

// Action creators are generated for each case reducer function

export { tableProduct };
