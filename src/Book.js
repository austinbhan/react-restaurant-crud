import { Link } from 'react-router-dom';

export default function Book({ author, title }) {
  
  return (
    <div>
      {/* Reinstate when Create page has been made */}
      {/* <Link to={`/books/${title}`}> */} 
      <p>{title} by {author}</p>
      {/* </Link> */}
    </div>
  );
}