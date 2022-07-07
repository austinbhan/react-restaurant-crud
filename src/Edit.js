import React, { useEffect } from 'react';
import './App.css';
import { getSingleBook, updateBook } from './services/fetch-utils';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Edit() {
  const [book, setBook] = useState({});
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');

  const params = useParams();

  useEffect(() => {
    async function doFetch() {
      const data = await getSingleBook(params.id);
      setBook(data);
    }
    doFetch();
  }, [params.id]);

  async function goBack() {
    window.location.replace('/');
  }

  async function handleUpdate(e) {
    e.preventDefault();
    await updateBook({
      title: title,
      author: author,
      year: year
    }, [params.id]);
  }

  async function handleDelete(e) {
    e.preventDefault();
  }

  return (
    <div className="edit-page">
      <h1>Update Book</h1>
      <button onClick={goBack}>Go Back</button>
      <form onSubmit={handleUpdate}>
        <input onChange={e => setTitle(e.target.value)} value={title} placeholder={book.title}></input>
        <input onChange={e => setAuthor(e.target.value)} value={author} placeholder={book.author}></input>
        <input onChange={e => setYear(e.target.value)} value={year} placeholder={book.year}></input>
        <button>Update Book</button>
      </form>
      <button onSubmit={handleDelete}>Delete Book</button>
    </div>
  );
}