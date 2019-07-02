import React from 'react'
import styles from "../css/navbar.module.css"
import logo from "../images/logo.png"

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navCenter}>
                <div className={styles.navHeader}>
                    <img src={logo} alt="Dikalangoding Logo"/>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
