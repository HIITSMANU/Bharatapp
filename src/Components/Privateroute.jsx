import { useContext, useEffect } from "react"
import { AuthContext } from "../Context/AuthContext"
import { useNavigate } from "react-router-dom";

export const PrivateRoute=({children})=>{
    const {user=null}=useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(()=>{
        if(!user){
            return navigate ("/login");
        }
    },[]);
    return children;
}
