import { Button, Center, Container, Grid, Group, Image, Popover, TextInput } from '@mantine/core';
import { NavLink } from 'react-router-dom';
import {
  AiFillSetting,
  AiFillFacebook,
  AiOutlineInstagram,
  AiFillGithub,
  AiOutlineGitlab,
} from 'react-icons/ai';
import { GrLanguage } from 'react-icons/gr';
import { SiZalo } from 'react-icons/si';
import { GiShoppingCart } from 'react-icons/gi';
import { MdAccountCircle, MdOutlineAttachMoney } from 'react-icons/md';
import logo from '../../assets/img/logo.png';
import product1 from '../../assets/img/product1.png';

import './styles.scss';

type TPopoverCustomize = {
  icon: any;
  label: string;
  content: any[];
};

type TContent = {
  content: any;
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

const PopoverCartProduct = ({ content }: TContent) => (
  <Popover width={300} position="bottom" withArrow shadow="md">
    <Popover.Target>
      <div className="header-cart">
        <GiShoppingCart />
        <p>Cart</p>
      </div>
    </Popover.Target>
    <Popover.Dropdown>
      {content.map((val: any, idx: any) => (
        <div className="cart-content-container" key={idx}>
          <div className="cart-img">
            <Image width={50} height={70} fit="contain" src={val.img} mx="auto" />
          </div>
          <div className="cart-content">
            <div className="cart-content-product">
              <span>{val.title}</span>
              <span>X</span>
            </div>
            <span>{val.price}</span>
          </div>
        </div>
      ))}
      {/* <div className="cart-content-container">
        <div className="cart-img">
          <Image width={70} height={70} fit="contain" src={product1} mx="auto" />
        </div>
        <div className="cart-content">
          <div className="cart-content-product">
            <span>title product</span>
            <span>X</span>
          </div>
          <span>price</span>
        </div>
      </div> */}
    </Popover.Dropdown>
  </Popover>
);

export default function Header() {
  return (
    <>
      {/* header1 */}
      <Container fluid className="header-container">
        <Grid>
          <Grid.Col lg={3} p={0} sm={12} xs={6}>
            <div className="header-title">Welcome to organic foods & Fruits</div>
          </Grid.Col>
          <Grid.Col lg="auto" p={0} sm={4} xs={6}>
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
              <PopoverCartProduct
                content={[
                  { img: product1, title: 'banana', price: '15000' },
                  { img: product1, title: 'banana', price: '15000' },
                  { img: product1, title: 'banana', price: '15000' },
                  { img: product1, title: 'banana', price: '15000' },
                ]}
              />
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
          <Grid.Col lg={2} md={12} xs={12}>
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
