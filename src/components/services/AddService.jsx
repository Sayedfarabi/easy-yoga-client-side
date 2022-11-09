import React from 'react';

const AddService = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content">
                    <div className="card w-full max-w-lg shadow-2xl bg-base-100">
                        <h1 className='text-6xl text-center font-semibold my-3 text-purple-500'>Service Add to Database</h1>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Service Name :</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered border-teal-500" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description :</span>
                                </label>
                                <textarea type="text" name='body' placeholder="Description of service" className="textarea textarea-accent" required>
                                </textarea>
                                {/* <input type="text" name='body' placeholder="Description of service" className="input input-bordered" required /> */}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Rating :</span>
                                </label>
                                <input type="text" name='rating' placeholder="Service Rating" className="input input-bordered border-teal-500" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price :</span>
                                </label>
                                <input type="text" name='price' placeholder="Service Price $" className="input input-bordered border-teal-500" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image :</span>
                                </label>
                                <input type="text" name='image' placeholder="Service image (URL)" className="input input-bordered border-teal-500" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Add Service</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AddService;