import css from './CarsList.module.css';
import CarCard from '../CarCard/CarCard.jsx';

export default function CarsList({ cars, ref }) {
  return (
    <ul ref={ref} className={css.wrapper}>
      {cars.map((car, index) => (
        <li key={car.id + '-' + index} className={css.item}>
          <CarCard car={car} />
        </li>
      ))}
    </ul>
  );
}
