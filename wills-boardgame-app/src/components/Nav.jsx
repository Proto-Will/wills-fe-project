import { useNavigate} from 'react-router-dom'

export default function Nav({currUser}) {

    const navigate = useNavigate();
    let loggedIn = false;
    if (currUser) loggedIn = true;

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