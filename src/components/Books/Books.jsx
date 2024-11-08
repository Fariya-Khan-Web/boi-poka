import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {

    const [books, setBooks] = useState([]);

    useEffect(()=>{
        fetch('./booksData.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])

    return (
        <div className='my-10'>
            <h1 className='font-bold text-4xl text-center my-8'>Books</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 w-[95%] mx-auto'>
                {
                    books.map(book=> <Book key={book.id} book={book}></Book>)
                }
            </div>
            
        </div>
    );
};

export default Books;