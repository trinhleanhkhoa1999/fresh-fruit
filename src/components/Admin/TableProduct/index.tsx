import { Button, Image, Table } from '@mantine/core';
import { useAppSelector } from '../../../redux/store';
import './styles.scss';

export default function TableProduct({ handleEdit, handleDelete }: any) {
  const { tableProduct } = useAppSelector((state) => state);

  const rows =
    tableProduct.isSuccess &&
    tableProduct.data.map((item, idx) => (
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
    ));

  return (
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
        {tableProduct.isSuccess ? (
          rows
        ) : (
          <tr>
            <td>Chưa có data</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
}
