import React, {useState} from 'react'
import "../SignIn/Signin.css"
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Signin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setmessage] = useState("");
    const endpoint = "http://localhost:3500/users/signin";
    let navigate = useNavigate()

    const signIn = (e)=>{
        e.preventDefault()
        let userDetails = {email, password}
        axios.post(endpoint, userDetails)
        .then((res)=>{
            console.log(res);
            if (res.data.status) {
                //This is to save the sign in active for a while 
                localStorage.token = res.data.token
                //or us this instead of the above line
                // localStorage.setItem("token", res.data.token)
                navigate("/dashboard")
            }else{
                console.log(res.data.message);
                setmessage(res.data.message)
            }
        })
        // .then((res)=>{
        //     console.log(res);
        //     setmessage(res.data.message)
        //     navigate("/dashboard")
        // })
        // .catch((error)=>{
        //     console.error('Error during login', error);
        //     setmessage(error.res.data.message)
        // })
    }
  return (
    <div className='loginsignup'>
        <form className="loginsignup-container" onSubmit={signIn}>
            <center>
                <div className={message ? "alert alert-success" : ""} role="alert">
                    {message}
                </div>

            </center>
            <center>
            <h1>Welcome to sign in page</h1>
            </center>
            <div className="loginsignup-fields">
            <input type="email" placeholder='Enter a valid email' onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" placeholder='Password'  onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <button onClick={signIn}>Login</button>
            <p className="loginsignup-login">Don't have an account? <Link to={"/signup"}>sign up here</Link></p>
            <div className="loginsignup-agree">
            <input type="checkbox" name='' id='' />
            <p>By continuing, I agree to the terms of use & privacy policy.</p>
            </div>
        </form>
    </div>
  )
}

export default Signin