import React from 'react'
import styles from '../Header/Header.module.css'
import Sidebar from '../components/Sidebar';
import { useNavigate } from 'react-router-dom';

export default function Header() {

    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault(); // 기본 이벤트를 방지합니다.

        navigate('/');
    };

    return (
        <header className={styles.header}>
            <button onClick={handleClick} className={styles.logo}>Logo</button>
            <Sidebar />
        </header>
    )
}

