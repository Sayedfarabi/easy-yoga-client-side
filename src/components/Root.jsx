import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Headers from './Headers';


const Root = () => {
    // const services = useLoaderData();
    return (
        <div>
            <div className='min-h-screen'>
                <Headers></Headers>
                <div className='mx-3'>
                    <Outlet></Outlet>
                </div>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;