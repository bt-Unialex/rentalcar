import css from './CarInfo.module.css';
import { IoLocationOutline } from 'react-icons/io5';
import {
  BsCalendar2Week,
  BsCarFront,
  BsCheckCircle,
  BsFuelPump,
  BsGear,
} from 'react-icons/bs';
import { formatData } from '../CarCard/utils/formatData.js';

export default function CarInfo({ car }) {
  const { type, city, country, mileage } = formatData(
    car.type,
    car.address,
    car.mileage,
  );

  return (
    <div className={css.wrapper}>
      <div className={css.carDescription}>
        <h2 className={css.carTitle}>
          {`${car.brand} ${car.model}, ${car.year}`}
          <span className={css.idSpan}>{`Id: ${car.id}`}</span>
        </h2>
        <p className={css.carLlocation}>
          <IoLocationOutline />
          <span className={css.locationSpan}>{`${city}, ${country}`}</span>
          <span className={css.mileageSpan}>Mileage: {mileage}</span>
        </p>
        <p className={css.price}>${car.rentalPrice}</p>
        <p>{car.description}</p>
      </div>

      <div className={css.carProperties}>
        <div>
          <h3 className={css.properties}>Rental Conditions:</h3>
          <ul className={css.list}>
            {car.rentalConditions.map((cond, index) => (
              <li key={index}>
                <p className={css.item}>
                  <BsCheckCircle />
                  {cond}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className={css.properties}>Car Specifications:</h3>
          <ul className={css.list}>
            <li>
              <p className={css.item}>
                <BsCalendar2Week />
                Year: {car.year}
              </p>
            </li>
            <li>
              <p className={css.item}>
                <BsCarFront />
                Type: {type}
              </p>
            </li>
            <li>
              <p className={css.item}>
                <BsFuelPump />
                Fuel Consumption: {car.fuelConsumption}
              </p>
            </li>
            <li>
              <p className={css.item}>
                <BsGear />
                Engine Size: {car.engineSize}
              </p>
            </li>
          </ul>
        </div>

        <div>
          <h3 className={css.properties}>Accessories and functionalities:</h3>
          <ul className={css.list}>
            {car.accessories.map((accessory, index) => (
              <li key={index}>
                <p className={css.item}>
                  <BsCheckCircle />
                  {accessory}
                </p>
              </li>
            ))}
            {car.functionalities.map((functionality, index) => (
              <li key={index}>
                <p className={css.item}>
                  <BsCheckCircle />
                  functionality
                  {functionality}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
