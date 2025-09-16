import Container from '../../components/Container/Container.jsx';
import css from './HomePage.module.css';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <section className={css.section}>
      <Container>
        <h1 className={css.title}>Find your perfect rental car</h1>
        <p className={css.text}>
          Reliable and budget-friendly rentals for any journey
        </p>
        <Link to="/catalog" className={css.button}>
          View Catalog
        </Link>
      </Container>
    </section>
  );
}
