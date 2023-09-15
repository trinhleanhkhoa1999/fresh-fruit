import { Card, Container, Image, SimpleGrid } from '@mantine/core';
import './styles.scss';
import { AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import product1 from '../../assets/img/product1.png';
import product2 from '../../assets/img/product2.png';
import product3 from '../../assets/img/product3.png';
import product4 from '../../assets/img/product4.png';

type TCardProduct = {
  img: string;
  title: string;
  price: string;
  discountPrice: string;
};
const CardProduct = ({ img, title, price, discountPrice }: TCardProduct) => {
  const navigate = useNavigate();
  const priceFormat = price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.');
  const discountPriceFormat = discountPrice.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.');
  return (
    <Card padding="lg" className="card-content">
      <Card.Section>
        <Image
          src={img}
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
      <div className="title-card">{title}</div>
      <div className="card-price">
        <span>{priceFormat}$</span>
        <span>{discountPriceFormat} $</span>
      </div>
    </Card>
  );
};

export default function Cards() {
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
        {[
          { img: product1, title: 'Banana', price: '20000', discountPrice: '10000' },
          { img: product2, title: 'Banana', price: '20000', discountPrice: '10000' },
          { img: product3, title: 'Banana', price: '20000', discountPrice: '10000' },
          { img: product4, title: 'Banana', price: '20000', discountPrice: '10000' },
          { img: product4, title: 'Banana', price: '20000', discountPrice: '10000' },
          { img: product4, title: 'Banana', price: '20000', discountPrice: '10000' },
          { img: product4, title: 'Banana', price: '20000', discountPrice: '10000' },
        ].map((val, idx) => (
          <CardProduct key={idx} {...val} />
        ))}
      </SimpleGrid>
    </Container>
  );
}
