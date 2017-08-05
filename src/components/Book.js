import React from 'react'
import '../App.css'

class Book extends React.Component {
  render() {
    let { id, title, shelf, authors, imageLinks } = this.props.bookObj
    let thumbnail = imageLinks === undefined ? "" : imageLinks.thumbnail
    authors = authors || []

    return(
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${thumbnail})` }}></div>
          <div className="book-shelf-changer">
            <select onChange={ (e) => this.props.onMoveBook(this.props.bookObj, e.target.value)} value={shelf}>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{title}</div>
        { authors.map((author, index) =>
          <div key={index} className="book-authors">{author}</div>
        )}
      </div>
    )
  }
}

export default Book
