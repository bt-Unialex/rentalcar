import './App.css';
import { Flip, ToastContainer } from 'react-toastify';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const MainPage = lazy(() => import('./pages/MainPage/MainPage.jsx'));
const HomePage = lazy(() => import('./pages/HomePage/HomePage.jsx'));
const Catalog = lazy(() => import('./pages/Catalog/Catalog.jsx'));
const CarDetails = lazy(() => import('./pages/CarDetails/CarDetails.jsx'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

function App() {
  return (
    <>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<MainPage />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/catalog/:id" element={<CarDetails />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <ToastContainer
        newestOnTop={true}
        closeOnClick={true}
        theme="colored"
        transition={Flip}
      />
    </>
  );
}

export default App;
