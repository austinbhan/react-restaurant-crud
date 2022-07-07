import { React, useState } from 'react';
import './App.css';
import { createBook } from './services/fetch-utils';

export default function Create() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');

  async function goBack() {
    window.location.replace('/');
  }

  async function handleSubmit(e) {
    e.preventDefault(); // Work from Here

    const book = await createBook({
      title: title,
      author: author,
      year: year
    });
    // eslint-disable-next-line no-console
    console.log(book);
    setTitle('');
    setAuthor('');
    setYear('');

    window.location.replace('/');
  }

  return (
    <div>
      <h1>Create a Book</h1>
      <button onClick={goBack}>Go Back</button>
      <form className='create-book' onSubmit={handleSubmit}>
        <label>Title: <input onChange={e => setTitle(e.target.value)} value={title}></input></label>
        <label>Author: <input onChange={e => setAuthor(e.target.value)} value={author}></input></label>
        <label>Year: <input onChange={e => setYear(e.target.value)} value={year}></input></label>
        <button>Submit</button>
      </form>
    </div>
  );
}