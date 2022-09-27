import { Link } from 'react-router-dom'
import { useState } from "react";

export default function ReviewCard({ review }) {

    return (
        <li className="review-container" key={review}>
            <img className="list-images" src={review.review_img_url} alt={`${review.title} avatar`} />
            <h3>{review.title}</h3>
            <h4>Designer: {review.designer}</h4>
            <p>Category: {review.category}</p>
            <p>Owner: {review.owner}</p>
            <p>Score: {review.votes}</p>
        </li>
    );
}