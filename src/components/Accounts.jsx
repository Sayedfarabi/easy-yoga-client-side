import React from 'react';
import { Link } from 'react-router-dom';

const Accounts = () => {
    return (
        <div className='text-center flex justify-center items-center my-12'>
            <div>
                <h1 className='text-4xl mb-6'>This is Account Component</h1>
                <p>Go To <span className='text-blue-600'><Link to={"/"}>Home</Link></span></p>
            </div>
        </div>
    );
};

export default Accounts;