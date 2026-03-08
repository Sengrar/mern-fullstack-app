import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Register = () => {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [password, setPassword] = useState("");

    const nameHandler = (e) => {
        setName(e.target.value)
    }

    const emailHandler = (e) => {
        setEmail(e.target.value)
    }

    const roleHandler = (e) => {
        setRole(e.target.value)
    }

    const passHandler = (e) => {
        setPassword(e.target.value)
    }

    const submitHandler = async (e) => {
        e.preventDefault();

        console.log(name, email, password, role);
        const payload = { name, email, password, role}

        try {
            const res = await axios.post("/api/users/register", payload);
            console.log(res.data);

            navigate('/dashboard');
        }
        catch (err) {
            console.log(err);
        }
        
    }
    return (
        <>
            <form action="" onSubmit={submitHandler}>
                <h1>SignUp</h1>

                <label htmlFor="">Name</label>
                <input type="text" value={name} onChange={nameHandler} placeholder="Enter Your Name" />

                <br /><br />
                <label htmlFor="">Email</label>
                <input type="email" value={email} onChange={emailHandler} placeholder="Enter Your Email" />

                <br /><br />
                <label htmlFor="">Role</label>
                <input type="text" value={role} onChange={roleHandler} placeholder="Enter Your Role" />

                <br /><br />
                <label htmlFor="">Password</label>
                <input type="password" value={password} onChange={passHandler} placeholder="Enter Your Password" />

                <br /><br />

                <button type="submit">Submit</button>
            </form>
        </>
    )
}
export default Register;