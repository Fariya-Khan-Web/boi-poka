import React from 'react';

const ErrorPage = () => {
    // const na = navigator()
    return (
        <div className='text-center mt-52'>
            <h1 className="text-6xl font-bold my-10">Page not found</h1>
            <button className='bg-slate-200 hover:bg-slate-300 p-3 font-medium rounded-lg text-xl'>Go Back</button>
        </div>
    );
};

export default ErrorPage;