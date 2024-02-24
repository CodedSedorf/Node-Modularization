import React, {useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "../Admin/AdminLogin.css"

const AdminLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setmessage] = useState("");
    const endpoint = "";
  return (
        <div className='loginsignup'>
            <form className="loginsignup-container">
                <center>
                <div className={message === ""? "":"alert alert-success"} role="alert">
                    {message}
                </div>
                </center>
                <center>
                <h1>Login as Admin</h1>
                </center>
                <div className="loginsignup-fields">
                <input type="email" placeholder='Enter a valid email' onChange={(e)=>setEmail(e.target.value)}/>
                <input type="password" placeholder='Password'  onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <button>Login</button>
                <p className="loginsignup-login">Don't have an account? <Link>sign up here</Link></p>
                <div className="loginsignup-agree">
                <input type="checkbox" name='' id='' />
                <p>By continuing, I agree to the terms of use & privacy policy.</p>
                </div>
            </form>
        </div>
  )
}

export default AdminLogin