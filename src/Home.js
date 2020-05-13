import React from 'react'
import { Link } from 'react-router-dom'
import BookSelf from './BookShelf'

const Home = (props) => {  // insert props as arguments here if any
    return (
      <div>
        <div className="list-books-title">
          <h1>Hugo's Library</h1>
        </div>
        {props.listOfShelf.filter((shelf) => (
          shelf.display === true)).map((shelf) => (
            <BookSelf 
            key = {shelf.id}
            name = {shelf.nameShelf}
            listOfBooksShelf = {
                props.listOfBooks.filter((book) => (
                book.shelf === shelf.id
                ))}
            onMoveBook = {props.onMoveBook}
            listOfShelf = {props.listOfShelf}
            />
        ))}
        <Link to="/search">
            <div className="open-search">
              <button>Add a book</button>
            </div>
        </Link>
      </div>
    )
}

export default Home
