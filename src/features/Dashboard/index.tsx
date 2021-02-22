import { Link } from 'react-router-dom';

// Local Dependencies
import { routes } from 'src/router/routes';
import { firebaseAuth } from 'src/config/firebase.config';
import cuid from 'cuid';

const DashboardPage = () => {
  return (
    <div>
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

export default DashboardPage;
