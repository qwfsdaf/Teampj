import React from 'react'
import styles from './Idform.module.css'
import Logininput from '../components/Logininput'
import Submitbutton from '../Signup/Submitbutton'
import Header from '../Header/Header'

function idform() {

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
                <Logininput title={"비밀번호 확인"}
                    icon={"Lock"}
                    icons={"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"}
                    iconsspan={"material-symbols-outlined"}
                />
            </div>
            <div className={styles.nickname}>
                <Logininput title={"닉네임"}
                    icon={"person"}
                    icons={"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"}
                    iconsspan={"material-symbols-outlined"}
                />
                <Logininput
                    title={"이메일"}
                    icon={"mail"}
                    icons={"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"}
                    iconsspan={"material-symbols-outlined"}
                />
            </div>
            <Submitbutton url='/Login' title='가입하기' />
        </>
    )
}

export default idform