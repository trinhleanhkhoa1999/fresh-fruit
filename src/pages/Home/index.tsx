import Cards from '../../components/Cards';
import HeaderCarousels from '../../components/HeaderCarousels';
import './styles.scss';

export default function HomePage() {
  return (
    <div className="home-container">
      <HeaderCarousels />
      <div className="product-title">
        <h1>List product</h1>
      </div>
      <Cards />
    </div>
  );
}
