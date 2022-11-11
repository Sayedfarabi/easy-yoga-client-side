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
        fetch(`https://easy-yoga-server-side.vercel.app/user-reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setUserReviewData(data)
                    setLoading(false)
                    toast.success("user data loaded")
                } else {
                    toast.error("user data can't loaded")
                }

            })
    }, [user, logOut])

    if (loading) {
        return <progress className="progress progress-info w-56 text-center" value="100" max="100"></progress>
    }





    return (
        <div>
            <h1>This is My Review Page</h1>
            <div>
                {
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