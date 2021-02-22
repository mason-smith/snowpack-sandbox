import { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import cuid from 'cuid';

// Local Dependencies
import Navigation from 'src/components/Navigation';
import { authState } from 'src/features/Auth/authState';
import { PrivateRoute } from './PrivateRoute';
import { routes } from './routes';

export const AppRouter = () => {
  const auth = useRecoilValue(authState);
  return (
    <Router>
      {auth?.user ? <Navigation /> : null}

      <Switch>
        <Suspense fallback={null}>
          {routes.map((route) => {
            return route.private ? (
              <PrivateRoute key={cuid()} exact path={route.path}>
                {route.component}
              </PrivateRoute>
            ) : (
              <Route key={cuid()} exact path={route.path}>
                {route.component}
              </Route>
            );
          })}
        </Suspense>
      </Switch>
    </Router>
  );
};
