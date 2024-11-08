import React from 'react';
import bannerImg from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:justify-between lg:flex-row-reverse">
                    <img
                        src={bannerImg}
                        className="rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold mb-20">Books to freashen up <br /> your bookshelf</h1>
                        <button className="btn btn-success mx-auto">View the list</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;