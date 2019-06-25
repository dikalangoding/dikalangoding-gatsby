import React from 'react'
import Logo from "../images/logo.png"

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-light fixed-top py-4" id="main-nav">
            <div className="container">
                <a href="#" className="navbar-brand">
                    <img src={Logo} alt="Logo" width="50" height="50"/>
                    <h3 className="d-inline align-middle text-primary">Dikalangoding</h3>
                </a>
            </div>
        </nav>
    )
}

export default Navbar
