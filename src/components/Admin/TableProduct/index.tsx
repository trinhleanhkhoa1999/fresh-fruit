import { Button, Image, Pagination, Table } from '@mantine/core';
import { useEffect, useState } from 'react';
import { useAppSelector } from '../../../redux/store';
import './styles.scss';

const pageOffSet = 3;

export default function TableProduct({ handleEdit, handleDelete }: any) {
  const { tableProduct } = useAppSelector((state) => state);

  const [activePage, setPage] = useState(1);

  const [clone, setClone] = useState<TPostProduct[]>([]);

  useEffect(() => {
    if (tableProduct.data.length > 0) {
      setClone(
        tableProduct.data.slice(activePage * pageOffSet - pageOffSet, activePage * pageOffSet)
      );
    }
    console.log('tableProduct useEffect :', tableProduct);
  }, [tableProduct.isSuccess, activePage]);

  return (
    <>
      <Table verticalSpacing="sm" highlightOnHover withColumnBorders>
        <thead>
          <tr>
            <th>STT</th>
            <th>Name product</th>
            <th>Image product</th>
            <th>Price product</th>
            <th>Precent discount product</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {clone.length > 0 ? (
            clone.map((item, idx) => (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{item.name}</td>
                <td>
                  <Image width={100} height={120} src={item.urlImge} alt="Without placeholder" />
                </td>
                <td>{item.price} VNĐ</td>
                <td>{item.percentDiscount} %</td>
                <td>
                  <Button
                    type="button"
                    onClick={() => {
                      handleEdit(item);
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    type="button"
                    onClick={() => {
                      handleDelete(item);
                    }}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td>Chưa có data</td>
            </tr>
          )}
        </tbody>
      </Table>
      <Pagination
        value={activePage}
        onChange={setPage}
        total={Math.ceil(tableProduct.data.length / pageOffSet)}
      />
    </>
  );
}
