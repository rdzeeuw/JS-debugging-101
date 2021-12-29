import React from "react";


export default function Footer() {
    return (
        <footer className="footer">
          © {new Date().getFullYear()} - Robin de Zeeuw
          {/* {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a> */}
        </footer>
    )
}