import ReviewCard from "../components/ReviewCard";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';


export default function AllReviews() {

    const [reviewList, setReviewList] = useState([]);

    useEffect(() => {
        fetch("https://all-about-boardgames.herokuapp.com/api/reviews")
            .then((response) => response.json())
            .then((reviews) => {
                setReviewList(reviews.reviews);
            })
    }, [])

    return (
        <section>
            {/* add login functionality here if not already logged in */}
            <div className="grid-container">
                {
                    reviewList.map((review) => {
                        return (
                        <div className="grid-item">
                            <ReviewCard review={review} />
                        </div>
                        )
                    })
                }
            </div>
        </section>
    );
}