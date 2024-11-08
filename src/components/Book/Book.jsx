import React from 'react';
import { FaRegStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    const {bookId, image, bookName, author, category, rating } = book
    return (
        <Link to={`/book/${bookId}`}>
            <div className='p-5 border-2 rounded-xl'>
                <div className='bg-gray-100 rounded-lg mb-3'>
                    <img className='h-80 mx-auto p-8' src={image} alt="meaw" />
                </div>
                <span className='p-2 text-green-600 bg-blue-100 rounded-md'>{category}</span>
                <h2 className='font-bold text-2xl my-4'>{bookName}</h2>
                <h4 className='font-semibold text-xl text-gray-700'>By- {author}</h4>
                <hr className='my-4' />
                <div className="flex justify-between">
                    <button className='bg-blue-200 hover:bg-blue-300 p-2 rounded-md font-semibold'>Add to list</button>
                    <div className='text-lg flex align-baseline'>
                        {rating}
                        <FaRegStar className='mt-1 ml-1' />
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;