import css from './CarsList.module.css';
import CarCard from '../CarCard/CarCard.jsx';

export default function CarsList({ cars, ref }) {
  const carsFound = cars.length > 0;

  return (
    (carsFound && (
      <ul ref={ref} className={css.wrapper}>
        {cars.map((car, index) => (
          <li key={car.id + '-' + index} className={css.item}>
            <CarCard car={car} />
          </li>
        ))}
      </ul>
    )) || <p className={css.message}>No cars found</p>
  );
}
