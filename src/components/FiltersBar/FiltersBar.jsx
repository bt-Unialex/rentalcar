import css from './FiltersBar.module.css';
import SelectFilter from '../SelectFilter/SelectFilter.jsx';
import { useEffect, useState } from 'react';
import { fetchBrands } from '../../api/api.js';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import {
  setBrand,
  setMileageFrom,
  setMileageTo,
  setPrice,
} from '../../redux/filters/filtersSlice.js';
import { resetCars } from '../../redux/cars/carsSlice.js';
import { getCars } from '../../redux/cars/carsOperations.js';

export default function FiltersBar() {
  const dispatch = useDispatch();
  // const [isLoading, setIsLoading] = useState(true);
  // const [isError, setIsError] = useState(false);
  const [brands, setBrands] = useState(null);

  useEffect(() => {
    const getBrands = async () => {
      try {
        // setIsError(false);
        const response = await fetchBrands();
        setBrands(response);
      } catch (error) {
        // setIsError(true);
        toast.error(`Cant get brands list: ${error.message}`);
        // } finally {
        //   setIsLoading(false);
      }
    };
    getBrands();
  }, []);

  const prices = [30, 40, 50, 60, 70, 80];

  const handleSubmit = event => {
    event.preventDefault();
    // const formData = new FormData(event.target);
    // const values = Object.fromEntries(formData.entries());
    dispatch(resetCars());
    dispatch(getCars());
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
    <form onSubmit={handleSubmit} className={css.form}>
      <SelectFilter
        name="brand"
        placeholder="Choose a brand"
        options={brands}
        onChange={onBrandChange}
      >
        Car brand
      </SelectFilter>
      <SelectFilter
        name="price"
        placeholder="Choose a price"
        options={prices}
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
          onBlur={onMinMileageChange}
        />
        <input
          className={css.mileageMax}
          type="number"
          name="maxMileage"
          min={0}
          step={500}
          onBlur={onMaxMileageChange}
        />
      </fieldset>
      <button type="submit" className={css.button}>
        Search
      </button>
    </form>
  );
}
