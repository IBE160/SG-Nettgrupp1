import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ setLoggedIn }) => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoggedIn(true);
    navigate('/');
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" data-testid="email-input" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" data-testid="password-input" />
        </div>
        <button type="submit" data-testid="login-button">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
