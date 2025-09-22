import css from './OrderForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function OrderForm({ createOrder }) {
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    bookingDate: Yup.date().nullable(),
    comment: Yup.string(),
  });

  const handleSubmit = values => {
    console.log('values:', values);

    createOrder(values);
  };

  return (
    <div className={css.wrapper}>
      <h3 className={css.title}>Book your car now</h3>
      <p className={css.description}>
        Stay connected! We are always ready to help you.
      </p>

      <Formik
        initialValues={{
          name: '',
          email: '',
          bookingDate: '',
          comment: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, values }) => (
          <Form className={css.form}>
            <div className={css.inputWrapper}>
              <Field
                id="name"
                name="name"
                type="text"
                placeholder="Name*"
                className={css.input}
              />
              <ErrorMessage name="name" component="div" className={css.error} />
            </div>

            <div className={css.inputWrapper}>
              <Field
                id="email"
                name="email"
                type="email"
                placeholder="Email*"
                className={css.input}
              />
              <ErrorMessage
                name="email"
                component="div"
                className={css.error}
              />
            </div>

            <div className={css.inputWrapper}>
              <DatePicker
                id="bookingDate"
                minDate={new Date()}
                selected={values.bookingDate}
                onChange={date => setFieldValue('bookingDate', date)}
                dateFormat="dd MMMM yyyy"
                className={css.input}
                placeholderText="Booking date"
              />
              <ErrorMessage
                name="bookingDate"
                component="div"
                className={css.error}
              />
            </div>

            <div className={css.inputWrapper}>
              <Field
                id="comment"
                name="comment"
                as="textarea"
                placeholder="Comment"
                className={css.input}
                rows={4}
              />
            </div>

            <button type="submit" className={css.button}>
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
