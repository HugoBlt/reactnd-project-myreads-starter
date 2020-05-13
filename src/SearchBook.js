import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'


class SearchBook extends Component {
    state = {
        query: '',
        searchedBooks: []
      }
    updateQuery = (query) => {
      query !== '' 
      ?
      BooksAPI.search(query).then(
        (searchedBooks) => {
          if (searchedBooks.error){
            searchedBooks = [] 
          }else{
          let alreadyhave = searchedBooks.filter(b => !this.props.listOfBooks.map(book => book.id).includes(b.id));
          this.setState(() => ({ 
            query : query,
            searchedBooks : alreadyhave.concat(this.props.listOfBooks)
          }))
      }})
      :
      this.setState(() => ({ 
          query : '',
          searchedBooks : [] 
          }))
    }
    render () {
      const { query } = this.state.query
        return (
              <div className="search-books">
                <div className="search-books-bar">
                <Link to = '/'>
                    <button className="close-search">Close</button>
                </Link>
                  <div className="search-books-input-wrapper">
                    <input 
                      type="text" 
                      placeholder="Search by title or author"
                      value = {query}
                      onChange = {(event) => this.updateQuery(event.target.value)}/>
                  </div>
                </div>
                <div className="search-books-results">
                    {/*JSON.stringify(this.state.searchedBooks)*/}
                    {typeof this.state.searchedBooks.error == "undefined"
                    ?
                    <ol className="books-grid">
                      {this.state.searchedBooks.map((book) => (
                        <li key = {book.id}>
                          <Book
                          book = {book}
                          onMoveBook = {this.props.onMoveBook}
                          listOfShelf = {this.props.listOfShelf}
                          />
                        </li>
                      ))}
                    </ol>
                    :
                    <div> <h2 className="center">No books find </h2></div>} 
                </div>
              </div>
        )
    }

}

export default SearchBook