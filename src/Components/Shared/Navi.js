import React from 'react';
import navStyles from './SharedStyle/Nav.module.css';
import atreveteLogo from '../../Assets/Atrevete/Atr-logo.png';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { HiOutlineViewList } from "react-icons/hi";
function Navi() {
  let iconStyles = { color: "white", fontSize: "1.5em" };
  return (
    <div className={navStyles.header_wraper} >

      <Navbar collapseOnSelect expand="lg" variant="lg" className={navStyles.navBg}>
        {/* <Container> */}
        <Navbar.Brand href="#home">
          <Nav.Link href="/" > <img className={navStyles.imgNavLink} src={atreveteLogo} alt="atrevete logo" /></Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" >   <span>
          <HiOutlineViewList style={iconStyles} />
        </span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav.Link href="/">INCIO</Nav.Link>
          <Nav.Link href="/Nosotros">NOSOTROS</Nav.Link>
          <Nav.Link href="/Proyectos">PROYECTOS</Nav.Link>
          <Nav.Link href="/Galeria">GALERÍA</Nav.Link>
          <Nav.Link href="/Contactanos">CONTACTANOS</Nav.Link>
        </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>
    </div >

  )
}

export default Navi;


