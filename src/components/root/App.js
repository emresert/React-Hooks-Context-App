import React from 'react';
import Navbar from '../navbar/Navbar';
import BookList from '../book/BookList';
import BookForm from '../book/BookForm';


function App() {
  return (
    <div className="App">
   <Navbar/>
   <BookList/>
   <BookForm/>
    </div>
  );
}

export default App;
