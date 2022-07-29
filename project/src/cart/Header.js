import React from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap'
import './Header.css'
export default function Header() {
  return (
    <Navbar bg='dark' variant='dark' style={{height:80}} >
        <Container>
        <Navbar.Brand>
        <div className="logo">
           Donation Cart
       </div>
        </Navbar.Brand>
        
            <Nav>
                
            </Nav>
        </Container>
    </Navbar>

  )
}
