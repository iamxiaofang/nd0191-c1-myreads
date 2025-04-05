import { useState } from "react"
import { search } from "../BooksAPI"
import { Book } from "./book";

export const Search = ({ showSearchPage, setShowSearchpage, onChange }) => {
  const [books, setBooks] = useState([]);
  const handleChange = async (e) => {
    const result = await search(e.target.value)

    if (Array.isArray(result)) {
      setBooks(result)
    } else {
      setBooks([])
    }
  }
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <a
          className="close-search"
          onClick={() => setShowSearchpage(!showSearchPage)}
        >
          Close
        </a>
        <div className="search-books-input-wrapper">
          <input onChange={handleChange}
            type="text"
            placeholder="Search by title, author, or ISBN"
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {
            books.map(book => {
              return <li key={book.id}> <Book onChange={onChange} book={book} /></li>
            })
          }
        </ol>
      </div>
    </div>
  )
}