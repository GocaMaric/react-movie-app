import MovieLogo from "./../images/Movie app Logo.jpeg"
import {Link} from "react-router-dom";
const Home = () => {
    return(
        <>
        <div className={"text-center"}>
            <h2>Find a movie to watch tonight!</h2>
            <hr />
            <Link to={"movies"}>
            <img src={MovieLogo} alt={"movie logo"} style={{ width: '200px', height: 'auto' }}></img>
            </Link>

        </div>
        </>
    )
}
export default Home;