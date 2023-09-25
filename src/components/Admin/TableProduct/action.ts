import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Notiflix from 'notiflix';

// First, create the thunk
const getAllProduct = createAsyncThunk('getAllProduct', async () => {
  const response = await axios.get('http://localhost:3456/product');
  return response.data.data;
});
const deleteProduct = createAsyncThunk('deleteProduct', async (idPro: any) => {
  try {
    const res = await axios.delete(`http://localhost:3456/product/${idPro}`);

    Notiflix.Notify.success('Delete product success');
    return res.data.data;
  } catch (error) {
    Notiflix.Notify.failure('Dont delete product');
    return error;
  }
});

export { getAllProduct, deleteProduct };
