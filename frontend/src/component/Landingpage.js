import React, {useEffect, useState} from 'react'
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const Landingpage = () => {
    const [backendMessage, setbackendMessage] = useState("")
   useEffect(() => {
     const fetchData = async() =>{
        try {
            let endpoint = "http://localhost:3500/users";
            const response = await axios.get(endpoint);
            console.log(response.data.message);
            setbackendMessage(response.data.message);

            setTimeout(()=>{
                setbackendMessage("")
            }, 10000)
        } catch(err){
            console.log(err);
            setbackendMessage("Error fetching data from backend")
        }
     }
     fetchData()
   }, [])
   
  
  return (
    <div>
            <center>
                <div className={backendMessage === ""? "":"alert alert-success"} role="alert">
                    {backendMessage}
                </div>
            </center>
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <NavDropdown title="Signup" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/admin">Admin</NavDropdown.Item>
                    <NavDropdown.Item href="/signup">
                        User
                    </NavDropdown.Item>
                    
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default Landingpage