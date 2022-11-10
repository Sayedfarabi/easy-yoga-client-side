import React from 'react';
import { Link } from 'react-router-dom';

const ServiceDetailsCard = ({ service }) => {
    const { image, name, price, body, rating, _id } = service;
    return (
        <div className='my-12'>
            <div className='flex justify-center mt-3'>
                <div className="card card-compact md:w-2/3 mx-3 bg-base-100 shadow-xl">

                    <figure><img src={image} alt={_id} /></figure>

                    <div className="card-body h-1/2">
                        <h2 className="card-title text-2xl">Service Name : {name}</h2>
                        <p><span className='font-semibold text-xl'>Description :</span> {body}</p>
                        <div className="card-actions flex justify-between">
                            <div>
                                <h5 className='text-xl'>Price : <span className='text-orange-400'>${price}</span></h5>
                            </div>
                            <div>
                                <h5 className='text-xl'>Rating : <span className='text-orange-400'>{rating}</span> </h5>
                            </div>
                            <div>
                                <Link to={"/accounts"}><button className="btn btn-sm btn-success text-xl">Buy Now</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetailsCard;