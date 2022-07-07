import React, { useEffect } from 'react';
import './App.css';
import { getSingleBook } from './services/fetch-utils';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Edit() {
  const [book, setBook] = useState({});
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

  return (
    <div className="edit-page">
      <button onClick={goBack}>Go Back</button>
      <form>
        <input placeholder={book.title}></input>
        <input placeholder={book.author}></input>
        <input placeholder={book.year}></input>
      </form>
    </div>
  );
}