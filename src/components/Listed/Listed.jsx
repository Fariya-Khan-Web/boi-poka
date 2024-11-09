import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredRead } from '../JS/AddToStore';
import Book from '../Book/Book';

const Listed = () => {

    const data = useLoaderData()
    const [readList, setReadList] = useState([])

    useEffect(()=>{
        const storedReadList = getStoredRead()
        // console.log(storedReadList, data);
        const readBooks = data.filter(book => storedReadList.includes(book.bookId))     
        // console.log(readBooks.length);  
        setReadList(readBooks)
        console.log(readList);
        console.log(readList.length);

    },[])


    return (
        <div className='min-h-screen max-w-screen-2xl mx-auto'>
            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                   <h1 className='text-center text-4xl font-semibold my-6'>Read books: {readList.length}</h1>
                   {
                    readList.map(book => <Book book={book}></Book>)
                   }
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Listed;