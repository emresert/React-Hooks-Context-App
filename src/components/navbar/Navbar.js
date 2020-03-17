import React, { useContext } from 'react';
import { BookContext } from '../../contexts/BookContext'

const Navbar = () => {
    const { books } = useContext(BookContext);
    return (
        <div className="navbar">
            <h1>Reading List</h1>
            <p>You have {books.length > 0 ? books.length + " books" : "0 book"} now... </p>
        </div>
    )
}

export default Navbar;