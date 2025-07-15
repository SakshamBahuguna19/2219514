import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ShortenerPage from '../comp/page1.jsx';
import StatsPage from '../comp/page2.jsx';
import RedirectHandler from '../comp/page3.jsx';

const route = [
  { path: '/', element: <ShortenerPage /> },
  { path: '/stats', element: <StatsPage /> },
  { path: '/:shortcode', element: <RedirectHandler /> }
];

const mainrouter = () => (
  <Routes>
    {route.map(({ path, element }, idx) => (
      <Route key={idx} path={path} element={element} />
    ))}
  </Routes>
);
export default mainrouter;