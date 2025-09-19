import { BsFillHeartFill, BsHeart } from 'react-icons/bs';
import css from './CarCard.module.css';
import { Link } from 'react-router-dom';
import { formatData } from '../../utils/formatData.js';
import fallBackImg from '../../image/fallback.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/favorites/favoritesSelectors.js';
import {
  addFavorites,
  removeFavorites,
} from '../../redux/favorites/favoritesSlice.js';

export default function CarCard({ car }) {
  const { id, img, brand, model, year, rentalPrice, rentalCompany } = car;

  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  // console.log('favorites:', favorites);

  const isFavorite = favorites.includes(id);

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorites(id));
    } else {
      dispatch(addFavorites(id));
    }
  };

  const { type, city, country, mileage } = formatData(
    car.type,
    car.address,
    car.mileage,
  );

  return (
    <div className={css.wrapper}>
      <button
        type="button"
        onClick={toggleFavorite}
        className={css.favoriteBtn}
      >
        {isFavorite ? (
          <BsFillHeartFill color="#3470ff" />
        ) : (
          <BsHeart color=" #fff" />
        )}
      </button>
      <img
        src={img || fallBackImg}
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
          <li>{type}</li>
          <li className={css.lastDetails}>{mileage}</li>
        </ul>
      </div>
      <Link to={`/catalog/${id}`} className={css.readMoreBtn}>
        Read more
      </Link>
    </div>
  );
}
