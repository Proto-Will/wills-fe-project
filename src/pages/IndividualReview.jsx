import {useParams} from "react-router-dom";
import { useState, useEffect } from "react";
import ReviewCard from "../components/ReviewCard";
import { useNavigate} from 'react-router-dom'

export default function IndividualReview() {

    const [review, setReview] = useState({})
    const navigate = useNavigate();
    const { review_id } = useParams();
    const [isLoading, setIsLoading] = useState(true)


        useEffect(() => {
        setIsLoading(true)
        fetch(`https://all-about-boardgames.herokuapp.com/api/reviews/${review_id}`)
            .then((response) => response.json())
            .then((data) => {
                setReview(data.review);
                setIsLoading(false)
            })
    }, [])
    const ID = review_id

    if(isLoading) return <p>Loading...</p>

    return  (
        <div>            
            <ReviewCard review={review} />
                <p>{review.review_body}</p>
            <button className="buttons" onClick={() => navigate(`/reviews/${ID}/comments`)}>Comments</button>
        </div>
    );
}