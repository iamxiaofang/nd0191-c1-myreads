import { Book } from "./book";

export const Bookshelf = ({ onChange, books, title, shelf }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {
            books
              .filter(book => book.shelf === shelf)
              .map(book => <li key={book.id}> <Book onChange={onChange} book={book} /></li>)
          }
        </ol>
      </div>
    </div>
  )
}