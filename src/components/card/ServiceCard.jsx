import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { image, body, price, name, _id } = service;
    return (
        <div className='flex justify-center mt-3'>
            <div className="card card-compact w-72 h-96 bg-base-100 shadow-xl">

                <figure><img className='object-contain h-48 w-full' src={image} alt="serviceImg" /></figure>

                <div className="card-body h-1/2">
                    <h2 className="card-title">{name}</h2>
                    <p>{body.length < 100 ? body : body.slice(0, 100)}</p>
                    <div className="card-actions justify-between">
                        <h5>Price : <span className='text-orange-400'>${price}</span></h5>
                        <Link to={`/service/${_id}`}><button className="btn btn-sm btn-success">Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;