import HashLoader from 'react-spinners/HashLoader';
import './styles.scss';

export default function Loading() {
  return (
    <div className="loading-container">
      <HashLoader color="#36d7b7" laria-label="Loading Spinner" />
    </div>
  );
}
