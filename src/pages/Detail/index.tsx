import { useState, useRef, useEffect } from 'react';
import {
  ActionIcon,
  Button,
  Container,
  Grid,
  Group,
  Image,
  NumberInput,
  NumberInputHandlers,
  rem,
} from '@mantine/core';
import { GiShoppingCart } from 'react-icons/gi';
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import './styles.scss';
import { useAppSelector } from '../../redux/store';

export default function DetailPage() {
  const [isImage] = useState<boolean>(true);
  const [value, setValue] = useState<number | ''>(0);
  const [dataDetailProduct, setDataDetailProduct] = useState<TCardProduct[]>([]);

  const { cartProduct } = useAppSelector((state) => state);
  // console.log('cartProduct detail page: ', cartProduct);

  const handlers = useRef<NumberInputHandlers | any>();

  const { id } = useParams();

  useEffect(() => {
    setDataDetailProduct(cartProduct.data.filter((item) => item._id === id));
    console.log('dataDetailProduct: ', dataDetailProduct);
  }, [id]);
  return (
    <div>
      {dataDetailProduct &&
        dataDetailProduct.map((item, idx) => (
          <Container className="detail-container" key={idx}>
            <Grid>
              <Grid.Col span={4}>
                <div>
                  {isImage ? (
                    <Image
                      src={item.urlImge}
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
                <h1 className="detail-title">{item.name}</h1>
                <div className="detail-des">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit est impedit iste
                  velit fugiat quas iusto incidunt dignissimos, sunt expedita voluptatibus quidem,
                  eos alias delectus. Corrupti repellat ea sit tempore!
                </div>
                <hr />
                <div className="up-dow-product">
                  <Group spacing={5}>
                    <ActionIcon
                      size={42}
                      variant="default"
                      onClick={() => handlers.current.decrement()}
                    >
                      –
                    </ActionIcon>

                    <NumberInput
                      hideControls
                      value={value}
                      onChange={(val) => setValue(val)}
                      handlersRef={handlers}
                      max={10}
                      min={0}
                      step={1}
                      styles={{ input: { width: rem(54), textAlign: 'center' } }}
                    />

                    <ActionIcon
                      size={42}
                      variant="default"
                      onClick={() => handlers.current.increment()}
                    >
                      +
                    </ActionIcon>
                  </Group>
                </div>
                <hr />
                <span>{item.price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')} VDN</span>
                <hr />
                <div className="detail-add-to-cart">
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
        ))}
    </div>
  );
}
