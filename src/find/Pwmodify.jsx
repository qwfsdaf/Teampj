import React from 'react'
import Header from '../Header/Header'
import styles from './Pwmodify.module.css'
import Logininput from '../components/Logininput'
import Submitbutton from '../Signup/Submitbutton'

function pwfind() {
    return (
        <>
            <Header />
            <div className={styles.container}>
                <div className={styles.nickname}>
                    <div className={styles.line}>
                        <Logininput title={`닉네임`}
                            icon={"person"}
                            icons={"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"}
                            iconsspan={"material-symbols-outlined"} />
                    </div>
                    <div className={styles.line}>
                        <Logininput title={"이메일"}
                            icon={"email"}
                            icons={"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"}
                            iconsspan={"material-symbols-outlined"}
                        />
                    </div>
                    <Logininput title={"아이디"}
                        icon={"person"}
                        icons={"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"}
                        iconsspan={"material-symbols-outlined"}
                    />
                </div>
                <div className={styles.password}>
                    <div className={styles.line}>
                        <Logininput title={`비밀번호`}
                            icon={"Lock"}
                            icons={"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"}
                            iconsspan={"material-symbols-outlined"} />
                    </div>
                    <Logininput title={"비밀번호 변경"}
                        icon={"Lock"}
                        icons={"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"}
                        iconsspan={"material-symbols-outlined"}
                    />
                </div>
                <Submitbutton url="/Login" title="변경하기" />
            </div>
        </>
    )
}

export default pwfind