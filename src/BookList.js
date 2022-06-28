import Book from './Book';
import { useEffect, useState } from 'react';
import { getBooks } from './services/fetch-utils';

export default function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function doFetch() {
      const books = await getBooks();

      setBooks(books);
      console.log(books);
    }
    doFetch();
  }, []);
  return (
    <div className="book-list">
      {
        books.map((book, i) => <Book author={book.author} title={book.title} key={book.title + book.author + i}/>)
      }
    </div>
  );
}