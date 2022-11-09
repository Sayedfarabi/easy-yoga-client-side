import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Headers from './Headers';

const Root = () => {
    return (
        <div>
            <div className='min-h-screen'>
                <Headers></Headers>
                <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;