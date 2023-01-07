import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import loadable from '@loadable/component';
import GlobalStyles from './common/components/global-styles';

const HomePage = loadable(() => import('./features/home/home-page'));
const UnknownRoutePage = loadable(() => import('./features/error/unknow-route-page'));

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
