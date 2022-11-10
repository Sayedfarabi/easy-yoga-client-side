import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ReviewCard from '../card/ReviewCard';
import ServiceDetailsCard from '../card/ServiceDetailsCard';
import AddReview from '../reviews/AddReview';


const Service = () => {
    const [dataLoad, setDataLoad] = useState(false);
    const data = useLoaderData()
    const service = data.data;
    const { _id } = service;

    return (
        <div>
            <div className='border-solid border rounded-md border-gray-200 my-6'>
                <h1 className='text-5xl text-sky-800 text-center my-6' >{service.name} Service Details</h1>
                <ServiceDetailsCard
                    key={_id}
                    service={service}

                >
                </ServiceDetailsCard>
            </div>

            <div className='border-solid border rounded-md border-gray-200 my-6'>

                <h1 className='text-5xl text-sky-800 text-center my-6'>User Review</h1>

                <ReviewCard
                    key={_id}
                    service={service}
                    setDataLoad={setDataLoad}
                    dataLoad={dataLoad}
                >
                </ReviewCard>

            </div>

            <div className='border-solid border rounded-md border-gray-200 my-6'>
                <AddReview
                    key={_id}
                    service={service}
                >
                </AddReview>
            </div>
        </div>
    );
};

export default Service;