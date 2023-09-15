import { Button, Container, Grid, Image, TextInput } from '@mantine/core';
import { AiFillFacebook, AiOutlineInstagram, AiFillGithub, AiOutlineGitlab } from 'react-icons/ai';
import port1 from '../../assets/img/port1.png';
import port2 from '../../assets/img/port2.png';
import port3 from '../../assets/img/port3.png';
import port4 from '../../assets/img/port4.png';
import port5 from '../../assets/img/port5.png';
import port6 from '../../assets/img/port6.png';
import './styles.scss';

type TMedia = {
  title: string;
  content: any[];
};
const Media = ({ title, content }: TMedia) => (
  <div>
    <h5>{title}</h5>
    <hr />
    <ul>
      {content.map((item, idx) => (
        <li key={idx}>
          {item.icon} <span>{item.name}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default function Footer() {
  return (
    <footer>
      <Container className="footer-container">
        <div className="footer-title">NEWSLETTER</div>
        <p>Enter your address for our mailing list to keep your update</p>
        <div className="footer-search">
          <TextInput placeholder="Email" style={{ width: '50vw' }} />
          <Button color="orange">Subscribe Now</Button>
        </div>
        <div className="footer-media">
          <Grid>
            <Grid.Col span={3}>
              <Media
                title="STAY CONNECTED"
                content={[
                  { icon: <AiFillFacebook />, name: 'Facebook' },
                  { icon: <AiOutlineInstagram />, name: 'Instagram' },
                  { icon: <AiFillGithub />, name: 'Github' },
                  { icon: <AiOutlineGitlab />, name: 'Gitlab' },
                ]}
              />
            </Grid.Col>
            <Grid.Col span={3}>
              <Media
                title="CATEGORIES"
                content={[
                  { name: 'Vegetables' },
                  { name: 'Fruits' },
                  { name: 'Meats' },
                  { name: 'Other' },
                ]}
              />
            </Grid.Col>
            <Grid.Col span={3}>
              <Media
                title="MY ACCOUNT"
                content={[
                  { name: 'My Account' },
                  { name: 'Discount' },
                  { name: 'Person information' },
                  { name: 'Order History' },
                ]}
              />
            </Grid.Col>

            <Grid.Col span={3}>
              <h5>PORTFOLIO</h5>
              <hr />
              <ul className="footer-img">
                {[port1, port2, port3, port4, port5, port6].map((item, idx) => (
                  <li key={idx}>
                    <Image src={item} alt="Random image" />
                  </li>
                ))}
              </ul>
            </Grid.Col>
          </Grid>
        </div>
      </Container>
    </footer>
  );
}
