import React from 'react';
import { useAuth } from './AuthContext';

function Auth() {
  const { user, login, logout } = useAuth();

  return (
    <div>
      <h1>User Authentication Example</h1>

      <div>

        {user ? (
          <div>
            <p>Welcome, {user.username}</p>
            <button onClick={logout}>Logout</button>
          </div>
        ) : (

          <div>
            <p>Please log in.</p>
            <button onClick={() => login({ username: 'user12345' })}>
              Login
            </button>
          </div>
        )}



      </div>
    </div>
  );
}

export default Auth;
