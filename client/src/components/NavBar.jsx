import React from 'react'
import styles from '../assets/css/navbar.module.css'
function NavBar() {
    return (
        <nav className={styles.navigacija}>
            <ul className={styles.navigacija__list}>
                <li className={styles.navigacija__item}><a href="">Dashboard</a></li>
                <li className={styles.navigacija__item}><a href="">Monitor</a></li>
                <li className={styles.navigacija__item}><a href="">Licence</a></li>
                <li className={styles.navigacija__item}><a href="">Arhiva</a></li>
            </ul>
        </nav>
    )
}

export default NavBar