import css from './SelectFilter.module.css';
import Select from 'react-select';
import { selectStyles } from './reactSelectStyles.js';

export default function SelectBrand({
  name,
  placeholder = '',
  options,
  onChange,
  children,
}) {
  const selectOptions =
    options?.map(item => ({
      value: item,
      label: item,
    })) || [];

  const handleChange = option => {
    onChange(option);
  };

  return (
    <label htmlFor={name} className={css.lable}>
      {children}
      <Select
        className={css.select}
        options={selectOptions}
        styles={selectStyles}
        placeholder={placeholder}
        name={name}
        onChange={handleChange}
        formatOptionLabel={(option, { context }) =>
          isNaN(option.label) || context === 'menu'
            ? option.label
            : `To $${option.label}`
        }
      />
    </label>
  );
}
