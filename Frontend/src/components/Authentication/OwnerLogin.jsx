import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from "../../assets/Logo.jpeg";

const OwnerLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/owners/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // FIXED: Grabbing the ID from the top level of the response
        const idToSave = data.ownerId || data._id;
        
        if (idToSave) {
          localStorage.setItem('ownerId', idToSave);
          navigate('/owner/home');
        } else {
          alert("Login successful, but User ID was not received. Please contact support.");
        }
      } else {
        alert(data.message || "Login failed");
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("Server error. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-black p-4">
      <div className="max-w-md w-full bg-white dark:bg-gray-900 shadow-xl rounded-2xl p-8 border border-gray-100 dark:border-gray-800">
        <div className="text-center mb-8">
          <img src={Logo} alt="Logo" className="h-16 mx-auto mb-4" />
          <h2 className="text-2xl font-bold dark:text-white">Owner Login</h2>
          <p className="text-gray-500 text-sm">Welcome back to Rent-A-Ride</p>
        </div>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
            <input type="email" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-violet-500 outline-none dark:bg-gray-800 dark:border-gray-700 dark:text-white" placeholder="owner@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Password</label>
            <input type="password" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-violet-500 outline-none dark:bg-gray-800 dark:border-gray-700 dark:text-white" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button type="submit" className="w-full bg-gradient-to-r from-violet-500 to-blue-500 text-white py-2 rounded-lg font-bold hover:opacity-90 transition">Login</button>
        </form>
      </div>
    </div>
  );
};

export default OwnerLogin;