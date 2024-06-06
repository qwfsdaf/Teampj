import React, { useState } from 'react'
import styles from '../Header/Header.module.css'
import Sidebar from '../components/Sidebar';
import { useNavigate } from 'react-router-dom';
import img from './logo.png'

export default function Header({ title, isSidebarOpen, onSidebarToggle }) {

    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault(); // 기본 이벤트를 방지합니다.

        navigate('/');
    };

    return (
        <header className={styles.header}>
            <button onClick={handleClick} className={styles.logo}>
                <img className={styles.img} src={img} alt='logo' />
            </button>
            <div className={styles.title}>{title}</div>
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={onSidebarToggle} />
        </header>
    )
}

