import React from 'react'
import { MdKeyboardArrowLeft } from "react-icons/md";
import { IoIosMenu } from "react-icons/io";
import styles from '../Header/Header.module.css'

export default function Header() {
    return (
        <header className={styles.header}>
            <button className={styles.button}><MdKeyboardArrowLeft /></button>
            <div className={styles.logo}>Logo</div>
            <button className={styles.button}><IoIosMenu /></button>
        </header>
    )
}

