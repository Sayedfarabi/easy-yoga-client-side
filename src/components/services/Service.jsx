import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceDetailsCard from '../card/ServiceDetailsCard';

const Service = () => {
    const data = useLoaderData()
    const service = data.data;
    console.log(service);
    return (
        <div>
            <h1 className='text-4xl text-purple-500 text-center my-6' >{service.name} Service Details</h1>
            <div className='border-solid border rounded-md border-gray-200 my-6'>
                <ServiceDetailsCard
                    key={service._id}
                    service={service}
                >
                </ServiceDetailsCard>
            </div>
        </div>
    );
};

export default Service;