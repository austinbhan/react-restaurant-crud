import React from 'react';
import { useState } from 'react';
import './App.css';

import { signUp, signIn } from './services/fetch-utils';

export default function AuthPage({ setUser }) {


  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const user = await signUp(email, password);

      setUser(user);
    } catch (e) {
      setError(e.message);
    }
  }

  async function handleSignInSubmit(e) {
    e.preventDefault();
    const user = await signIn(signInEmail, signInPassword);

    setUser(user);
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

      <form onSubmit={handleSignInSubmit}>
        <p>Sign In</p>
        <label>Enter Email<input onChange={e => setSignInEmail(e.target.value)} value={signInEmail} type="email"></input></label>
        <label>Enter Password<input onChange={e => setSignInPassword(e.target.value)} value={signInPassword} type="password"></input></label>
        <button>Sign In</button>
      </form>
    </div>

  );
}