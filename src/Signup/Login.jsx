import React from 'react'
import Header from '../Header/Header'
import styles from './Login.module.css'
import Logininput from '../components/Logininput'
import Submitbutton from './Submitbutton'
import { Link } from 'react-router-dom'


function Signup() {
    return (
        <>
            <Header />
            <div className={styles.container}>
                <div className={styles.id}>
                    <div className={styles.line}>
                        <Logininput title={`아이디`}
                            icon={"person"}
                            icons={"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"}
                            iconsspan={"material-symbols-outlined"} />
                    </div>
                    <Logininput title={"비밀번호"}
                        icon={"Lock"}
                        icons={"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"}
                        iconsspan={"material-symbols-outlined"}
                    />
                </div>
                <Submitbutton url="/Home" title="로그인" />
                <div className={styles.Link}>
                    <Link className={styles.idfind} to='/Idfind'>아이디찾기</Link>
                    <Link className={styles.pwfind} to='/Pwmodify'>비밀번호변경</Link>
                </div>
                <Submitbutton url="/Signup" title="회원가입" />
            </div>
        </>
    )
}

export default Signup