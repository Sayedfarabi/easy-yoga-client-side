import React, { createContext, useState } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from './Footer';
import Headers from './Headers';

export const ServiceContext = createContext()

const Root = () => {
    const [allServices, setAllServices] = useState([])
    const services = useLoaderData()
    const contextInfo = {
        services,
        allServices,
        setAllServices

    }
    return (
        <div>
            <ServiceContext.Provider value={contextInfo}>
                <div className='min-h-screen bg-base-200'>
                    <Headers></Headers>
                    <div className='mx-3'>
                        <Outlet></Outlet>
                    </div>
                </div>
                <div>
                    <Footer></Footer>
                </div>
            </ServiceContext.Provider>
        </div>
    );
};

export default Root;