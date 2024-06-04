import React, { useState } from 'react';
import styles from './Sidebar.module.css';
import { IoIosMenu } from "react-icons/io";
import SidebarSelect from './SidebarSelete'
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault(); // 기본 이벤트를 방지합니다.

        navigate('/Login');
    };

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            {isOpen ? (
                <button onClick={toggleSidebar} className={styles.closebutton}>
                    <AiOutlineClose />
                </button>
            ) : (
                <button onClick={toggleSidebar} className={styles.togglebutton}>
                    <IoIosMenu />
                </button>
            )}
            <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
                <div className={styles.sidebarContent}>
                    <button onClick={handleClick} className={styles.loginbutton}>로그인이 필요합니다.</button>
                    <div className={styles.sidebarcontainer}>
                        <SidebarSelect title="챗봇" url='/chat' />
                    </div>
                    <div className={styles.sidebarcontainer}>
                        <SidebarSelect title="세탁기호인식" url='/Imageanalysis' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
