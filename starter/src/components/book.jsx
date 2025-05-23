import { update } from "../BooksAPI"

export const Book = ({ onChange, book }) => {

  const handleChange = (e) => {
    update(book, e.target.value).then(onChange)
  }

  return (<div className="book">
    <div className="book-top">
      <div
        className="book-cover"
        style={{
          width: 128,
          height: 193,
          backgroundImage: `url("${book.imageLinks?.thumbnail}")`,
        }}
      ></div>
      <div className="book-shelf-changer">
        <select value={book.shelf} onChange={handleChange}>
          <option disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    </div>
    <div className="book-title">{book.title}</div>
    <div className="book-authors">{book.authors?.join(', ')}</div>
  </div>

  )
}