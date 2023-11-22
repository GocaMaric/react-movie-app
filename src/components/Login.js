import {useState} from "react";
import Input from "./form/Input";
import {useNavigate, useOutletContext} from "react-router-dom";

const Login = () => {
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { setJwtToken } = useOutletContext();
    const { setAlertClassName } = useOutletContext();
    const { setAlertMessage } = useOutletContext();

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("email/pass", email, password);

        if (email === "admin@example.com") {
        setJwtToken("abc");
        setAlertClassName("d-none");
        setAlertMessage("");
        navigate("/");
        } else{
            setAlertClassName("alert-danger");
            setAlertMessage("Invalid credentials");
        }
    }
    return(
        <div style={{ maxWidth: '400px', margin: 'auto', marginTop: '50px' }}>
            <h2 style={{ textAlign: 'center' }}>Login</h2>
            <hr />
            <form onSubmit={handleSubmit}>
                <Input
                    title="Email Address"
                    type="email"
                    className="form-control"
                    name="email"
                    autoComplete="email-new"
                    onChange={(event) => setEmail(event.target.value)}
                />
                <Input
                    title="Password"
                    type="password"
                    className="form-control"
                    name="password"
                    autoComplete="password-new"
                    onChange={(event) => setPassword(event.target.value)}
                />
                <button type="submit" className="btn btn-primary" style={{ marginTop: '10px' }}>
                    Log In
                </button>
            </form>

        </div>
    )
}
export default Login;