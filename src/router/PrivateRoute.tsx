import { Route, Redirect } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

// Local Dependencies
import { authState } from 'src/features/Auth/authState';
import { PrivateRouteProps } from './types';

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
export const PrivateRoute = ({ children, ...rest }: PrivateRouteProps) => {
  const auth = useRecoilValue(authState);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth?.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
