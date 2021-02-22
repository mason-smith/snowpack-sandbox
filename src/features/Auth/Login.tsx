import { FormEvent, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

// Local Dependencies
import GoogleAuthButton from 'src/components/GoogleAuthButton';
import { firebaseAuth, signInWithGoogle } from 'src/config/firebase.config';
import { authState } from './authState';
import { AuthError } from './types';

const LoginPage = () => {
  const history = useHistory();
  const auth = useRecoilValue(authState);

  // Local State
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<AuthError | null>(null);
  const [isLoading, setLoading] = useState(false);

  console.log('error :>> ', error);

  useEffect(() => {
    if (auth?.user) {
      history.push('/dashboard');
    }
  }, [auth?.user]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await firebaseAuth.signInWithEmailAndPassword(email, password);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(err);
    }
  };

  return (
    <div>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email-login-input"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="password-login-input"
          required
        />
        <button type="submit" disabled={isLoading}>
          Log In
        </button>
        {isLoading ? <p>Loading . . .</p> : null}
        {error ? <p>{error.message}</p> : null}
      </form>
      <GoogleAuthButton onClick={() => signInWithGoogle()}>
        Sign in with Google
      </GoogleAuthButton>
      <p>
        Don't have an account? <Link to="/register">Register here.</Link>
      </p>
    </div>
  );
};

export default LoginPage;
