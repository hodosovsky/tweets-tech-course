import { lazy } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { Layout } from './Layout/Layout';
const Tweets = lazy(() => import('../Pages/TweetsPage/TweetsPage'));
const Home = lazy(() => import('../Pages/HomePage/HomePage'));

export const App = () => {
  return (
    <BrowserRouter basename="tweets-tech-course">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/tweets" element={<Tweets />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
