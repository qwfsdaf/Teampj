import React from 'react'
import Header from '../Header/Header'
import styles from './Pwmodify.module.css'
import Logininput from '../components/Logininput'
import Submitbutton from '../Signup/Submitbutton'
import { useState } from 'react'

function Pwmodify() {
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
    return (
        <>
            <Header />
            <form onSubmit={handleSubmit} className={styles.container}>
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
                    <div className={styles.line}>
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
                <div className={styles.password}>
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
                        name="mopassword"
                        placeholder="비밀번호 변경"
                        value={formData.mopassword}
                        onChange={handleChange}
                        icon={"Lock"}
                        icons={"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"}
                        iconsspan={"material-symbols-outlined"}
                    />
                </div>
                <Submitbutton onValidate={() => {
                    const isPasswordMatch = formData.password !== formData.mopassword;
                    return isPasswordMatch;
<<<<<<< HEAD
                }} url="/Login" title="비밀번호 변경" />
=======
                }} url="/Login" title="변경하기" />
>>>>>>> 0af4cd9fd0c5344a6c6af2089fb662aa54f85ae8
            </form>
        </>
    )
}

export default Pwmodify