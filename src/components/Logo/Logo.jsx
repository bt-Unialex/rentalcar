import css from './Logo.module.css';
import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link to="/" className={css.logo}>
      <img src="/logo.png" alt="Logo" width="106" height="16" />
    </Link>
  );
}
