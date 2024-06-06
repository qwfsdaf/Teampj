import React from 'react'
import { useState } from 'react'
import styles from './Idform.module.css'
import Logininput from '../components/Logininput'
import Submitbutton from '../Signup/Submitbutton'
import Header from '../Header/Header'

function Idform() {
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
            <form onSubmit={handleSubmit} className={styles.container}>
                <Header title="Community" isSidebarOpen={isSidebarOpen} onSidebarToggle={toggleSidebar} />
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
                    <div className={styles.line}>
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
                    <Logininput
                        type="password"
                        name="repassword"
                        placeholder="비밀번호 확인"
                        value={formData.repassword}
                        onChange={handleChange}
                        icon={"Lock"}
                        icons={"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"}
                        iconsspan={"material-symbols-outlined"}
                    />
                </div>
                <div className={styles.nickname}>
                    <div className={styles.line}>
                        <Logininput
                            type="nickname"
                            name="nickname"
                            placeholder="닉네임"
                            value={formData.nickname}
                            onChange={handleChange}
                            icon={"person"}
                            icons={"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"}
                            iconsspan={"material-symbols-outlined"}
                        />
                    </div>
                    <Logininput
                        type="email"
                        name="email"
                        placeholder="이메일"
                        value={formData.email}
                        onChange={handleChange}
                        icon={"mail"}
                        icons={"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"}
                        iconsspan={"material-symbols-outlined"}
                    />
                </div>
                <Submitbutton
                    onValidate={() => {
                        const idRegex = /^[A-Za-z][A-Za-z0-9]*$/;
                        const passwordRegex = /^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

                        const isIdValid = idRegex.test(formData.id);
                        const isPasswordValid = passwordRegex.test(formData.password);
                        const isPasswordMatch = formData.password === formData.repassword; // 비밀번호 일치 여부 검사

                        return isIdValid && isPasswordValid && isPasswordMatch; // 모든 조건이 참이어야 유효
                    }}
                    url='/Login'
                    title='가입하기'
                />
            </form>
        </>
    )
}

export default Idform