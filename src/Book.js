import { Link } from 'react-router-dom';

export default function Book({ author, title, id }) {
  
  return (
    <div>
      <Link to={`/books/${id}`}>
        <p>{title} by {author}</p>
      </Link>
    </div>
  );
}