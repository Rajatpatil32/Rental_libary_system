import {Navbar,Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Header(){
    return(
        <div>
            <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">Rental Library</Navbar.Brand>
          <Nav className="me-auto nav_bar_wrapper">
            <Link to="/">Home</Link>
            <Link to="/about">about</Link>
            <Link to="/services">Services</Link>
            <Link to="/Ourteam">Our Team</Link>
            <Link to="/Register">Register</Link>
          </Nav>
      </Navbar> 
        </div>
    )
}

export default Header