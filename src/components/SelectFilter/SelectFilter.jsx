import css from './SelectFilter.module.css';
import Select from 'react-select';
import { selectStyles } from './reactSelectStyles.js';

export default function SelectFilter({
  name,
  placeholder = '',
  options,
  value,
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
    <label className={css.lable}>
      {children}
      <Select
        className={css.select}
        options={selectOptions}
        styles={selectStyles}
        placeholder={placeholder}
        name={name}
        value={value ? { value: value, label: value } : null}
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
