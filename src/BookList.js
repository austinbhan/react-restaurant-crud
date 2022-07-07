import Book from './Book';
import { useEffect, useState } from 'react';
import { getBooks } from './services/fetch-utils';
import './App.css';

export default function BookList() {
  const [books, setBooks] = useState([]);


  useEffect(() => {
    async function doFetch() {
      const books = await getBooks();

      setBooks(books);
    }
    doFetch();
  }, []);

  return (
    <>
      <div className="book-list">
        <h1>Book List</h1>
        {
          books.map((book, i) => <Book author={book.author} title={book.title} id={book.id} year={book.year} key={book.title + book.author + book.id + i}/>)
        }
      </div>
    </>
  );
}