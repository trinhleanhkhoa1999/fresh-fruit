import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// First, create the thunk
export const fetchAllProduct = createAsyncThunk('fetchAllProduct', async () => {
  const response = await axios.get('http://localhost:3456/product');
  return response.data.data;
});
