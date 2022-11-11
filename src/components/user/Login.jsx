import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {
    const { signIn, signInWithGoogle, addEmailToDb } = useContext(AuthContext)
    const [error, setError] = useState();
    const navigate = useNavigate();
    const location = useLocation()
    // console.log(location);
    const from = location?.state?.from?.pathname || "/";
    // console.log(from)

    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                const userEmail = user.email;
                getJwtToken(userEmail)
                setError("")
                navigate(from)
                form.reset()

            })
            .catch(err => {
                setError(err.message)
            })
    }

    const googleHandler = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                const userEmail = user.email;
                addEmailToDb(userEmail)
                getJwtToken(userEmail)
                setError("")
                navigate(from)
            })
            .catch(err => {
                setError(err.message)
            })

    }
    const getJwtToken = email => {
        const userEmail = {
            email
        }
        fetch("https://easy-yoga-server-side.vercel.app/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userEmail)
        })
            .then(res => res.json())
            .then(data => {
                localStorage.setItem('easy-yoga-token', data.token);
            })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-sky-700 text-center">Login now!</h1>
                        <div className='max-w-sm sm:w-2/3 my-3 mx-auto'>
                            <img className='w-full' src="https://i.pinimg.com/736x/ec/fb/9f/ecfb9ffd184bceec03b3c19161eee7fd.jpg" alt="" />
                        </div>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">

                            <div className="form-control">
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

                                <label className="label mx-auto">
                                    <button onClick={googleHandler} className='btn btn-outline btn-primary btn-sm rounded-md'>Sign in with Google</button>
                                </label>

                                <label className="label">
                                    <Link to={""} href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>

                                <label className="label">
                                    <small>Haven't an account ? Please go to <Link to={"/register"}><span className='text-blue-500'>Register</span></Link></small>
                                </label>
                            </div>

                            <div>
                                <p className='text-red-400 text-center'>{error}</p>
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;