import React from 'react'
import styles from './Idfind.module.css'
import Logininput from '../components/Logininput'
import Submitbutton from '../Signup/Submitbutton'
import Header from '../Header/Header'
import { useState } from 'react'

function Idfind() {
    const [formData, setFormData] = useState({
        id: '',
        password: '',
        // 추가 필드
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // 폼 제출 핸들러
    const handleSubmit = (e) => {
        e.preventDefault();
        // 폼 데이터 처리 로직
    };

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(prevState => !prevState);
    };
    return (
        <>
            <Header isSidebarOpen={isSidebarOpen} onSidebarToggle={toggleSidebar} />
            <form onSubmit={handleSubmit} className={styles.container}>
                <div className={styles.id}>
                    <div className={styles.line}>
                        <Logininput
                            type="id"
                            name="id"
                            placeholder="아이디"
                            value={formData.id}
                            onChange={handleChange}
                            icon={"person"}
                            icons={"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"}
                            iconsspan={"material-symbols-outlined"} />
                    </div>
                    <Logininput
                        type="password"
                        name="password"
                        placeholder="비밀번호"
                        value={formData.password}
                        onChange={handleChange}
                        icon={"Lock"}
                        icons={"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"}
                        iconsspan={"material-symbols-outlined"}
                    />
                </div>
                <div className={styles.border}></div>
                <Submitbutton onValidate={() => true} url="/Login" title="아이디 찾기" />
            </form>
        </>
    )
}

export default Idfind