import css from './CarDetails.module.css';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCarById } from '../../api/api.js';
import { BounceLoader } from 'react-spinners';
import Container from '../../components/Container/Container.jsx';
import OrderForm from '../../components/OrderForm/OrderForm.jsx';
import CarInfo from '../../components/CarInfo/CarInfo.jsx';
import fallBackImg from '../../image/fallback.jpg';

export default function CarDetails() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [car, setCar] = useState(null);

  useEffect(() => {
    const loadCar = async () => {
      try {
        setIsError(false);
        const response = await fetchCarById(id);
        setCar(response);
      } catch (error) {
        setIsError(true);
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    loadCar();
  }, [id]);

  const createOrder = values => {
    const answer =
      `Thank you ${values.name} for your order` +
      (values.bookingDate
        ? ` on ${values.bookingDate.toLocaleDateString('uk-UA')}`
        : '') +
      `!\nCheck ${values.email} for details.`;
    toast.success(answer);
  };

  return (
    <section className={css.section}>
      <Container>
        {isLoading ? (
          <BounceLoader
            size={200}
            color="#0b44cd"
            cssOverride={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%,-50%)',
              zIndex: 999,
            }}
          />
        ) : (
          !isError && (
            <div className={css.wrapper}>
              <div>
                <img
                  src={car?.img || fallBackImg}
                  alt={`${car?.brand || ''} ${car?.model || ''}`}
                  width={640}
                  height={512}
                  className={css.carPoster}
                />
                <OrderForm createOrder={createOrder} />
              </div>
              <CarInfo car={car} />
            </div>
          )
        )}
      </Container>
    </section>
  );
}
