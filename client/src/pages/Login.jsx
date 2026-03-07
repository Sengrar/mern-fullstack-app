import { useState } from "react";

const Login =()=>{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [pass, setPass] = useState("");

    const nameHandler = (e)=>{
        setName(e.target.value)
    }

    const emailHandler = (e)=>{
        setEmail(e.target.value)
    }

    const roleHandler = (e)=>{
        setRole(e.target.value)
    }

    const passHandler =(e)=>{
        setPass(e.target.value)
    }

    const submitHandler =(e)=>{
        e.preventDefault();

        console.log(name);
        console.log(email);
        console.log(role);
    }
    return(
        <>
            <form action="" onSubmit={submitHandler}>
                <h1>Login</h1>

                <label htmlFor="">Name</label>
                <input type="text" value={name} onChange={nameHandler} placeholder="Enter Your Name" />

                <br /><br />
                <label htmlFor="">Email</label>
                <input type="email" value={email} onChange={emailHandler} placeholder="Enter Your Email" />

                <br /><br />
                <label htmlFor="">Role</label>
                <input type="text" onChange={roleHandler} placeholder="Enter Your Role" />

                <br /><br />
                <label htmlFor="">Password</label>
                <input type="password" placeholder="Enter Your Password" />

                <br /><br />

                <button type="submit">Submit</button>
            </form>
        </>
    )
}
export default Login;