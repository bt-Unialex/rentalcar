export const selectStyles = {
  control: styles => ({
    ...styles,
    display: 'flex',
    justifyContent: 'space-between',
    padding: '12px 16px',
    backgroundColor: 'inherit',
    border: 'none',
    cursor: 'pointer',
    outline: 'none',
    boxShadow: 'none',
    lineHeight: 1.25,
    color: '#101828',
    borderRadius: 12,
  }),

  placeholder: styles => ({
    ...styles,
    color: '#101828',
    margin: 0,
  }),

  input: styles => ({
    ...styles,
    margin: 0,
    padding: 0,
    outline: 'none',
    color: '#101828',
  }),

  singleValue: styles => ({
    ...styles,
    color: '#101828',
    margin: 0,
  }),

  valueContainer: styles => ({
    ...styles,
    padding: 0,
  }),

  dropdownIndicator: (styles, state) => ({
    ...styles,
    lineHeight: 'inherit',
    padding: 0,
    width: 20,
    height: 20,
    strokeWidth: 1,
    color: '#101828',
    transition: 'transform 0.4s ease',
    transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : null,
  }),

  menu: styles => ({
    ...styles,
    border: '1px solid #f7f7f7',
    borderRadius: 12,
    boxShadow: '0 4px 36px 0 rgba(0, 0, 0, 0.02)',
    background: '#fff',
    marginTop: 4,
    marginBottom: 0,

    paddingTop: 12,
    paddingBottom: 12,
    paddingRight: 8,
    paddingLeft: 0,
  }),

  menuList: styles => ({
    ...styles,
    padding: '0 9px',
    maxHeight: 248,
    '::-webkit-scrollbar': {
      width: '8px',
    },
    '::-webkit-scrollbar-button': {
      display: 'none',
    },
    '::-webkit-scrollbar-thumb': {
      backgroundColor: '#dadde1',
      borderRadius: '10px',
    },
  }),

  option: (styles, state) => ({
    ...styles,
    lineHeight: 'inherit',
    color: state.isSelected ? '#101828' : '#8d929a',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: '4px 9px',
  }),

  indicatorSeparator: () => ({
    display: 'none',
  }),
};
