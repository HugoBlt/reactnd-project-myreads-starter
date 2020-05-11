import React from 'react'
import { Route, Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Home from './Home'
import SearchBook from './SearchBook'
import './App.css'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    ListOfShelf : [      
      {
        "id": "1",
        "nameShelf": "Currently Reading",
      },
      {
        "id": "2",
        "nameShelf": "Want to Read",
      },
      {
        "id": "3",
        "nameShelf": "Read",
      }], 
    ListOfBooks : [
      {
        "authors": "Harper Lee",
        "title": "To Kill a Mockingbird",
        "bookURL": 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")',
        "idShelf": "1"
      },
      {
        "authors": "Mark Twain",
        "title": "The Adventures of Tom Sawyer",
        "bookURL": 'url("http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api")',
        "idShelf": "1"
      },
      {
        "authors": "J.R.R. Tolkien",
        "title": "The Hobbit",
        "bookURL": 'url("http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api")',
        "idShelf": "2"
      },
      {
        "authors": "J.K. Rowling",
        "title": "Harry Potter and the Sorcerer's Stone",
        "bookURL": 'url("http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api")',
        "idShelf": "3"
      }
     ]
  }

  render() {
    return (            
    <div className="app">
      <Route exact path = '/' render = {() => (
        <Home 
          ListOfShelf = {this.state.ListOfShelf}
          ListOfBooks = {this.state.ListOfBooks}/>
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
