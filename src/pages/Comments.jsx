import { useState, useEffect } from 'react';
import {useParams} from "react-router-dom";
import CommentCard from '../components/CommentCard';

export default function Comments() {

    const [commentList, setCommentList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { review_id } = useParams();

    useEffect(() => {
        setIsLoading(true);
        fetch(`https://all-about-boardgames.herokuapp.com/api/reviews/${review_id}/comments`)
            .then((response) => response.json())
            .then((comments) => {
                setCommentList(comments.comments);
                setIsLoading(false);
            })
    }, [])

if (isLoading) return <p>Loading...</p>

return (
    <section>
        <div className="grid-container">
            {
                commentList.map((comment) => {
                    return (
                    <div className="grid-item">
                        <CommentCard comment={comment} />
                    </div>
                    )
                })
            }
        </div>
    </section>
);
}