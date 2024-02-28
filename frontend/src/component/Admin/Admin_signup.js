import React, {useState} from 'react'; 
import axios from 'axios';
import "../Admin/Admin_signup.css"

const Admin_signup = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    //for status message about sign-up
    const [message, setMessage] = useState("")
    const endpoint = "http://localhost:3500/signup"
    const submit = (e)=> {
      e.preventDefault()
      let userDetails = {fullName, email, password};
      axios.post(endpoint, userDetails)
      .then((response)=>{
        console.log(response.data);
        setMessage(response.data.message)
      })
      .catch((err)=>{
        console.log(err.data);
      })
    }
  return (
    <div className='loginsignup'>
      <form className="loginsignup-container">
        <center>
          <div className={message === ""? "":"alert alert-success"} role="alert">
            {message}
          </div>
        </center>
        <center>
          <h1>Admins</h1>
        </center>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name'  onChange={(e)=>setFullName(e.target.value)}/>
          <input type="email" placeholder='Enter a valid email' onChange={(e)=>setEmail(e.target.value)}/>
          <input type="password" placeholder='Password'  onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <button onClick={submit}>Sign up</button>
        <p className="loginsignup-login">Already have an account? <span>Login here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </form>
    </div>
  )
}

export default Admin_signup