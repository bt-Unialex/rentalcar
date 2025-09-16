import css from './Header.module.css';
import Logo from '../Logo/Logo.jsx';
import MainNav from '../MainNav/MainNav.jsx';
import Container from '../Container/Container.jsx';

export default function Header() {
  return (
    <header className={css.header}>
      <Container>
        <div className={css.wrapper}>
          <Logo />
          <MainNav />
        </div>
      </Container>
    </header>
  );
}
