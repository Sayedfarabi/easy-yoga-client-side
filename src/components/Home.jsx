import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ServiceCard from './card/ServiceCard';

const Home = () => {
    const services = useLoaderData();
    console.log(services)
    return (
        <div>
            <h1 className='text-center text-4xl'>Our Services</h1>
            <div className='md:flex md:justify-evenly md:gap-3 my-5'>
                {
                    services.map(service => {
                        return <ServiceCard
                            key={service._id}
                            service={service}
                        >
                        </ServiceCard>
                    })}
            </div>
            <div className='text-center'>
                <Link to={"/services"}><button className='btn btn-sm btn-primary'>See More</button></Link>
            </div>
        </div>
    );
};

export default Home;