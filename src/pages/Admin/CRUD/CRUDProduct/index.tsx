import { useState, useEffect } from 'react';
import FormProduct from '../../../../components/Admin/FormProduct';
import TableProduct from '../../../../components/Admin/TableProduct';
import { deleteProduct, getAllProduct } from '../../../../components/Admin/TableProduct/action';
import { useAppDispatch, useAppSelector } from '../../../../redux/store';
import './styles.scss';

export default function CRUDProduct() {
  const dispatch = useAppDispatch();
  const { formProduct } = useAppSelector((state) => state);

  const [dataUpdate, setDataUpdate] = useState({});
  const handleEdit = (editPro: any) => {
    setDataUpdate(editPro);
  };
  const handleDelete = (idPro: any) => {
    // console.log('idPro: ', idPro);
    dispatch(deleteProduct(idPro._id));
  };

  useEffect(() => {
    dispatch(getAllProduct());
  }, [formProduct.isSuccess]);

  return (
    <div className="CRUD-product-container">
      <h1>Form add product</h1>
      <FormProduct dataUpdate={dataUpdate} />
      <hr />
      <div>
        <TableProduct handleEdit={handleEdit} handleDelete={handleDelete} />
      </div>
    </div>
  );
}
