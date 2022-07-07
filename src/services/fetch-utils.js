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

export async function createBook(book) {
  // eslint-disable-next-line no-unused-vars
  const { data } = await client.from('books').insert(book).single();
  return data;
}

export async function updateBook(book, id) {
  const { data } = await client.from('books').update(book).match({ id: id }).single();
  return data;
}

export async function deleteBook(id) {
  const { data } = await client.from('books').delete().match({ id: id }).single();
  return data;
}