import ReviewCard from "../components/ReviewCard";
import { useState, useEffect } from 'react';


export default function AllReviews() {

    const [reviewList, setReviewList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetch("https://all-about-boardgames.herokuapp.com/api/reviews")
            .then((response) => response.json())
            .then((reviews) => {
                setReviewList(reviews.reviews);
                setIsLoading(false);
            })
    }, [])
    
    if(isLoading) return <p>Loading...</p>

return (
        <section>
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