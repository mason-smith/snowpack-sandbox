import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

// Local Dependencies
import { AppRouter } from 'src/router';
import {
  createUserProfileDocument,
  firebaseAuth,
} from 'src/config/firebase.config';
import { authState } from 'src/features/Auth/authState';

export const App = () => {
  const setAuth = useSetRecoilState(authState);

  useEffect(() => {
    const unsubscribeFromAuth = firebaseAuth.onAuthStateChanged(
      async (userAuth: any) => {
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth);

          const authToken = await firebaseAuth.currentUser?.getIdToken(
            /* forceRefresh */ true
          );

          userRef?.onSnapshot((snapShot: any) => {
            setAuth({
              /* eslint-disable @typescript-eslint/ban-ts-comment */
              // @ts-ignore
              user: {
                id: snapShot.id,
                ...snapShot.data(),
              },
              authToken,
            });
          });
        } else {
          setAuth(null);
        }
        return () => {
          unsubscribeFromAuth();
        };
      }
    );
  }, []);

  return <AppRouter />;
};
