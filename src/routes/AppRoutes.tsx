import { Route, Routes } from 'react-router-dom';
import { navigateRoutes } from './routes.tsx';

const AppRoutes = () => {
  return (
    <Routes>
      {
        navigateRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))
      }
    </Routes>
  );
};

export default AppRoutes;