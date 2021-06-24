import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import LoginButton from './Component/LoginButton';
import LogoutButton from './Component/LogoutButton';
import { withAuth0 } from '@auth0/auth0-react';
import { Link } from "react-router-dom";
import './header.css';

class Header extends React.Component {

  

  render() {
    
    return(
      
      <Navbar className="header_nav_bar" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
          <Link to="/">Home</Link>
          {/* <Link to="/profile">Profile</Link> */}
          
          { this.props.auth0.isAuthenticated ? <Link to="/profile">Profile</Link> : <p> </p>}

          {/* TODO: if the user is logged in, render the `LogoutButton` - if the user is logged out, render the `LoginButton` */}
         
           { this.props.auth0.isAuthenticated ? <LogoutButton/> : <LoginButton/>}
          
      </Navbar>
    )
  }
}

export default withAuth0(Header);
