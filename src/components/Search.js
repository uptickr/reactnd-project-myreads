import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../apis/BooksAPI'
import Book from './Book'
import '../App.css'

class Search extends React.Component {
  state = {
    query: "",
    results: []
  }

  updateResults = (searchResults) => {
    const booksInLibrary = this.props.books.map(b => b.id)
    searchResults.forEach(book => {
      booksInLibrary.includes(book.id) && (
        book.shelf = this.props.books.filter(b => b.id === book.id)[0].shelf
      )
    })
    this.setState({results: searchResults})
  }

  searchBooks = (query) => {
    BooksAPI.search(query, 20).then(results => {
      Array.isArray(results) && this.updateResults(results)
    })
  }

  updateQuery = (query) => {
    this.setState({ query })
    this.searchBooks(query)
  }

  passMoveBook = (book, shelf) => {
    this.props.onMoveBook(book, shelf)
  }

  render() {
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link className='close-search' to='/' />
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={ (e) => this.updateQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.results.map((book) =>
              <li key={book.id}>
                <Book
                  bookObj={book}
                  onMoveBook={this.passMoveBook}
                />
              </li>
            )}
          </ol>
        </div>
      </div>
    )
  }
}

export default Search
