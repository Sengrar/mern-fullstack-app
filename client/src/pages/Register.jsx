import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";


const Register = () => {

    const navigate = useNavigate();
    const { fetchUser } = useContext(AuthContext);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const nameHandler = (e) => {
        setName(e.target.value);
        setError("");
    }

    const emailHandler = (e) => {
        setEmail(e.target.value);
        setError("");
    }

    const roleHandler = (e) => {
        setRole(e.target.value);
    }

    const passHandler = (e) => {
        setPassword(e.target.value);
        setError("");
    }

    const submitHandler = async (e) => {
        e.preventDefault();

        console.log(name, email, password, role);
        const payload = { name, email, password, role }

        try {
            const res = await axios.post("/api/users/register", payload, { withCredentials: true });
            console.log(res.data);

            if (res.data.success) {
                await fetchUser();
                navigate('/dashboard');
            }
        }
        catch (err) {
            const message = err.response?.data?.message || "Something went wrong!!";
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
                    Sign Up
                </h1>

                {error && (
                    <div className="bg-red-100 text-red-700 px-3 py-2 rounded mb-3 text-sm">
                        {error}
                    </div>
                )}

                <label className="block mb-1">Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={nameHandler}
                    placeholder="Enter your name"
                    className="w-full border p-2 rounded mb-3"
                />

                <label className="block mb-1">Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={emailHandler}
                    placeholder="Enter your email"
                    className="w-full border p-2 rounded mb-3"
                />

                <label className="block mb-1">Role</label>
                <select
                    value={role}
                    onChange={roleHandler}
                    className="w-full border p-2 rounded mb-3"
                >
                    <option value="">Select role</option>
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                </select>

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
                    className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
                >
                    Register
                </button>

            </form>

        </div>
    )
}
export default Register;