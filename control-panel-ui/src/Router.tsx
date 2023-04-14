import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '~/pages/Home';
import NotFound from '~/pages/NotFound';
import MainLayout from '~/ui-kit/templates/MainLayout';

import Check from './modules/Auth/components/Check';
import Signin from './modules/Auth/components/Signin';
import Signup from './modules/Auth/components/Signup';
import { isAuthSelector } from './modules/Auth/store';
import ArticlesPage from './pages/ArticlesPage';
import FilesPage from './pages/FilesPage';
import RefInfoPage from './pages/RefInfoPage';
import { useAppSelector } from './store';
import AuthLayout from './ui-kit/templates/AuthLayout';

const routes = [
  { title: 'Главная', path: '', Element: Home },
  { title: 'Справочная информация', path: 'ref_info', Element: RefInfoPage },
  { title: 'Файлы', path: 'files', Element: FilesPage },
  { title: 'Статьи', path: 'articles', Element: ArticlesPage },
];

export const routesInfo = routes.map((route) => {
  const { title, path } = route;
  return { title, path };
});

const Router: FC = () => {
  const isAuth = useAppSelector(isAuthSelector);
  return (
    <BrowserRouter basename='/control_panel'>
      <Routes>
        {!isAuth ? (
          <Route element={<AuthLayout />} path='*'>
            <Route element={<Check />} path='' />
            <Route element={<Signin />} path='signin' />
            <Route element={<Signup />} path='signup' />
            <Route element={<Check />} path='*' />
          </Route>
        ) : (
          <Route element={<MainLayout />} path='*'>
            {routes.map(({ path, Element }) => (
              <Route key={path} element={<Element />} path={path} />
            ))}
            <Route element={<NotFound />} path='*' />
          </Route>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
