import React from 'react';
import Button from 'react-bootstrap/Button';
//import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg">
  <div className="container-fluid">
    <a className="navbar-brand" href="">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link" href="#about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#experience">Experience</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#projects">Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href='#skills'>Skills</a>
        </li>
      </ul>
      <Button as="a" variant="outline-primary">Resume</Button>
    </div>
  </div>
</nav>
  );
}

export default Navbar;
