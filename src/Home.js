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
            {this.props.ListOfShelf.map((Shelf) => (
                <BookSelf
                idShelf = {Shelf.id}
                title = {Shelf.nameShelf}
                ListOfBooksShelf = {
                    this.props.ListOfBooks.filter((book) => (
                    book.idShelf == Shelf.id
                    ))}
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