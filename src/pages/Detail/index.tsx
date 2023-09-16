import React, { useState } from 'react';
import { Button, Container, Grid, Group, Image } from '@mantine/core';
import { GiShoppingCart } from 'react-icons/gi';
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import product1 from '../../assets/img/product1.png';
import './styles.scss';

export default function DetailPage() {
  const [isImage, setisImage] = useState<boolean>(true);
  const [counter, setCounter] = useState(1);

  const currentPrice = 15000;
  const [price, setPrice] = useState(currentPrice);

  const priceFormat = price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.');

  const handleIncrease = () => {
    setCounter(counter + 1);
    setPrice(currentPrice + price);
  };
  const handleDecrease = () => {
    setCounter(counter - 1);
    setPrice(price - currentPrice);
  };
  return (
    <div>
      <Container className="detail-container">
        <Grid>
          <Grid.Col span={4}>
            <div>
              {isImage ? (
                <Image
                  src={product1}
                  alt="With default placeholder"
                  fit="contain"
                  maw="auto"
                  mx="auto"
                  withPlaceholder
                />
              ) : (
                <Image
                  width="auto"
                  height={200}
                  src={null}
                  alt="With default placeholder"
                  withPlaceholder
                />
              )}
            </div>
          </Grid.Col>
          <Grid.Col span={8}>
            <h1 className="detail-title">Banana</h1>
            <div className="detail-des">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit est impedit iste velit
              fugiat quas iusto incidunt dignissimos, sunt expedita voluptatibus quidem, eos alias
              delectus. Corrupti repellat ea sit tempore!
            </div>
            <hr />
            <div className="up-dow-product">
              <span onClick={handleIncrease}>+</span>
              <span>{counter}</span>
              <span onClick={handleDecrease}>-</span>
            </div>
            <hr />
            <h2>{priceFormat} $</h2>
            <hr />
            <div className="detail-add">
              <Group position="center">
                <Button type="button" className="detail-btn">
                  <GiShoppingCart />
                  ADD TO CART
                </Button>
              </Group>
              <span className="icon">
                <AiOutlineHeart />
              </span>
              <span className="icon">
                <AiOutlineShoppingCart />
              </span>
            </div>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}
