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
import { resetFilters } from '../../redux/filters/filtersSlice.js';
import { resetCars } from '../../redux/cars/carsSlice.js';

export default function Catalog() {
  const carListRef = useRef(null);
  const dispatch = useDispatch();

  const cars = useSelector(selectCars);
  const loading = useSelector(selectIsLoading);
  const paginationParams = useSelector(selectPaginationParams);
  const currentPage = paginationParams.page ?? 1;
  const hasNextPage = paginationParams.hasNextPage ?? false;
  const isFirstLoading = cars.cars === null;

  useEffect(() => {
    dispatch(resetFilters());
    dispatch(resetCars());
    dispatch(getCars());
  }, [dispatch]);

  const loadMoreClick = () => {
    const startOfList = carListRef.current.offsetTop;
    const listHeight = carListRef.current.scrollHeight;
    const halfOfGap = 24;
    dispatch(getCars({ page: currentPage + 1 })).then(() => {
      window.scrollTo({
        top: startOfList + listHeight + halfOfGap,
        behavior: 'smooth',
      });
    });
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
        {!isFirstLoading && <CarsList ref={carListRef} cars={cars.cars} />}
        {hasNextPage && (
          <LoadMoreBtn loading={loading} onClick={loadMoreClick} />
        )}
      </Container>
    </section>
  );
}
