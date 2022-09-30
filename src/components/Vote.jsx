export default function VoteOnReview({ review }) {

    const voteOnReview = () => {

    let newScore = {
        inc_votes: 1
     }
        const requestOptions = {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newScore)
        }
        voteFunction(requestOptions)
    }

    function voteFunction(requestOptions) {
        fetch(`https://final-boardgame-api.herokuapp.com/api/reviews/${review.review_id}`, requestOptions)
            .then((response) => response.json()).then()
    }

    return (
        <button className="buttons" onClick={() => voteOnReview()}>Vote</button>
    )
}