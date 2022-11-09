import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';


const Headers = () => {
    const { logOut, user } = useContext(AuthContext);
    const profileURL = "https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png";
    const userName = "User Name";

    const handleSignOut = () => {
        logOut()
            .then(result => {
                console.log(result)
            })
            .catch(err => {
                alert(err.message)
            })
    }



    return (
        <div className="navbar bg-slate-300">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to={"/home"}>Home</Link></li>
                        <li><Link to={"/services"}>Services</Link></li>
                        <li tabIndex={0}>
                            <Link to={""} className="justify-between">
                                Review
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </Link>
                            <ul className="p-2">
                                <li><Link to={""}>My Review</Link></li>
                                <li><Link to={""}>All Review</Link></li>
                            </ul>
                        </li>
                        <li><Link to={"/blog"}>Blog</Link></li>
                    </ul>
                </div>
                <Link to={"/"} className="btn btn-ghost normal-case text-xl"><p className='text-cyan-600'>Easy <span className='text-orange-600'>Yoga</span></p></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to={"/home"}>Home</Link></li>
                    <li><Link to={"/services"}>Services</Link></li>
                    <li tabIndex={0}>
                        <Link to={""}>
                            Review
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </Link>
                        <ul className="p-2">
                            <li><Link to={"/my-review"}>My Review</Link></li>
                            <li><Link to={"/review-all"}>All Review</Link></li>
                        </ul>
                    </li>
                    <li><Link to={"/blog"}>Blog</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <div className="flex justify-center items-center gap-3">

                    {
                        !user ?
                            <div className='flex justify-center items-center gap-2'>
                                <div className=''>
                                    <Link to={"/login"}>
                                        <button className='btn btn-sm btn-outline btn-primary'>
                                            Sign in
                                        </button>
                                    </Link>
                                </div>
                                <div className=''>
                                    <Link to={"/register"}>
                                        <button className='btn btn-sm btn-outline btn-info'>
                                            Register
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            :
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">

                                        {
                                            user.photoURL ?
                                                <img src={user.photoURL} alt="" />
                                                :
                                                <img src="https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png" alt="" />
                                        }

                                    </div>
                                </label>
                                <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                    {
                                        user.displayName ?
                                            <li className='text-center text-primary'>{user.displayName}</li>
                                            :
                                            <li className='text-center'>User Name</li>
                                    }
                                    <li>
                                        <Link to={"/profile"} className="justify-between">
                                            Profile
                                            <span className="badge">New</span>
                                        </Link>
                                    </li>
                                    <li><Link to={"/setting"}>Settings</Link></li>
                                    <li><Link to={"/"}><button onClick={handleSignOut} className='btn w-full'>Logout</button></Link></li>
                                </ul>
                            </div>
                    }

                </div>
            </div>
        </div>
    );
};

export default Headers;