import css from './FiltersBar.module.css';
import SelectFilter from '../SelectFilter/SelectFilter.jsx'; //component
import { useEffect, useState } from 'react';
import { RxCrossCircled } from 'react-icons/rx';
import { fetchBrands } from '../../api/api.js';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import {
  resetFilters,
  setBrand,
  setMileageFrom,
  setMileageTo,
  setPrice,
} from '../../redux/filters/filtersSlice.js';
import { resetCars } from '../../redux/cars/carsSlice.js';
import { getCars } from '../../redux/cars/carsOperations.js';
import { selectIsLoading } from '../../redux/cars/carsSelectors.js';
import { selectFilters } from '../../redux/filters/filtersSelectors.js'; //selector

export default function FiltersBar() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const carsloading = useSelector(selectIsLoading);
  // const [isError, setIsError] = useState(false);
  const [brands, setBrands] = useState(null);

  const filters = useSelector(selectFilters);

  useEffect(() => {
    const getBrands = async () => {
      try {
        // setIsError(false);
        const response = await fetchBrands();
        setBrands(response);
      } catch (error) {
        // setIsError(true);
        toast.error(`Cant get brands list: ${error.message}`);
      } finally {
        setIsLoading(false);
      }
    };
    getBrands();
  }, []);

  const hasFilters = Object.keys(filters).length > 0;

  const prices = [30, 40, 50, 60, 70, 80];

  const handleSubmit = event => {
    event.preventDefault();
    // const formData = new FormData(event.target);
    // const values = Object.fromEntries(formData.entries());
    dispatch(resetCars());
    dispatch(getCars());
  };
  const handleReset = event => {
    event.preventDefault();
    dispatch(resetFilters());
  };

  const onBrandChange = option => {
    dispatch(setBrand(option.value));
  };
  const onPriceChange = option => {
    dispatch(setPrice(option.value));
  };
  const onMinMileageChange = event => {
    const value = event.target.valueAsNumber;
    dispatch(setMileageFrom(value));
  };
  const onMaxMileageChange = event => {
    const value = event.target.valueAsNumber;
    dispatch(setMileageTo(value));
  };
  return (
    <form onSubmit={handleSubmit} onReset={handleReset} className={css.form}>
      <SelectFilter
        name="brand"
        placeholder="Choose a brand"
        options={brands}
        value={filters.brand}
        onChange={onBrandChange}
      >
        Car brand
      </SelectFilter>
      <SelectFilter
        name="price"
        placeholder="Choose a price"
        options={prices}
        value={filters.rentalPrice}
        onChange={onPriceChange}
      >
        Price/ 1 hour
      </SelectFilter>
      <fieldset className={css.fieldset}>
        <legend className={css.lable}>Car mileage / km</legend>
        <input
          className={css.mileageMin}
          type="number"
          name="minMileage"
          min={0}
          step={500}
          value={filters.minMileage || ''}
          onChange={onMinMileageChange}
        />
        <input
          className={css.mileageMax}
          type="number"
          name="maxMileage"
          min={0}
          step={500}
          value={filters.maxMileage || ''}
          onChange={onMaxMileageChange}
        />
      </fieldset>
      <div className={css.buttons}>
        <button
          type="submit"
          className={css.button}
          disabled={isLoading || carsloading}
        >
          Search
        </button>
        {hasFilters && (
          <button
            type="reset"
            className={css.reset}
            disabled={isLoading || carsloading}
          >
            <RxCrossCircled />
          </button>
        )}
      </div>
    </form>
  );
}
