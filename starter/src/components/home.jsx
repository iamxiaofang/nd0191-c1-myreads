import { Bookshelf } from "./bookshelf"
import { Link } from 'react-router-dom';
export const Home = ({ books, getBooks }) => {
  return (
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
      <Link to="/search" className="open-search">Go to Search</Link>
    </div>

  )
}