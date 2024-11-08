import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToReadStore, addToWish } from '../JS/AddToStore';


const BookDetail = () => {

    const param = useParams()
    const id = parseInt(param.bookId)

    const data = useLoaderData()

    const book = data.find(book => book.bookId === id)
    const { image, bookName, bookId, author, category, review, tags, rating, totalPages, publisher, yearOfPublishing } = book


    const [read, setRead] = useState([])
    function handleRead(bookId) {
        if (!read.includes(bookId)) {
            const currentRead = [...read, bookId]
            setRead(currentRead);
            console.log(read)

            addToReadStore(bookId);
            
        }
        else{ console.log(bookId, 'exists'); }
    }

    function handleList(bookId){
        addToWish(bookId)
    }

    return (
        <div className='flex flex-col lg:flex-row w-[92%] justify-between gap-6 max-w-screen-2xl mx-auto'>
            <div className='w-[50%] mx-auto lg:w-full'>
                <img src={image} alt="" />
            </div>
            <div className='flex flex-col gap-3'>
                <h1 className='text-5xl font-bold'>{bookName}</h1>
                <h5 className='text-gray-600 font-medium text-xl'>By : {author}</h5>
                <hr />
                <h4>{category}</h4>
                <hr />
                <p><span className='font-bold'>Review: </span>{review}</p>
                <div className="flex">
                    <h5>Tags</h5>
                    <div>
                        {
                            tags.map(tag => <span className='mx-2'>#{tag}</span>)

                        }
                    </div>
                </div>
                <hr />
                <h4 className="text-gray-500 font-medium">Number of pages: <span className='text-black'> {totalPages}</span></h4>
                <h4 className="text-gray-500 font-medium">Publisher: <span className='text-black'>{publisher}</span></h4>
                <h4 className="text-gray-500 font-medium">Year of Publishing: <span className='text-black'>{yearOfPublishing}</span></h4>
                <h4 className="text-gray-500 font-medium">Rating: <span className='text-black'>{rating}</span></h4>
                <div className='mb-8'>
                    <button onClick={() => handleRead(bookId)} className='p-3 px-6 bg-blue-300 hover:bg-blue-400 font-medium rounded-lg mr-4'>Read</button>
                    <button onClick={() => handleList(bookId)} className='p-3 px-6 bg-blue-300 hover:bg-blue-400 font-medium rounded-lg '>Wishlist</button>
                </div>
            </div>

        </div>
    );
};

export default BookDetail;