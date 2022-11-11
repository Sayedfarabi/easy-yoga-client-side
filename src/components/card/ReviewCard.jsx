import { useEffect, useState } from "react";
import UserReviewCard from "./UserReviewCard";


const ReviewCard = ({ service }) => {

    const [dataLoad, setDataLoad] = useState(true);
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
                    return <UserReviewCard
                        key={review?._id}
                        review={review}
                    ></UserReviewCard>
                })
            }

        </div>
    );
};

export default ReviewCard;