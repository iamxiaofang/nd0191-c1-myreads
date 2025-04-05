import { useState, useEffect } from "react"
import { search } from "../BooksAPI"
import { Book } from "./book";
import { Link } from 'react-router-dom';
import { useDebounce } from "../hooks/use-debounce";

export const Search = ({ books, onChange }) => {

  const [searchText, setSearchText] = useState('')
  const debouncedSearch = useDebounce(searchText, 800)

  const [searchResults, setSearchResults] = useState([]);

  const handleChange = async (e) => {
    setSearchText(e.target.value);
  }

  useEffect(() => {
    async function fetchBooks() {
      if (!debouncedSearch) {
        setSearchResults([])
        return
      }

      const apiResponse = await search(debouncedSearch)
      if (Array.isArray(apiResponse)) {
        setSearchResults(apiResponse)
      } else {
        setSearchResults([])
      }
    }
    fetchBooks();
  }, [debouncedSearch])

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">Close</Link>
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