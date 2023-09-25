import { Button, TextInput } from '@mantine/core';
import { useFormik } from 'formik';
import { useEffect } from 'react';
import { useAppDispatch } from '../../../redux/store';

import { postProduct, putProduct } from './action';

export default function FormProduct({ dataUpdate }: any) {
  const dispatch = useAppDispatch();
  // console.log('dataUpdate for form edit: ', dataUpdate);

  const formik = useFormik<TFormProduct>({
    initialValues: {
      _id: '',
      name: '',
      urlImge: '',
      price: 0,
      percentDiscount: 0,
    },

    onSubmit: (values) => {
      dataUpdate._id ? dispatch(putProduct(values)) : dispatch(postProduct(values));
    },
  });

  useEffect(() => {
    formik.setValues({
      _id: dataUpdate._id,
      name: dataUpdate.name,
      urlImge: dataUpdate.urlImge,
      price: dataUpdate.price,
      percentDiscount: dataUpdate.percentDiscount,
    });
  }, [dataUpdate._id]);

  // Cập nhật table khi post new product success
  // const { tableProduct } = useAppSelector((state) => state);

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextInput
        mb={15}
        type="text"
        placeholder="Name product"
        label="Name product"
        name="name"
        onChange={formik.handleChange}
        value={formik.values.name}
        withAsterisk
      />
      <TextInput
        mb={15}
        type="text"
        placeholder="Url image product"
        label="Url image product"
        name="urlImge"
        onChange={formik.handleChange}
        value={formik.values.urlImge}
        withAsterisk
      />
      <TextInput
        mb={15}
        type="number"
        placeholder="Price product"
        label="Price product"
        name="price"
        onChange={formik.handleChange}
        value={formik.values.price}
        withAsterisk
      />
      <TextInput
        mb={15}
        type="number"
        placeholder="Percent discount product"
        label="Percent discount product"
        name="percentDiscount"
        onChange={formik.handleChange}
        value={formik.values.percentDiscount}
        withAsterisk
      />
      {dataUpdate._id ? <Button type="submit">Update</Button> : <Button type="submit">Add</Button>}
    </form>
  );
}
