import { useNavigate } from "react-router-dom";
import "./ForgetPassword.css";

const ForgetPassword=()=>{
    const navigate= useNavigate();
    function create_password(){
        alert("Password successfully changed");
        navigate("/");
    }

    return(
        <div className="forget_password_Container">
        
        <form className="forget_password">
        <h1 className="forget_password_header">Forget Password</h1>
            <input className="new_password" type="password" placeholder="New Password"></input>
            <input className="new_password" type="password" placeholder="Confirm Password"></input>
            <button className="Create Password" onClick={create_password}>Create Password</button>
            
        </form>
        </div >
    )
}
export default ForgetPassword ;
