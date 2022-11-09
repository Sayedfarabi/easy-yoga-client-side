import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';

const AddReview = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content">
                    <div className="card w-full max-w-lg shadow-2xl bg-base-100">
                        <h1 className='text-6xl text-center font-semibold my-3 text-purple-500'>Review Add to Database</h1>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Service _Id :</span>
                                </label>
                                <input type="text" name='serviceId' placeholder="" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description :</span>
                                </label>
                                <input type="text" name='body' placeholder="Description of review" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Rating :</span>
                                </label>
                                <input type="text" name='rating' placeholder="Service Rating" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">User Email :</span>
                                </label>
                                <input type="text" name='email' placeholder="User Email" className="input input-bordered" defaultValue={user && user.email} readOnly />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">User Image :</span>
                                </label>
                                <input type="url" name='image' placeholder="User image (URL)" className="input input-bordered" defaultValue={user.photoURL && user.photoURL} readOnly />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Add User Review</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddReview;