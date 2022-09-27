import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReviewCard from "../components/ReviewCard";


export default function CategorisedReviews() {   
    const [reviewList, setReviewList] = useState([]);
    const { category } = useParams();

    useEffect(() => {
        fetch("https://all-about-boardgames.herokuapp.com/api/reviews")
            .then((response) => response.json())
            .then((reviews) => {
                setReviewList(reviews.reviews);
            })
    }, [])

    let filtered = reviewList.filter((review) => {return review.category === category})

    return (
        <section>
                <div className="grid-container">
                {
                    filtered.map((review) => {
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


