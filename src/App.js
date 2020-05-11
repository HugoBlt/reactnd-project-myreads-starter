import React from 'react'
import { Route, Link } from 'react-router-dom'
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
      },
      {
        "id": "wantToRead",
        "nameShelf": "Want to Read",
      },
      {
        "id": "read",
        "nameShelf": "Read",
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
  render() {
    return (            
    <div className="app">
      {/*JSON.stringify(this.state.listOfBooks)*/}
      <Route exact path = '/' render = {() => (
        <Home 
          listOfShelf = {this.state.listOfShelf}
          listOfBooks = {this.state.listOfBooks}/>
        )} 
      />
      <Route path = '/search' render = {() => (
        <SearchBook/>
        )} 
      />
      </div>
    )
  }
}

export default BooksApp
