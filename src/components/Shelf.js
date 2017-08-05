import React from 'react'
import Book from './Book'
import '../App.css'

class Shelf extends React.Component {
  passMoveBook = (book, shelf) => {
    this.props.onMoveBook(book, shelf)
  }

  render() {
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.map((book) =>
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

export default Shelf
