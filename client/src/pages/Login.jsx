import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
    const navigate = useNavigate();
    const { fetchUser } = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");

    const emailHandler = (e) => {
        setEmail(e.target.value)
    }

    const passHandler = (e) => {
        setPass(e.target.value)
    }

    const submitHandler = async (e) => {
        e.preventDefault();

        console.log(email);
        const payload = { email, password }

        // try {
        //     const res = await axios.post("/api/users/login", payload, { withCredentials: true });
        //     console.log(res.data);

        //     // navigate("/dashboard");
        //     if (res.data.success) {
        //         await fetchUser();
        //         navigate("/dashboard");
        //     }
        // }

        try {
            const res = await fetch("/api/users/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload),
                credentials: "include"   // same as axios withCredentials
            });

            const data = await res.json();
            console.log(data);

            if (data.success) {
                await fetchUser();
                navigate("/dashboard");
            }
        }

        catch (err) {
            console.log(err.message);

        }
    }
    return (
        <>
            <form action="" onSubmit={submitHandler}>
                <h1>Login</h1>

                <label htmlFor="">Email</label>
                <input type="email" value={email} onChange={emailHandler} placeholder="Enter Your Email" />

                <br /><br />
                <label htmlFor="">Password</label>
                <input type="password" value={password} onChange={passHandler} placeholder="Enter Your Password" />

                <br /><br />

                <button type="submit">Submit</button>
            </form>
        </>
    )
}
export default Login;