import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Resume from '../assets/Resume.pdf';

//import './navbar.css';

const NavBar = () => {
  return (
//     <nav className="navbar sticky-top navbar-expand-lg">
//   <div className="container-fluid">
//     <a className="navbar-brand" href="">Navbar</a>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarNav">
//       <ul className="navbar-nav ms-auto">
//         <li className="nav-item">
//           <a className="nav-link" href="#about">About</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#experience">Experience</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#projects">Projects</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href='#skills'>Skills</a>
//         </li>
//       </ul>
//       <Button as="a" variant="outline-primary">Resume</Button>
//     </div>
//   </div>
// </nav>
<Navbar className='navbar sticky-top' collapseOnSelect expand="lg" variant="dark">
<Container>
  <Navbar.Brand href="#home"></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav id="navbar-id" className="ms-auto">
    <Nav.Link className='nav-item' href="#about">About</Nav.Link>
      <Nav.Link className='nav-item' href="#skills">Skills</Nav.Link>
      <Nav.Link className='nav-item' href="#experience">Experience</Nav.Link>
      <Nav.Link className='nav-item' href="#projects">Projects</Nav.Link>
      <Nav.Link className='nav-item' href="#education">Education</Nav.Link>
      <Button as="a" variant="outline-primary" href={Resume} target="_blank">Resume</Button>
      
    </Nav>
  </Navbar.Collapse>
</Container>
</Navbar>

);
}

export default NavBar;
