import css from './Catalog.module.css';
import { useEffect, useRef } from 'react';
import CarsList from '../../components/CarsList/CarsList.jsx';
import FiltersBar from '../../components/FiltersBar/FiltersBar.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { getCars } from '../../redux/cars/carsOperations.js';
import {
  selectCars,
  selectIsLoading,
  selectPaginationParams,
} from '../../redux/cars/carsSelectors.js';
import LoadMoreBtn from '../../components/LoadMoreBtn/LoadMoreBtn.jsx';
import { BounceLoader } from 'react-spinners';
import Container from '../../components/Container/Container.jsx';

export default function Catalog() {
  const carListRef = useRef(null);
  const dispatch = useDispatch();

  const cars = useSelector(selectCars);
  const loading = useSelector(selectIsLoading);
  const paginationParams = useSelector(selectPaginationParams);
  const currentPage = paginationParams.page ?? 1;
  const hasNextPage = paginationParams.hasNextPage ?? false;

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  const loadMoreClick = () => {
    const endOfList = carListRef.current.scrollHeight;
    dispatch(getCars({ page: currentPage + 1, limit: 12 }));
    setTimeout(() => {
      window.scrollTo({
        top: endOfList + 175,
        behavior: 'smooth',
      });
    }, 300);
  };

  return (
    <section className={css.section}>
      <Container>
        <BounceLoader
          size={200}
          loading={loading}
          color="#0b44cd"
          cssOverride={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            zIndex: 999,
          }}
        />
        <FiltersBar />
        {cars.cars.length > 0 && <CarsList ref={carListRef} cars={cars.cars} />}
        {hasNextPage && (
          <LoadMoreBtn loading={loading} onClick={loadMoreClick} />
        )}
      </Container>
    </section>
  );
}
