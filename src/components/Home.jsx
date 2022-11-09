import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from './card/ServiceCard';

const Home = () => {
    const services = useLoaderData();
    console.log(services)
    return (
        <div>
            <h1 className='text-center'>Our Services</h1>
            {/* <div>
                {services.map(service => <ServiceCard></ServiceCard>)}
            </div> */}
        </div>
    );
};

export default Home;