import React,{useContext} from 'react';
import { BookContext } from '../../contexts/BookContext';


const BookDetails = ({book}) => {
      // removed part after using UseReducer
     // const {removeBook} = useContext(BookContext);
     // <li className="frame-of-bookInfo" onClick={()=>removeBook(book.id)}>

     const {dispatch} = useContext(BookContext);

    return ( 
        <li className="frame-of-bookInfo" onClick={()=>dispatch({type:'REMOVE_BOOK',id:book.id})}>
            <div className="title">{book.title}</div>
            <div className="author">{book.author}</div>
        </li>
     );
}
 
export default BookDetails;