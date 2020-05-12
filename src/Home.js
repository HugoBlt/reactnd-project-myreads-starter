import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import BookSelf from './BookShelf'

class Home extends Component {
    render () {
        return (
            <div>
            <div className="list-books-title">
              <h1>Hugo's Library</h1>
            </div>
            {this.props.listOfShelf.filter((shelf) => (
              shelf.display === true)).map((shelf) => (
                <BookSelf
                shelf = {shelf.id}
                title = {shelf.nameShelf}
                listOfBooksShelf = {
                    this.props.listOfBooks.filter((book) => (
                    book.shelf === shelf.id
                    ))}
                onMoveBook = {this.props.onMoveBook}
                listOfShelf = {this.props.listOfShelf}
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

}

export default Home
