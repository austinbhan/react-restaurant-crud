import { Link } from 'react-router-dom';

export default function Book({ author, title, id, year }) {
  return (

    <div>
      <Link to={`/books/${id}`}> 
        <p>{title} by {author}. {year}</p>
      </Link>
    </div>

  );
}