import { Link } from 'react-router-dom'
import { useState } from "react";

export default function CommentCard({ comment }) {

    return (
        <li className="review-container" key={comment.comment_id}>
            <h3>Commentor: {comment.author}</h3>
            <p>{comment.body}</p>
            <p>Comment Score: {comment.votes}</p>
            <p>{comment.created_at}</p>
        </li>
    );
}