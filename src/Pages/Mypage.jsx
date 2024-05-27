import React from 'react'
import styles from './Mypage.module.css'
import Header from '../Header/Header'
import Silder from '../components/Silder';


function Mypage() {

    return (
        <main className={styles.container}>
            <Header />
            <div className={styles.scroll}>
                <div className={styles.userinpo}>
                    <div className={styles.title}>
                        <div className={styles.bordertitle}>회원 정보</div>
                    </div>
                    <div className={styles.grid}>
                        <div className={styles.gridlayers}>
                            <p>님</p>
                            <button className={styles.button}>로그아웃</button>
                        </div>
                        <div className={styles.gridlayers}>
                            <p>닉네임</p>
                            <p>회원닉</p>
                        </div>
                        <div className={styles.gridlayers}>
                            <p>이메일</p>
                            <p>회원이메일</p>
                        </div>
                        <div className={styles.gridlayers}>
                            <p>비밀번호</p>
                            <button className={styles.modifypw}>{'>'}</button>
                        </div>
                    </div>
                </div>
                <div className={styles.mycloset}>
                    <div className={styles.title}>
                        <div className={styles.bordertitle}>나만의 옷장</div>
                    </div>
                    <Silder />
                </div>
                <div className={styles.appinpocontainer}>
                    <div className={styles.title}>
                        <div className={styles.bordertitle}>이용안내</div>
                    </div>
                    <div className={styles.appinpo}>
                        <span className={styles.appinpolist}>
                            <p>앱 버전</p>
                            <p className={styles.appinpolistversion}>0.0.1</p>
                        </span>
                        <span className={styles.appinpolist}>
                            <p>문의하기</p>
                        </span>
                        <span className={styles.appinpolist}>
                            <p>공지사항</p>
                        </span>
                        <span className={styles.appinpolist}>
                            <p className={styles.lastcomponent}>이용약관</p>
                        </span>

                    </div>

                </div>
                <div className={styles.lastcomponent}></div>
            </div>
        </main>
    )
}

export default Mypage
