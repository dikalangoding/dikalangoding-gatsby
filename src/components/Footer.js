import React from 'react'
import styles from "../css/footer.module.css"

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.copyright}>
                copyright &copy; dikalangoding {new Date().getFullYear()} all rights reserved
            </div>
        </footer>
    )
}

export default Footer
