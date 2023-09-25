import { createAsyncThunk } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';

import axios from 'axios';

// First, create the thunk
const postProduct = createAsyncThunk(
  'postProduct',
  async ({ name, urlImge, price, percentDiscount }: TFormProduct) => {
    try {
      const res = await axios.post('http://localhost:3456/product', {
        name,
        urlImge,
        price: String(price),
        percentDiscount: String(percentDiscount),
      });
      Notiflix.Notify.success('Create new product success');
      return res.data.data;
    } catch (error) {
      Notiflix.Notify.failure('Input not be empty');
      return error;
    }
  }
);

const putProduct = createAsyncThunk(
  'putProduct',
  async ({ _id, name, urlImge, price, percentDiscount }: TFormProduct) => {
    try {
      const res = await axios.put(`http://localhost:3456/product/${_id}`, {
        _id,
        name,
        urlImge,
        price: String(price),
        percentDiscount: String(percentDiscount),
      });
      Notiflix.Notify.success('Update product success');
      return res.data.data;
    } catch (error) {
      Notiflix.Notify.failure('Input not be empty');
      return error;
    }
  }
);
export { postProduct, putProduct };
