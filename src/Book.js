import { Link } from 'react-router-dom';

export default function Book({ author, title, id }) {
  return <Link to={`/books/${id}`}>
    <p>{title} by {author}</p>
  </Link>;
}