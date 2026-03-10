import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
    const navigate = useNavigate();
    const { fetchUser } = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");
    const [error, setError] = useState("");

    const emailHandler = (e) => {
        setEmail(e.target.value);
        setError("");
    }

    const passHandler = (e) => {
        setPass(e.target.value);
        setError("");
    }

    const submitHandler = async (e) => {
        e.preventDefault();

        console.log(email);
        const payload = { email, password }

        try {
            const res = await axios.post("/api/users/login", payload, { withCredentials: true });
            console.log(res.data.message);

            // navigate("/dashboard");
            if (res.data.success) {
                await fetchUser();
                navigate("/dashboard");
            }
        }

        // try {
        //     const res = await fetch("/api/users/login", {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json"
        //         },
        //         body: JSON.stringify(payload),
        //         credentials: "include"   // same as axios withCredentials
        //     });

        //     const data = await res.json();
        //     console.log(data.message);

        //     if (data.success) {
        //         await fetchUser();
        //         navigate("/dashboard");
        //     }
        // }

        catch (err) {
            const message = err.response?.data?.message || "Something went wrong";
            console.log(message);

            setError(message);

        }
    }
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">

            <form
                onSubmit={submitHandler}
                className="bg-white p-6 rounded shadow-md w-80"
            >

                <h1 className="text-2xl font-bold mb-4 text-center">
                    Login
                </h1>

                {error && (
                    <div className="bg-red-100 text-red-700 px-3 py-2 rounded mb-3 text-sm">
                        {error}
                    </div>
                )}

                <label className="block mb-1">Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={emailHandler}
                    placeholder="Enter your email"
                    className="w-full border p-2 rounded mb-3"
                />

                <label className="block mb-1">Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={passHandler}
                    placeholder="Enter your password"
                    className="w-full border p-2 rounded mb-4"
                />

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                >
                    Login
                </button>

            </form>
        </div>
    )
}
export default Login;