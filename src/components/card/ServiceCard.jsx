import React from 'react';

const ServiceCard = ({ service }) => {
    // const { image, body, price, _id } = service;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={""} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{ }</h2>
                    <p>{""}</p>
                    <div className="card-actions justify-between">
                        <h5>Price : ${""}</h5>
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;