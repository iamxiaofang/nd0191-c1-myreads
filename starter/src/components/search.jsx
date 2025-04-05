import { useState } from "react"
import { search } from "../BooksAPI"
import { Book } from "./book";

export const Search = ({ books, setShowSearchpage, onChange }) => {
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = async (e) => {
    const result = await search(e.target.value)

    if (Array.isArray(result)) {
      setSearchResults(result)
    } else {
      setSearchResults([])
    }
  }
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <a
          className="close-search"
          onClick={() => setShowSearchpage(false)}
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