import { client } from './client';

export async function signUp(email, password) {
  const { user } = await client.auth.signUp({ // Create Error Function if Time
    email: email,
    password: password,
  });

  return user;
}