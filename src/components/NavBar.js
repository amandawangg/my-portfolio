import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';
import logo from '../assets/img/logo.svg';
import linkedInIcon from '../assets/img/linkedin-icon.png';
import githubIcon from '../assets/img/github-icon.svg';
// import { HashLink } from 'react-router-hash-link';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false)
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActivateLink = (value) => {
        setActiveLink(value);
    }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt="logo" style={{ width: '55px', height: 'auto' }}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <span className="navbar-toggle-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActivateLink('home')}>About</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActivateLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActivateLink('projects')}>Projects</Nav.Link>
            <Nav.Link href="https://drive.google.com/file/d/1wtzl7K8zomnm0PoU_nnarJUIOFvTfbTx/view?usp=sharing" className={activeLink === 'resume' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActivateLink('resume')}target="_blank" >Resume</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className='social-icon'>
                <a href="https://www.linkedin.com/in/amanda-wang04/"><img src={linkedInIcon} alt="linkedInIcon" /></a>
                <a href="https://github.com/amandawangg"><img src={githubIcon} alt="GithubIcon" /></a>
            </div>
            {/* <HashLink to='#contact'>
              <button className="vvd"><span>Contact</span> </button>
            </HashLink> */}
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}