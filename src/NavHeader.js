import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';





class NavHeader extends React.Component{
    render(){
        return(
            <div id="header">
<>
<Navbar bg="primary" variant="dark">
    
    <Nav className="mr-auto">
    
      <h4  className="text-white " > ShowTime </h4>
      <h6 className="navbar-text"> Term Insurance </h6>
      <h6 className="navbar-text">Customer Service</h6>
      <h6 className="navbar-text">About Us</h6>
    </Nav>
  </Navbar>
</>
            </div>

        );
    }
}
 export default NavHeader;