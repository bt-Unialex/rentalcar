import { BsHeart } from 'react-icons/bs';
import css from './CarCard.module.css';
import { Link } from 'react-router-dom';

export default function CarCard({ car }) {
  const {
    id,
    img,
    brand,
    model,
    year,
    type,
    rentalPrice,
    rentalCompany,
    address,
    mileage,
  } = car;

  const formatedType =
    type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();

  const [, city, country] = address.split(',');
  const mileageStr = mileage.toLocaleString('uk-UA');

  return (
    <div className={css.wrapper}>
      <button type="button" className={css.favoriteBtn}>
        <BsHeart color="#fff" />
      </button>
      <img
        src={img}
        alt={`${brand} ${model}`}
        className={css.image}
        width={276}
        height={268}
      />

      <div className={css.titleWrapper}>
        <h3 className={css.title}>
          {brand} <span className={css.model}>{model}</span>, {year}
        </h3>
        <p>${rentalPrice}</p>
      </div>

      <div className={css.detailsWrapper}>
        <ul className={css.details}>
          <li>{city}</li>
          <li>{country}</li>
          <li>{rentalCompany}</li>
        </ul>
        <ul className={css.details}>
          <li>{formatedType}</li>
          <li className={css.lastDetails}>{mileageStr}</li>
        </ul>
      </div>
      <Link to={`/catalog/${id}`} className={css.readMoreBtn}>
        Read more
      </Link>
    </div>
  );
}
