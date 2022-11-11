import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from "../card/ServiceCard";
import { ServiceContext } from '../Root';

const Services = () => {
    const data = useLoaderData()
    const { setAllServices } = useContext(ServiceContext);
    const services = data.data;
    setAllServices(services)

    return (
        <div className='my-10 bg-base-200'>
            <h1 className='text-5xl text-sky-800 text-center'>Our Services</h1>
            <div className='grid md:grid-cols-3 gap-3 my-12 bg-base-200'>
                {
                    services.map(service => {
                        return <ServiceCard
                            key={service._id}
                            service={service}
                        >
                        </ServiceCard>
                    })
                }
            </div>
        </div>
    );
};

export default Services;