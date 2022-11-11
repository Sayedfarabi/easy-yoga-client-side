import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './card/ServiceCard';
import { ServiceContext } from './Root';

const Home = () => {
    // const services = useLoaderData();
    const servicesData = useContext(ServiceContext);
    const services = servicesData.services;
    // console.log(services)
    return (
        <div>
            <div>
                <div className="hero md:py-28 sm:py-10 bg-base-200">
                    <div className="hero-content text-center">
                        <div className="max-w-md">
                            <h1 className="text-5xl font-bold">Hello Viewer</h1>
                            <p className="py-6">According to the National Institutes of Health, scientific evidence shows that yoga supports stress management, mental health, mindfulness, healthy eating, weight loss and quality sleep . <br />
                                Do you want to take our service ? Then choose your preferred service now ...</p>
                            <Link to={"/services"}><button className="btn btn-primary">Get Started</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='py-40 bg-base-200'>
                <h1 className='text-center text-4xl font-semibold'>Our Services</h1>
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
        </div>
    );
};

export default Home;