import {
  Button,
  Center,
  Container,
  Grid,
  Group,
  Image,
  Indicator,
  Popover,
  TextInput,
} from '@mantine/core';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  AiFillSetting,
  AiFillFacebook,
  AiOutlineInstagram,
  AiFillGithub,
  AiOutlineGitlab,
} from 'react-icons/ai';
import { GrLanguage } from 'react-icons/gr';
import { SiZalo } from 'react-icons/si';
import { FiDelete } from 'react-icons/fi';
import { GiShoppingCart } from 'react-icons/gi';
import { MdAccountCircle, MdOutlineAttachMoney } from 'react-icons/md';
import logo from '../../assets/img/logo.png';

import './styles.scss';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { deleteItemInCart } from '../Cards/reducer';

type TPopoverCustomize = {
  icon: any;
  label: string;
  content: any[];
};

type TContent = {
  content: any[];
};

const PopoverCustomize = ({ icon, label, content }: TPopoverCustomize) => (
  <Popover width={200} position="bottom" withArrow shadow="md">
    <Popover.Target>
      <Center style={{ gap: '10px' }}>
        {icon}
        <p>{label}</p>
      </Center>
    </Popover.Target>
    <Popover.Dropdown>
      <div>
        {content.map((item, idx) =>
          item.to ? (
            <div className="header-popover" key={idx}>
              <NavLink to={item.to} key={idx}>
                <Button leftIcon={item.icon} variant="white" color="dark" fullWidth>
                  {item.content}
                </Button>
              </NavLink>
            </div>
          ) : (
            <Button leftIcon={item.icon} variant="white" color="dark" fullWidth key={idx}>
              {item.content}
            </Button>
          )
        )}
      </div>
    </Popover.Dropdown>
  </Popover>
);

const PopoverCartProduct = ({ content }: TContent) => {
  const { cartProduct } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const handleDeleteCart = (del: any) => {
    dispatch(deleteItemInCart(del));
  };
  const navigate = useNavigate();

  return (
    <Popover width={300} position="bottom" withArrow shadow="md">
      <Popover.Target>
        <div className="header-cart">
          <Group position="center">
            <Indicator inline label={cartProduct.value} size={16}>
              <GiShoppingCart />
            </Indicator>
          </Group>

          <p>Cart</p>
        </div>
      </Popover.Target>
      {content.length > 0 && (
        <Popover.Dropdown>
          {content.map((val: any, idx: any) => (
            <div className="cart-content-container" key={idx}>
              <div className="cart-img">
                <Image
                  width={50}
                  height={70}
                  fit="contain"
                  src={val.urlImge}
                  mx="auto"
                  onClick={() => {
                    navigate(`/detail/${val._id} `);
                  }}
                />
              </div>
              <div className="cart-content">
                <div className="cart-content-product">
                  <span>{val.name}</span>
                  <span>
                    <FiDelete onClick={() => handleDeleteCart(val)} />
                  </span>
                </div>
                <span>{val.price}</span>
              </div>
            </div>
          ))}
        </Popover.Dropdown>
      )}
    </Popover>
  );
};

export default function Header() {
  const { cartProduct } = useAppSelector((state) => state);
  return (
    <>
      {/* header1 */}
      <Container fluid className="header-container">
        <Grid>
          <Grid.Col lg={3} p={0} sm={12} xs={6}>
            <div className="header-title">Welcome to organic foods & Fruits</div>
          </Grid.Col>
          <Grid.Col className="test" lg="auto" p={0} sm={4} xs={6}>
            <Group position="apart">
              {/* setting */}
              <PopoverCustomize
                icon={<AiFillSetting />}
                label="Setting"
                content={[
                  { icon: <MdOutlineAttachMoney />, content: ' Currency' },
                  { icon: <GrLanguage />, content: ' Language' },
                ]}
              />
              {/* account */}
              <PopoverCustomize
                icon={<MdAccountCircle />}
                label="My account"
                content={[
                  { icon: <MdOutlineAttachMoney />, content: ' Sign in', to: 'login' },
                  { icon: <GrLanguage />, content: ' Register', to: 'register' },
                ]}
              />
            </Group>
          </Grid.Col>
          <Grid.Col lg={1} p={0} sm={2} xs={3}>
            <div className="header-cart">
              <PopoverCartProduct content={cartProduct.cart} />
            </div>
          </Grid.Col>
          <Grid.Col lg={3} p={0} sm={6} xs={9}>
            <ul className="icon">
              {[
                <AiFillFacebook />,
                <AiOutlineInstagram />,
                <AiFillGithub />,
                <AiOutlineGitlab />,
                <SiZalo />,
                <AiFillFacebook />,
              ].map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </Grid.Col>
        </Grid>
      </Container>
      {/* header2 */}
      <Container fluid className="header-container-2 ">
        <Grid>
          <Grid.Col lg={2} md={12}>
            <Image maw={240} mx="auto" radius="md" src={logo} alt="Random image" />
          </Grid.Col>
          <Grid.Col lg={6} md={6} xs={12}>
            <ul className="header-menu">
              <li>
                <NavLink to="/"> Home</NavLink>
              </li>
              <li>
                <NavLink to="about"> About</NavLink>
              </li>
              <li>
                <NavLink to="blog"> Blog</NavLink>
              </li>
              <li>
                <NavLink to="contact">Contact</NavLink>
              </li>
              <li>
                <NavLink to="shop"> Shop</NavLink>
              </li>
            </ul>
          </Grid.Col>
          <Grid.Col lg={4} md={6} xs={12}>
            <div className="header-search">
              <TextInput placeholder="Search...." />
              <Button color="orange">Search</Button>
            </div>
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
}
