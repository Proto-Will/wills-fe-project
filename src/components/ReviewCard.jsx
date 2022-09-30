import { Link } from 'react-router-dom'
import { useState } from "react";

export default function ReviewCard({ review }) {

    return (
        <li className="review-container" >
            <img className="list-images" src={review.review_img_url} alt={`${review.title} avatar`} />
            <h3><Link to={`/reviews/${review.review_id}`} className="all-links" >{review.title}</Link></h3>
            <h4>Designer: {review.designer}</h4>
            <p>Category: {review.category}</p>
            <p>Owner: {review.owner}</p>
            <p>{review.review_body}</p>
            <p>Score: {review.votes}</p>
        </li>
    );
}