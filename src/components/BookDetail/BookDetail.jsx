import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const BookDetail = () => {

    const {bookId} = useParams()
    const id = parseInt(bookId)
    
    const data = useLoaderData()

    const book = data.find(book => book.bookId === id)
    console.log(data, book, bookId);


    return (
        <div>
            
        </div>
    );
};

export default BookDetail;