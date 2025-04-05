import "./App.css";
import { useState, useEffect } from "react";

import { getAll } from "./BooksAPI";
import { Home } from "./components/home";
import { Search } from "./components/search";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [books, setBooks] = useState([]);

  // fetch books and set books state
  async function getBooks() {
    const result = await getAll()
    setBooks(result)
  }

  // get books on page load
  useEffect(() => {
    getBooks()
  }, [])

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home books={books} getBooks={getBooks} />} />
          <Route path="/search" element={<Search books={books} onChange={getBooks} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
