import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Headers from './Headers';

const Root = () => {
    return (
        <div>
            <Headers></Headers>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;