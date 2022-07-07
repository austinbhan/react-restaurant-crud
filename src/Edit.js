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

  return (
    <>
      <div className="edit-page">
        <h1>{book.title}</h1>
        <h2>{book.author}</h2>
        <h3>{book.year}</h3>
      </div>
    </>
  );
}