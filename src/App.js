import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Home from './Home'
import SearchBook from './SearchBook'
import './App.css'

class BooksApp extends React.Component {
  state = {
    listOfShelf : [      
      {
        "id": "currentlyReading",
        "nameShelf": "Currently Reading",
        "display": true
      },
      {
        "id": "wantToRead",
        "nameShelf": "Want to Read",
        "display": true
      },
      {
        "id": "read",
        "nameShelf": "Read",
        "display": true
      },
      {
        "id": "none",
        "nameShelf": "None",
        "display": false
      }], 
    listOfBooks : [
     ]
    }
  componentDidMount() {
    BooksAPI.getAll().then(
      (listOfBooks) => {
        this.setState(() => ({ 
          listOfBooks 
        }))
    })
  }
  moveBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then(
      result =>
        BooksAPI.getAll().then(
          listOfBooks => {
            this.setState(() => ({ 
              listOfBooks 
            }))
      }))
    }
  render() {
    return (            
    <div className="app">
      {/*JSON.stringify(this.state.listOfBooks)*/}
      <Route exact path = '/' render = {() => (
        <Home 
          listOfShelf = {this.state.listOfShelf}
          listOfBooks = {this.state.listOfBooks}
          onMoveBook = {this.moveBook}/>
        )} 
      />
      <Route path = '/search' render = {() => (
        <SearchBook
        listOfShelf = {this.state.listOfShelf}
        listOfBooks = {this.state.listOfBooks}
        onMoveBook = {this.moveBook}/>
        )} 
      />
      </div>
    )
  }
}

export default BooksApp
