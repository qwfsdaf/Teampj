import React from 'react'
import Header from '../Header/Header'
import styles from './Login.module.css'
import Logininput from '../components/Logininput'
import Submitbutton from './Submitbutton'

function Signup() {
    return (
        <>
            <Header />
            <div className={styles.id}>
                <Logininput title={`아이디`}
                    icon={"person"}
                    icons={"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"}
                    iconsspan={"material-symbols-outlined"} />
                <Logininput title={"비밀번호"}
                    icon={"Lock"}
                    icons={"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"}
                    iconsspan={"material-symbols-outlined"}
                />
            </div>
            <Submitbutton title="로그인" />
            <Submitbutton url='/Signup' title="회원가입" />
        </>
    )
}

export default Signup