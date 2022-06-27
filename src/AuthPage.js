import React from 'react';
import { useState } from 'react';
import './App.css';

import { signUp } from './services/fetch-utils';

export default function AuthPage({ setUser }) {

  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const user = await signUp(email, password);

      setUser(user);
    } catch (e) {
      setError(e.message);
    }
  }

  return (

    <div>
      <h3>Authentication Page</h3>
      <h1 className="error">{error}</h1>
      <form onSubmit={handleSubmit}>
        <p>Sign Up</p>
        <label>Create Email<input onChange={e => setEmail(e.target.value)} value={email} type="email"></input></label>
        <label>Create Password<input onChange={e => setPassword(e.target.value)}value={password} type="password"></input></label>
        <button>Sign Up</button>
      </form>

      <form>
        <p>Sign In</p>
        <label>Enter Email<input></input></label>
        <label>Enter Password<input></input></label>
        <button>Sign In</button>
      </form>
    </div>

  );
}