import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './Header';
// import BookList from './BookList';
import BookDetails from './BookDetails';
import HomePage from './HomePage';

import './App.css';

function App() {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    const res = await fetch(
      `https://openlibrary.org/search.json?title=${query}`
    );
    const data = await res.json();
    setBooks(data.docs || []);
  };

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                query={query}
                setQuery={setQuery}
                handleSearch={handleSearch}
                books={books}
              />
            }
          />
          <Route
            path="/book/:cover_i"
            element={<BookDetails books={books} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
