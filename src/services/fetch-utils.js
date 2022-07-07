import { checkError, client } from './client';

export async function signUp(email, password) {
  const { user, error } = await client.auth.signUp({
    email: email,
    password: password,
  });

  if (error) {
    throw error;
  } else {
    return user;
  }
}

export async function signIn(email, password) {
  const { user } = await client.auth.signIn({
    email: email,
    password: password,
  });

  return user;
}

export async function logOut() {
  const { error } = await client.auth.signOut();
  return error;
}


export async function getBooks() {
  const { data } = await client.from('books').select('*');
  return data;
}

export async function getSingleBook(id) {
  const response = await client.from('books').select().match({ id }).single();
  return checkError(response);
}