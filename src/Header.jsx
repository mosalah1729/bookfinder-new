import React from 'react';

function Header({ query, setQuery, handleSearch }) {
  return (
    <header>
      <h1>Book Finder</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter book title"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}

export default Header;
