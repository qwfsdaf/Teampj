import React from 'react'
import Header from '../Header/Header'
import styles from './Login.module.css'
import Logininput from '../components/Logininput'
import Submitbutton from './Submitbutton'
import { Link } from 'react-router-dom'
import { useState } from 'react'


function Signup() {
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
                <Submitbutton
                    url="/"
                    title="로그인"
                    onValidate={() => {
                        const idRegex = /^[A-Za-z][A-Za-z0-9]*$/;
                        const passwordRegex = /^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

                        const isIdValid = idRegex.test(formData.id);
                        const isPasswordValid = passwordRegex.test(formData.password);

                        return isIdValid && isPasswordValid;
                    }}

                />
                <div className={styles.Link}>
<<<<<<< HEAD
                    <Link className={styles.idfind} to='/Idfind'>아이디 찾기</Link>
                    <hr class="centerline"></hr>
                    <Link className={styles.pwfind} to='/Pwmodify'>비밀번호 변경</Link>
=======
                    <Link className={styles.idfind} to='/Idfind'>아이디찾기</Link>
                    <Link className={styles.pwfind} to='/Pwmodify'>비밀번호변경</Link>
>>>>>>> 0af4cd9fd0c5344a6c6af2089fb662aa54f85ae8
                </div>
                <Submitbutton url="/Signup" title="회원가입" onValidate={() => { return true }} />
            </form>
        </>
    )
}

export default Signup