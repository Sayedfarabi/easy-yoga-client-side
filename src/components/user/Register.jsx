import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Register = () => {
    const { createUser, updateUser } = useContext(AuthContext)
    const [error, setError] = useState()

    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const url = form.photo.value;

        const profile = {
            displayName: name,
            photoURL: url
        }

        createUser(email, password)
            .then(result => {
                handleUpdateUser(profile)
                console.log(result)
                setError("")
                form.reset()
            })
            .catch(err => {
                const error = err.message;
                setError(error)
            })
    }

    const handleUpdateUser = profile => {
        updateUser(profile)
            .then(result => {
                // console.log(result)
            })
            .catch(err => {
                setError(err.message)
            })
    }


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-sky-700 text-center">Register Now !</h1>
                        <div className='max-w-sm sm:w-2/3 my-3 mx-auto'>
                            <img className='w-full' src="https://www.pngitem.com/pimgs/m/287-2874255_seller-registration-icon-class-register-icon-png-transparent.png" alt="" />
                        </div>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name :</span>
                                </label>
                                <input type="text" name='name' placeholder="Enter your name" className="input input-bordered" required />

                                <label className="label">
                                    <span className="label-text">Email :</span>
                                </label>
                                <input type="email" name='email' placeholder="Enter your email" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password :</span>
                                </label>
                                <input type="password" name='password' placeholder="Enter password" className="input input-bordered" required />

                                <label className="label">
                                    <span className="label-text">Photo url :</span>
                                </label>
                                <input type="url" name='photo' placeholder="Enter your photo URL" className="input input-bordered" />

                                <label className="label">
                                    <small>Have an account ? Please go to <Link to={"/login"}><span className='text-blue-500'>Log in</span></Link></small>
                                </label>
                            </div>

                            <div>
                                <p className='text-red-400 text-center'>{error}</p>
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;