import React, { useState } from 'react';
import toast from 'react-hot-toast';

const AddService = () => {
    const [service, setService] = useState({})

    const handleAddService = event => {
        event.preventDefault()
        const form = event.target;
        // console.log(service)

        fetch("https://easy-yoga-server-side.vercel.app/services", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.success) {
                    toast.success(data.message, {
                        duration: 4000,
                        position: 'top-center',

                    })
                    form.reset()
                }
            })



    }

    const handleInputBlur = event => {
        const field = event.target.name;
        const value = event.target.value;

        const newService = { ...service }
        newService[field] = value;
        setService(newService)

    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content">
                    <div className="card w-full max-w-lg shadow-2xl bg-base-100">
                        <h1 className='text-6xl text-center font-semibold my-3 text-purple-500'>Service Add to Database</h1>
                        <form onSubmit={handleAddService} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Service Name :</span>
                                </label>
                                <input onBlur={handleInputBlur} type="text" name='name' placeholder="Name" className="input input-bordered border-teal-500" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description :</span>
                                </label>
                                <textarea onBlur={handleInputBlur} type="text" name='body' placeholder="Description of service" className="textarea textarea-accent" required>
                                </textarea>
                                {/* <input type="text" name='body' placeholder="Description of service" className="input input-bordered" required /> */}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Rating :</span>
                                </label>
                                <input onBlur={handleInputBlur} type="text" name='rating' placeholder="Service Rating" className="input input-bordered border-teal-500" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price :</span>
                                </label>
                                <input onBlur={handleInputBlur} type="text" name='price' placeholder="Service Price $" className="input input-bordered border-teal-500" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image :</span>
                                </label>
                                <input onBlur={handleInputBlur} type="text" name='image' placeholder="Service image (URL)" className="input input-bordered border-teal-500" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Add Service</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AddService;