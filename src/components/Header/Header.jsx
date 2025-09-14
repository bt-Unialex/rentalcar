import css from './Header.module.css';
import Logo from '../Logo/Logo.jsx';
import MainNav from '../MainNav/MainNav.jsx';

export default function Header() {
  return (
    <header className={css.wrapper}>
      <Logo />
      <MainNav />
    </header>
  );
}
