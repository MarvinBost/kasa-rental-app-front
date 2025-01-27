import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import Header from '@components/layout/Header';
import Footer from '@components/layout/Footer';
import LoadingPage from '@pages/LoadingPage';
import NotFound from './pages/NotFound';

const Home = lazy(() => import('@pages/Home'));
const About = lazy(() => import('@pages/About'));
const RentalDetail = lazy(() => import('@pages/RentalDetail'));
const App: React.FC = () => {
  return (
    <BrowserRouter basename="/kasa-rental-app-front">
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow py-8">
          <Suspense fallback={<LoadingPage />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/rental/:id" element={<RentalDetail />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
