import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import cuid from 'cuid';

// Local Dependencies
import { firebaseAuth } from 'src/config/firebase.config';
import { UseAuthStateReturn } from 'src/config/firebaseTypes';
import { routes } from 'src/router/routes';

const Navigation = () => {
  const [user]: UseAuthStateReturn = useAuthState(firebaseAuth);

  return (
    <div>
      Navigation {`Hello, ${user.displayName || user.email}`}
      <>
        {routes
          .filter((route) => route.navBar)
          .map((route) => {
            return (
              <Link key={cuid()} to={route.path}>
                {route.title}
              </Link>
            );
          })}
      </>
      <button type="button" onClick={() => firebaseAuth.signOut()}>
        Log Out
      </button>
    </div>
  );
};

export default Navigation;
