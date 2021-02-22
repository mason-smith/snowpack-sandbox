import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('email :>> ', email);
    console.log('password :>> ', password);
  };

  return (
    <div>
      <h1>Register</h1>
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
        <button type="submit">Log In</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login here.</Link>
      </p>
    </div>
  );
};

export default Register;
