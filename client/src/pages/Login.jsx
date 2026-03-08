import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login =()=>{
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");

    const emailHandler = (e)=>{
        setEmail(e.target.value)
    }

    const passHandler =(e)=>{
        setPass(e.target.value)
    }

    const submitHandler = async (e)=>{
        e.preventDefault();

        console.log(email);
        const payload = {email, password}

        try{
            const res = await axios.post("/api/users/login", payload, {withCredentials: true});
            console.log(res.data);

            navigate("/dashboard");
        }
        catch(err){
            console.log(err);
            
        }
    }
    return(
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