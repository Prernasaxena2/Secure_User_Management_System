// components/SignIn.js
// src/components/SignIn.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthService from '../services/AuthService';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSignIn = () => {
        try {
            // Call the signIn method from the AuthService
            const user = AuthService.signIn(email, password);

            // Clear form fields after successful sign-in
            setEmail('');
            setPassword('');
            setError('');

            console.log('User signed in:', user);

            // Redirect to the dashboard or any other page after successful sign-in
            navigate('/dashboard');
        } catch (error) {
            // Handle sign-in error
            setError(error.message);
        }
    };


    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Sign In</h2>
            <form>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-2">
                        Email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block text-gray-600 text-sm font-medium mb-2">
                        Password:
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        type="button"
                        onClick={handleSignIn}
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                    >
                        Sign In
                    </button>
                </div>
                {error && (
                    <p className="text-red-500 text-sm mt-3">
                        {error}
                    </p>
                )}
                <p className="text-gray-600 mt-4">
                    Don't have an account?{' '}
                    <Link to="/signup" className="text-blue-500">
                        Sign up here.
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default SignIn;

