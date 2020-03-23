import React, {useContext} from 'react';
import {BooksDetails} from '../book/BookDetails';
import { BookContext } from '../../contexts/BookContext';


const BookList = (props) => {
    const {books} = useContext(BookContext);

    
    const emptyBooks = ()=>{
        return (
            <div className="empty">
                No books to read. Let's read now. You are free!
            </div>
        )
    }

 
    const notEmptyBooks=()=>{
        return (
            <div className="book-list">
                <ul>
                    {books.map(book=>{
                        return (
                            <BooksDetails books={books} key={books.id}></BooksDetails>
                        )
                    })}
                    
                </ul>
            </div>
        )
    }
    

 return books.length>0?emptyBooks:notEmptyBooks
     
}
 
export default BookList;