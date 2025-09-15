import css from './Catalog.module.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCars } from '../../redux/cars/carsOperations.js';

export default function Catalog() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  return <div className={css.wrapper}>CatalogPage</div>;
}
