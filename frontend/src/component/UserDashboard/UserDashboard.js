import React from 'react'
import "../UserDashboard/UserDashboard.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const UserDashboard = () => {
    //
    let url = "http://localhost:3500/users/dashboard"
    let token = localStorage.token
    let navigate = useNavigate()
    axios.get(url, {
        headers: {
            "Authorization":`Bearer ${token}`,
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    })
    .then((response)=>{
        console.log((response));
        if (response.data.status) {
            console.log("Welcome to the dashboard");
        }else{
            navigate("/signin")
        }
    })
  return (
    <>
        UserDashboard
    </>
  )
}

export default UserDashboard