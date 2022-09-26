import { Link } from 'react-router-dom'
import { useState } from "react";

export default function ReviewCard({ review }) {

    return (
        <li className="review-container" key={review}>
            <img className="list-images" src={review} alt={`${review} avatar`} />
            <h3>{review}</h3>
            <p>Kudos: {review}</p>
        </li>
    );
}