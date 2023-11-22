import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

const Movie = () => {
    const [movie, setMovie] = useState({});
    let { id } = useParams();

    useEffect(() => {
        let myMovie = {

            id: 1,
            title: "Highlander",
            release_date: "1985-03-07",
            runtime: 116,
            mpaa_rating: "R",
            description: "Lore ipsum ",
        }
        setMovie(myMovie);


    }, [id]);
    return(
        <div>
            <h2>Movie: {movie.title}</h2>
            <small><em>{movie.release_date}, {movie.runtime} minutes, Rated {movie.mpaa_rating}</em></small>
            <hr />
            <p>{movie.description}</p>

        </div>
    )
}
export default Movie;