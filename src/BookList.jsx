import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function BookList({ books }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (books.length > 0) {
      setIsLoaded(true);
    }
  }, [books]);
  console.log('booklenght:', books.length);

  return (
    <div className="book-list">
      {!isLoaded ? (
        <p>Please Search and Wait....</p> // Show loading text or spinner while the books are being fetched
      ) : books.length > 0 ? (
        books.map((book) => (
          <div key={book.key} className="book">
            <h3>
              <Link to={`/book/${book.cover_i}`} state={{ book: book }}>
                <img
                  src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
                  alt={book.title}
                  style={{ width: '100px', height: '150px' }}
                />
              </Link>
            </h3>
            <p className="year">{book.title || 'N/A'}</p>
            <p>
              Author: {book.author_name ? book.author_name.join(', ') : 'N/A'}
            </p>
          </div>
        ))
      ) : (
        <p>No books found</p>
      )}
    </div>
  );
}

export default BookList;
