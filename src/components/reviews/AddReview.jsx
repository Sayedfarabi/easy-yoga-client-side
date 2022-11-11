import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';

const AddReview = ({ service }) => {
    const [review, setReview] = useState({});
    const { user } = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        fetch("https://easy-yoga-server-side.vercel.app/add-review", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.success) {
                    toast.success(data.message, {
                        duration: 4000,
                        position: 'top-center',

                    })
                }
                form.reset()
            })
        console.log(review)

    }

    const handleInputBlur = event => {
        const field = event.target.name;
        const value = event.target.value;

        const newReview = { ...review }
        newReview[field] = value;
        setReview(newReview)

    }


    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content">
                    <div className="card w-full max-w-lg shadow-2xl bg-base-200">
                        <h1 className=' font-semibold my-3 text-5xl text-sky-800 text-center px-5'>  Please Review for {service.name}</h1>
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Service _Id :</span>
                                </label>
                                <input onBlur={handleInputBlur} type="text" name='serviceId' placeholder="" className="input input-bordered border-teal-500" defaultValue={service._id} required readOnly />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description :</span>
                                </label>
                                <input onBlur={handleInputBlur} type="text" name='body' placeholder="Description of review" className="input input-bordered border-teal-500" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Rating :</span>
                                </label>
                                <input onBlur={handleInputBlur} type="text" name='rating' placeholder="Service Rating" className="input input-bordered border-teal-500" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">User Email :</span>
                                </label>
                                <input onBlur={handleInputBlur} type="text" name='email' placeholder="User Email" className="input input-bordered border-teal-500" defaultValue={user && user?.email} readOnly />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">User Image :</span>
                                </label>
                                <input onBlur={handleInputBlur} type="url" name='image' placeholder="User image (URL)" className="input input-bordered border-teal-500" defaultValue={user?.photoURL && user?.photoURL} readOnly />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Add User Review</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddReview;