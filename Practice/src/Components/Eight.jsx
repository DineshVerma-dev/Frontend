import React, { useState } from 'react';

export default function Thirteen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRegistered, setIsRegistered] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [users, setUsers] = useState([]);

    const handleAuthentication = (e) => {
        e.preventDefault();
        if (isRegistered) {
            // LogIn
            const user = users.find((u) => u.email === email && u.password === password);
            if (user) {
                setIsLoggedIn(true);
            } else {
                alert('Login failed. Please check your credentials');
            }
        } else {
            // Register
            const newUser = { email, password };
            setUsers([...users, newUser]);
            localStorage.setItem('users', JSON.stringify([...users, newUser]));
            setIsLoggedIn(true);
        }
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setEmail('');
        setPassword('');
    };

    return (
        <div className='flex justify-center items-center h-screen bg-gray-100'>
            {isLoggedIn ? (
                <div className='text-center bg-white p-8 rounded shadow-md'>
                    <h2 className='text-2xl font-bold mb-4'>Welcome, {email}!</h2>
                    <button
                        className='text-white bg-red-500 p-2 rounded hover:bg-red-700'
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </div>
            ) : (
                <div className='bg-white p-8 rounded shadow-md w-full max-w-sm'>
                    <h2 className='text-2xl font-bold mb-4 text-center'>
                        {isRegistered ? 'Login' : 'Register'}
                    </h2>
                    <form className='flex flex-col' onSubmit={handleAuthentication}>
                        <input
                            className='text-black bg-gray-200 p-2 rounded mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                            type='email'
                            placeholder='Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input
                            className='text-black bg-gray-200 p-2 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
                            type='password'
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button
                            className='text-white bg-blue-500 p-2 rounded mb-4 hover:bg-blue-700'
                            type='submit'
                        >
                            {isRegistered ? 'Login' : 'Register'}
                        </button>
                    </form>
                    <p className='text-center'>
                        {isRegistered
                            ? "Don't have an account? Register now"
                            : 'Already have an account? Log in!'}
                    </p>
                    <button
                        className='text-blue-500 hover:underline w-full mt-2'
                        onClick={() => setIsRegistered(!isRegistered)}
                    >
                        {isRegistered ? 'Register' : 'Login'}
                    </button>
                </div>
            )}
        </div>
    );
}
