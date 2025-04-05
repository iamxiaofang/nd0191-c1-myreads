import { useState } from "react"
import { search } from "../BooksAPI"
import { Book } from "./book";

export const Search = ({ books, setShowSearchpage, onChange }) => {
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = async (e) => {
    const apiResponse = await search(e.target.value)
    if (Array.isArray(apiResponse)) {
      setSearchResults(apiResponse)
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
            searchResults.map(result => {

              const bookInMyBookshelf = books.find(book => book.id === result.id)
              const shelf = bookInMyBookshelf ? bookInMyBookshelf.shelf : 'none'

              return <li key={result.id}> <Book onChange={onChange} book={{
                ...result,
                shelf,
              }} /></li>
            })
          }
        </ol>
      </div>
    </div>
  )
}