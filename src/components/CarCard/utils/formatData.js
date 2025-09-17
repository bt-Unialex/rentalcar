export const formatData = (type, address, mileage) => {
  const formattedType = type
    ? type.charAt(0).toUpperCase() + type.slice(1).toLowerCase()
    : '';

  const parts = address?.split(',').map(s => s.trim()) || [];
  const city = parts[1] || '';
  const country = parts[2] || '';

  const formattedMileage = mileage?.toLocaleString('uk-UA') ?? '0';

  return {
    type: formattedType,
    city,
    country,
    mileage: formattedMileage + ' km',
  };
};
