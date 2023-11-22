import {Link, Outlet, useNavigate} from "react-router-dom";
import {useState} from "react";
import Alert from "./components/Alert";

function App() {
    const [jwtToken, setJwtToken] = useState("");
    const [alertMessage, setAlertMessage] = useState("");
    const [alertClassName, setAlertClassName] = useState("d-none");

    const navigate = useNavigate();

    const logOut = () => {
        setJwtToken("");
        navigate("/login");
    }

    return (
        <div className={"container"}>
            <div className={"row"}>
                <div className={"col"}>
                    <h1 className={"mt-3"}>Go Watch a Movie</h1>
                </div>
                <div className={"col text-end"}>
                    {jwtToken === ""
                        ? <Link to={"/login"}><span className={"badge bg-success"} style={{
                            backgroundColor: "greenyellow",
                            fontSize: '1.2em',
                            padding: '10px'
                        }}>Login</span></Link>
                        : <a href={"#!"} onClick={logOut}><span className={"badge bg-danger"} style={{
                            backgroundColor: "orangered",
                            fontSize: '1.2em',
                            padding: '10px'
                        }}>Logout</span></a>
                    }
                </div>
                <hr className={"mb-3"}></hr>
            </div>
            <div className={"row"}>
                <div className={"col-md-2"}>
                    <nav>
                        <div className={"list-group"}>
                            <Link to={"/"} className={"list-group-item list-group-item-action"}
                                  style={{backgroundColor: 'teal', color: 'white'}}>Home</Link>
                            <Link to={"/movies"} className={"list-group-item list-group-item-action"}
                                  style={{backgroundColor: 'teal', color: 'white'}}>Movies</Link>
                            <Link to={"/genres"} className={"list-group-item list-group-item-action"}
                                  style={{backgroundColor: 'teal', color: 'white'}}>Genres</Link>
                            {jwtToken !== "" &&
                                <>
                                    <Link to={"/admin/movies/0"} className={"list-group-item list-group-item-action"}
                                          style={{backgroundColor: 'teal', color: 'white'}}>Add Movie</Link>
                                    <Link to={"/manage-catalogue"} className={"list-group-item list-group-item-action"}
                                          style={{backgroundColor: 'teal', color: 'white'}}>Manage Catalogue</Link>
                                    <Link to={"/graphql"} className={"list-group-item list-group-item-action"}
                                          style={{backgroundColor: 'teal', color: 'white'}}>GraphQL Demonstration</Link>
                                </>
                            }
                        </div>
                    </nav>
                </div>
                <div className={"col-md-10"}>
                    <Alert>
                        message={alertMessage}
                        className={alertClassName}
                    </Alert>
                    <Outlet context={{
                        jwtToken, setJwtToken, setAlertClassName, setAlertMessage
                    }}></Outlet>

                </div>
            </div>
        </div>
    );
}

export default App;
