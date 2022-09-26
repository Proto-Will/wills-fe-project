import ReviewCard from "../components/ReviewCard";


export default function AllReviews({reviewList}) {

    return (
        <section>
            {/* add login functionality here if not already logged in */}
            <div className="grid-container">
                {
                    reviewList.map((review) => {
                        return (
                        <div class="grid-item">
                            <ReviewCard review={review} />
                        </div>
                        )
                    })
                }
            </div>
        </section>
    );
}