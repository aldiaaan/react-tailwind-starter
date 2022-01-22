import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import loadable from '@loadable/component';

import GlobalStyles from './common/components/GlobalStyles';

const HomePage = loadable(() => import('./features/home/HomePage'));
const UnknownRoutePage = loadable(() => import('./features/error/UnknownRoutePage'));

export default function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route element={<UnknownRoutePage />} path="*" />
        </Routes>
      </BrowserRouter>
    </>
  );
}
