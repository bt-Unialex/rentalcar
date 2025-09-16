import { PulseLoader } from 'react-spinners';
import css from './LoadMoreBtn.module.css';

export default function LoadMoreBtn({ loading, onClick }) {
  return (
    <button className={css.button} onClick={onClick} disabled={loading}>
      {loading ? <PulseLoader color="#0b44cd" /> : 'Load More'}
    </button>
  );
}
