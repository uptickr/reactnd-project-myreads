import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './apis/BooksAPI'
import Library from './components/Library'
import Search from './components/Search'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: [],
    shelves: [
      { id: "currentlyReading", title: "Currently Reading" },
      { id: "wantToRead", title: "Want to Read" },
      { id: "read", title: "Read" }
    ]
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  moveBook = (book, shelf) => {
    BooksAPI.update({id: book.id}, shelf)
    book.shelf = shelf
    this.setState(state => ({
      books: state.books.filter(b => b.id !== book.id).concat([book])
    }))
  }

  render() {
    return(
      <div className="app">
        <Route exact path="/" render={() => (
          <Library
            name="MyReads"
            shelves={this.state.shelves}
            books={this.state.books}
            onMoveBook={this.moveBook}
          />
        )}/>
        <Route exact path="/search" render={() => (
          <Search
            books={this.state.books}
            onMoveBook={this.moveBook}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
