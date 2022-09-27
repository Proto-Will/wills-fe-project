import { useNavigate} from 'react-router-dom'

export default function Nav() {

    const navigate = useNavigate();

    return (
        <nav>
            <div id="homepage-link">
            </div>
            <div id="button-div">
                <button className="buttons" onClick={() => navigate("/reviews")}>Reviews</button>
            </div>
        </nav>
    );
}