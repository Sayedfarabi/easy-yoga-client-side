import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';
import UserReviewCard from '../card/UserReviewCard';

const MyReview = () => {
    const { user, logOut } = useContext(AuthContext);
    const [loading, setLoading] = useState(true)

    const [userReviewData, setUserReviewData] = useState({})

    const userReviews = userReviewData?.data;
    // console.log(userReviews)


    useEffect(() => {
        fetch(`https://easy-yoga-server-side.vercel.app/user-reviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('easy-yoga-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut()
                }
                return res.json()
            })
            .then(data => {
                if (data.success) {
                    setUserReviewData(data)
                    setLoading(false)
                    toast.success("user data loaded")
                } else {
                    toast.error("user data can't loaded")
                }

            })
    }, [user, logOut, loading])

    if (loading) {
        return <div className='flex justify-center'>
            <progress className="progress progress-info w-56 text-center" value="100" max="100"></progress>
        </div>


    }





    return (
        <div>
            <h1 className='text-4xl text-center text-cyan-800 mb-4'>This is My Review Page</h1>
            <p className='text-center'>Please Reload </p>
            <div>
                {
                    !loading &&
                    userReviews.map(review => {
                        return <UserReviewCard
                            key={review?._id}
                            review={review}
                        ></UserReviewCard>
                    })
                }
            </div>
        </div>
    );
};

export default MyReview;