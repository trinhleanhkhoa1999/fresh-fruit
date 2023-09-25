import { Card, Container, Image, SimpleGrid } from '@mantine/core';
import './styles.scss';
import { AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../redux/store';
import { fetchAllProduct } from './action';

const CardProduct = ({ urlImge, name, price, percentDiscount }: TCardProduct) => {
  const navigate = useNavigate();
  const priceFormat = price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.');
  return (
    <Card padding="lg" className="card-content">
      <Card.Section>
        <Image
          src={urlImge}
          height="auto"
          alt="Banana"
          className="img-card"
          onClick={() => {
            navigate('/detail');
          }}
        />
      </Card.Section>
      <div className="card-icon">
        <span className="icon">
          <AiOutlineHeart />
        </span>
        <span className="icon">
          <AiOutlineShoppingCart />
        </span>
        <span className="icon">
          <AiOutlineHeart />
        </span>
      </div>
      <div className="title-card">{name}</div>
      <div className="card-price">
        <span>{priceFormat}$</span>
        <span>{percentDiscount} %</span>
      </div>
    </Card>
  );
};

export default function Cards() {
  const dispatch = useAppDispatch();
  const { cartProduct } = useAppSelector((state) => state);
  console.log('cartProduct:', cartProduct);
  useEffect(() => {
    dispatch(fetchAllProduct());
  }, []);

  return (
    <Container fluid className="card-container">
      <SimpleGrid
        spacing="xl"
        verticalSpacing="xl"
        cols={4}
        breakpoints={[
          {
            maxWidth: 992,
            cols: 3,
          },
        ]}
      >
        {cartProduct.isSuccess &&
          cartProduct.data.map((val, idx) => <CardProduct key={idx} {...val} />)}
        {/* <CardProduct img={''} title={''} price={''} discountPrice={''} /> */}
      </SimpleGrid>
    </Container>
  );
}
