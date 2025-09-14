import { NavLink } from 'react-router-dom';
import css from './MainNav.module.css';

export default function MainNav() {
  return (
    <nav className={css.wrapper}>
      <NavLink
        className={({ isActive }) =>
          isActive ? `${css.link} ${css.isActive}` : css.link
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? `${css.link} ${css.isActive}` : css.link
        }
        to="/catalog"
      >
        Catalog
      </NavLink>
    </nav>
  );
}
