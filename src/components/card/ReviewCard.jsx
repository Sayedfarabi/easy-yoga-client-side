import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";




const ReviewCard = ({ service, setDataLoad, dataLoad }) => {

    const { user } = useContext(AuthContext)
    const profileURL = "https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png";
    const { _id } = service;
    const [reviews, setReviews] = useState();


    useEffect(() => {
        fetch(`https:/easy-yoga-server-side.vercel.app/review/${_id}`)
            .then(res => res.json())
            .then(data => {
                setDataLoad(!dataLoad)
                setReviews(data.data)
            })
    }, [dataLoad])


    if (!reviews) {

        return <div>Loading ....</div>

    }

    return (
        <div>
            {
                reviews.map(review => {
                    return <div className="overflow-x-auto w-full md:w-3/5 text-center mx-auto border-solid border rounded-lg border-indigo-600 p-4 my-4">
                        <div className="flex justify-between items-center">
                            <div>
                                <label className="mx-2">
                                    <button className='btn btn-warning'>Delete</button>
                                </label>
                                <label>
                                    <button className='btn btn-success'>Edit</button>
                                </label>
                            </div>

                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        {user.photoURL ?
                                            <img src={user.photoURL} alt="profilePhoto" />
                                            :
                                            <img src={profileURL} alt="profilePhoto" />
                                        }
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">Name</div>
                                    <div className="text-sm opacity-50">{user.displayName}</div>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <div className="font-bold">Review</div>
                                    <div className="text-sm opacity-50">{review.body}</div>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <div className="font-bold">Rating</div>
                                    <div className="text-sm opacity-50">{review.rating}</div>
                                </div>
                            </div>

                        </div>

                        {/* <table className="table w-full">
                            <tbody>
                                <tr>
                                    <th>
                                        <label className="mx-2">
                                            <button className='btn btn-warning'>Delete</button>
                                        </label>
                                        <label>
                                            <button className='btn btn-success'>Edit</button>
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    {user.photoURL ?
                                                        <img src={user.photoURL} alt="profilePhoto" />
                                                        :
                                                        <img src={profileURL} alt="profilePhoto" />
                                                    }
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">Name</div>
                                                <div className="text-sm opacity-50">{user.displayName}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="flex items-center space-x-3">

                                            <div>
                                                <div className="font-bold">Name</div>
                                                <div className="text-sm opacity-50">{user.displayName}</div>
                                            </div>
                                            <div>
                                                <div className="font-bold">Rating</div>
                                                <div className="text-sm opacity-50">{user.displayName}</div>
                                            </div>
                                        </div>
                                    </td>

                                </tr>

                            </tbody>


                        </table> */}
                    </div>
                })
            }

            {/* <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <tbody>
                        <tr>
                            <th>
                                <label className="mx-2">
                                    <button className='btn btn-warning'>Delete</button>
                                </label>
                                <label>
                                    <button className='btn btn-success'>Edit</button>
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            {user.photoURL ?
                                                <img src={user.photoURL} alt="profilePhoto" />
                                                :
                                                <img src={profileURL} alt="profilePhoto" />
                                            }
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Name</div>
                                        <div className="text-sm opacity-50">{user.displayName}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="flex items-center space-x-3">

                                    <div>
                                        <div className="font-bold">Name</div>
                                        <div className="text-sm opacity-50">{user.displayName}</div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Rating</div>
                                        <div className="text-sm opacity-50">{user.displayName}</div>
                                    </div>
                                </div>
                            </td>

                        </tr>

                    </tbody>


                </table>
            </div> */}
        </div>
    );
};

export default ReviewCard;