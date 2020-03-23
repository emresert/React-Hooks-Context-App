import React, {useContext} from 'react';
import { BookContext } from '../../contexts/BookContext';
import BookDetails from './BookDetails';


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
                            
                            <BookDetails book={book} key={book.id}></BookDetails>
                        )
                       
                    })}
                    
                </ul>
            </div>
        )
    }
    
    // it does not work. I think error is here
    return books.length > 0 ? notEmptyBooks() : emptyBooks()
     
}
 
export default BookList;