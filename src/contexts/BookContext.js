import React , {createContext,useState,useReducer} from 'react'
import { bookReducer } from '../reducers/bookReducer';

export const BookContext = createContext();

const BookContextProvider = (props)=>{
   
   // removed part after using UseReducer
   /*

   const [books,setBooks] = useState([
        {title :'name of the wind' , author :'patrick rothfuss' , id:1},
        {title :'the final empire' , author :'brandon senderson',id:2}
    ]);

       const addBook =(title,author)=>{
        setBooks([...books,{title,author,id: books.length + 1}])
    }
    const removeBook = (id)=>{
        setBooks(books.filter(b=>b.id !== id))
    }
      return (
       <BookContext.Provider value={{books,addBook,removeBook}}>
           {props.children}
       </BookContext.Provider>
    );
    */

    // usereducer(reducerName , initialState)
   const [books,dispatch] = useReducer(bookReducer,[]);

 

    return (
       <BookContext.Provider value={{books,dispatch}}>
           {props.children}
       </BookContext.Provider>
    );
}

export default BookContextProvider;

