import React from 'react'
import { IoIosMenu } from "react-icons/io";
import styles from '../Header/Header.module.css'

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>Logo</div>
            <button className={styles.button}><IoIosMenu /></button>
        </header>
    )
}

