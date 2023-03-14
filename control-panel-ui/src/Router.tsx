import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '~/pages/Home';
import NotFound from '~/pages/NotFound';
import MainLayout from '~/ui-kit/templates/MainLayout';

const Router: FC = () => {
  return (
    <BrowserRouter basename='/control_panel'>
      <Routes>
        <Route element={<MainLayout />} path='*'>
          <Route element={<Home />} path='' />

          <Route element={<NotFound />} path='*' />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
