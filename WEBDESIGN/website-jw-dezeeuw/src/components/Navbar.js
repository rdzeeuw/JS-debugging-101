import React from "react";
import { Link } from 'gatsby'
import '../main.css'

export default function Navbar() {
    
    return (
       <nav className="navbar">
           <Link to="../" className="navbar-item">Home</Link>
           <Link to="../nieuws" className="navbar-item">Nieuws</Link>
           <Link to="../portfolio" className="navbar-item">Portfolio</Link>
           <Link to="../projecten" className="navbar-item">Projecten</Link>
           <Link to="../about" className="navbar-item">Over mij</Link>
           <Link to="../contact" className="navbar-item">Contact</Link>
       </nav>
    )
}