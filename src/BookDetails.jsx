import React from 'react';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
// import './BookDetails.css';
function BookDetails({ books }) {
  const location = useLocation();

  // Access the passed state
  const page = location.state?.book; // If state is available, access bookKey

  // Find the book based on the bookKey
  const book = books.find((book) => book.key === page.key);

  console.log('bookdetails', book.key);
  console.log('key:', page);

  if (!book) {
    return <p>Book found.</p>;
  }

  return (
    <div className="book-details">
      <div className="imp">
        {book.key && (
          <img
            src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
            alt={book.title}
            style={{ width: '150px', height: '225px', marginLeft: '0em' }}
          />
        )}
        <div className="credit">
          <h2>{book.title}</h2>
          <h3 className="author">
            Author: {book.author_name ? book.author_name.join(', ') : 'N/A'}
          </h3>
          <p className="year">
            First published: {book.first_publish_year || 'N/A'}
          </p>
          <span className="year">Description:</span>
          <span>
            Couldn't Provide Description for the book since OpenLibrary API JSON
            doesn't have any.
          </span>
        </div>
      </div>
      <p>
        <span className="year">Publisher: </span>
        {book.publisher ? book.publisher.join(', ') : 'N/A'}
      </p>

      <p>
        <span className="year">Subject:</span>{' '}
        {book.subject ? book.subject.join(', ') : 'N/A'}
      </p>
    </div>
  );
}

export default BookDetails;
