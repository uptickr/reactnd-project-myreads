import React from 'react'
import { Link } from 'react-router-dom'
import Shelf from './Shelf'
import '../App.css'

class Library extends React.Component {
  passMoveBook = (book, shelf) => {
    this.props.onMoveBook(book, shelf)
  }

  render() {
    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>{this.props.name}</h1>
        </div>
        <div className="list-books-content">
          {this.props.shelves.map((shelf) =>
            <Shelf
              key={shelf.id}
              title={shelf.title}
              books={this.props.books.filter(b => b.shelf === shelf.id)}
              onMoveBook={this.passMoveBook}
            />
          )}
        </div>
        <Link className='open-search' to='/search' />
      </div>
    )
  }
}

export default Library
