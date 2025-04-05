import "./App.css";
import { useState, useEffect } from "react";

import { getAll } from "./BooksAPI";
import { Bookshelf } from "./components/bookshelf";
import { Search } from "./components/search";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [books, setBooks] = useState([]);

  async function getBooks() {
    const result = await getAll()
    setBooks(result)
  }

  useEffect(() => {
    getBooks()
  }, [])

  return (
    <div className="app">
      {showSearchPage ? (
        <Search showSearchPage={showSearchPage} setShowSearchpage={setShowSearchpage} onChange={setBooks} />
      ) : (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <Bookshelf onChange={getBooks} title="Currently reading" shelf="currentlyReading" books={books} />
              <Bookshelf onChange={getBooks} title="Want to Read" shelf="wantToRead" books={books} />
              <Bookshelf onChange={getBooks} title="Read" shelf="read" books={books} />
            </div>
          </div>
          <div className="open-search">
            <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
