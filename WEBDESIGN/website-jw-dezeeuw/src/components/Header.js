import React, {useState} from "react"
import Navbar from './Navbar'
import NavbarBig from './NavbarBig'
import '../main.css'
import { FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa"
import { Sling as Hamburger } from 'hamburger-react' 

function Header () {
  const [showMenu, setShowMenu] = useState(false)


 return (
    
  <header className="header">
    <div className="menu-small">
      <Hamburger size={30} onToggle={() => setShowMenu(!showMenu)}/>
    </div>
    {showMenu ? <Navbar className="navbar"/> : ""}
    <NavbarBig />
    <div className="social-icons">
      <a href="http://www.linkedin.com"><FaLinkedinIn className="social-icon"/></a>
      <a href="http://www.instagram.com"><FaInstagram className="social-icon"/></a>
      <a href="http://www.twitter.com"> <FaTwitter className="social-icon"/></a>
    </div>
  </header>
  
 )
  
}



export default Header
