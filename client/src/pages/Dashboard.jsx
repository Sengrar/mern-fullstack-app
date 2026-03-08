import { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = ()=>{

    const [user, setUser]= useState(null);

    useEffect(()=>{
        const fetchProfile = async()=>{
            try{
                const res = await axios.get("/api/users/dashboard", {
                    withCredentials: true
                });
                setUser(res.data.user);
                // console.log(res.data.user);
                
            }
            catch(err){
                console.log(err.response?.data?.message);
                console.log(err);
                 
            }
        };
        fetchProfile();
    }, []);

    const logoutHandler = async()=>{
        await axios.post("/api/users/logout", {}, {withCredentials: true});

        window.location.href = "/login";
    }
    return(
        <>
            <h1>Dashboard</h1>

            <h2>Welcome {user?.name}👋</h2>
            <br />
            <button onClick={logoutHandler}>Logout</button>
        </>
    )
}
export default Dashboard;