import css from './FiltersBar.module.css';
import SelectFilter from '../SelectFilter/SelectFilter.jsx';
import { useEffect, useState } from 'react';
import { fetchBrands } from '../../api/api.js';
import { toast } from 'react-toastify';

export default function FiltersBar() {
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
    const formData = new FormData(event.target);
    const values = Object.fromEntries(formData.entries());
    console.log('values:', values);
  };

  const onBrandChange = option => {
    console.log('Brand:', option);
  };
  const onPriceChange = option => {
    console.log('Price:', option);
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
      {/* <label className={css.lable}>
        Price/ 1 hour
        <Select
          className={css.select}
          options={priceOptions}
          css={selectStyles}
          components={{
            DropdownIndicator,
            IndicatorSeparator: () => null,
          }}
          placeholder="Choose a price"
          formatOptionLabel={(option, { context }) =>
            context === 'menu' ? option.label : `To $${option.label}`
          }
          isLoading={!priceOptions.length}
          name="rentalPrice"
          value={values.rentalPrice.value}
          onChange={option =>
            setFieldValue('rentalPrice', option.value.toString())
          }
        />
      </label> */}
      {/* Mileage */}
      <label className={css.lable}>
        Car mileage / km
        <div className={css.inputWrapper}>
          <input
            type="number"
            name="minMileage"
            id="minMileage"
            className={css.mileageMin}
            placeholder="From"
          ></input>
          <input
            type="number"
            name="maxMileage"
            id="maxMileage"
            className={css.mileageMax}
            placeholder="To"
          />
        </div>
      </label>
      <button type="submit" className={css.button}>
        Search
      </button>
    </form>
  );
}
