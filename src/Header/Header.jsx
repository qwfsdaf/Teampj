import React from 'react'
import styles from '../Header/Header.module.css'
import Sidebar from '../components/Sidebar';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>Logo</div>
            <Sidebar />
        </header>
    )
}

