import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchUser = async () => {
        try {
            const res = await axios.get("/api/users/dashboard", { withCredentials: true });

            setUser(res.data.user);
        }
        catch (err) {
            if (err.response?.status === 401) {
                setUser(null);
            } else {
                console.error("Auth error:", err);
            }
        }
        // catch (err) {
        //     setUser(null);
        // }
        
        finally{
            setLoading(false);
        }

        // setLoading(false);
    }

    useEffect(() => {
        fetchUser();
    }, [])

    return (
        <AuthContext.Provider value={{ user, fetchUser, loading }}>
            {children}
        </AuthContext.Provider>
    );
};
export default AuthProvider;