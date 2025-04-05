# MyReads Project

This is my first project use react and react-rounter-dom

- I created components from the starter code: `<Home />`, `<Search />`, `<Bookshelf />`, `<Book />`
- I use react-router-dom to navigate between home (/) and search (/search)
- For `<Home />`, I use Udacity's `BookAPI.js` to fetch books, and store with useState. I pass the books into the `<Bookshelf />`.
- For `<Bookshelf />`, I filter books to the shelf and map over filtered to render the `<Book />`
- Book thumbnail, title, author is rendered by `<Book />`

## TL;DR

To run the project:

- install all project dependencies with `npm install`
- start the development server with `npm start`

## Udacity Backend Server

To simplify development process, Udacity provided a backend server. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods to get, search and update books:

### `getAll`

Method Signature:

```js
getAll();
```

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf);
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query);
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
- These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.
