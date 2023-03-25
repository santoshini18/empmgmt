import React from 'react'
 import { Link } from 'react-router-dom'
import'../App.css';

const BookCard =(props) => {
  const book = props.book

  return (
    //  navbar
    <div className='card-container'>
      <img 
      src=''
      alt='Books'
      height={200}
      />
       <div className='desc'>
         <h2>
           <Link to={ `/show-book/${book._id}`} > {book.title}</Link>
         </h2>
         <h3>{book.author}</h3>
         <p>{book.description}</p>
       </div>
     </div>
 )
}

// function BookCard() {
//   return (
//     <div><h1>This is the BookCard Components</h1></div>
//   )
// }

export default BookCard