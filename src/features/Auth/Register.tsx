import { FormEvent, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

// Local Dependencies
import GoogleAuthButton from 'src/components/GoogleAuthButton';
import { firebaseAuth, signInWithGoogle } from 'src/config/firebase.config';
import { UseAuthStateReturn } from 'src/config/firebaseTypes';
import { AuthError } from './types';

const Register = () => {
  const history = useHistory();
  const [user, firebaseIsLoading]: UseAuthStateReturn = useAuthState(
    firebaseAuth
  );

  // Local State
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<AuthError | null>(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      history.push('/dashboard');
    }
    return () => {};
  }, [user]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await firebaseAuth.createUserWithEmailAndPassword(email, password);
      setLoading(false);
      history.push('/dashboard');
    } catch (err) {
      setLoading(false);
      setError(err);
    }
  };

  /**
   * @TODO Add loading screen for auth checks
   */
  if (firebaseIsLoading) {
    return null;
  }

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email-login-input"
          required
          autoComplete="email"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="password-login-input"
          required
          autoComplete="password"
        />
        <button type="submit" disabled={isLoading}>
          Sign Up
        </button>
        {isLoading ? <p>Loading . . .</p> : null}
        {error ? <p>{error.message}</p> : null}
      </form>
      <GoogleAuthButton onClick={() => signInWithGoogle()}>
        Sign in with Google
      </GoogleAuthButton>
      <p>
        Already have an account? <Link to="/login">Login here.</Link>
      </p>
    </div>
  );
};

export default Register;
