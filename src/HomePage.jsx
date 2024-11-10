import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import BookList from './BookList';

function HomePage({ query, setQuery, handleSearch, books }) {
  return (
    <div>
      {/* Header component with passed props */}
      <Header query={query} setQuery={setQuery} handleSearch={handleSearch} />

      {/* BookList component to show books */}
      <BookList books={books} />
    </div>
  );
}
export default HomePage;
