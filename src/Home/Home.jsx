import React from 'react'
import styles from './Home.module.css'
import Mainheader from '../Header/Mainheader'
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    const chathandleClick = (e) => {
        e.preventDefault(); // 기본 이벤트를 방지합니다.

        navigate('/chat');
    };

    const loginhandleClick = (e) => {
        e.preventDefault(); // 기본 이벤트를 방지합니다.

        navigate('/Login');
    };
    return (
        <div className={styles.container}>
            <Mainheader />
            <div className={styles.pclogo}></div>
            <div className={styles.subcontainer}>
                <div className={styles.titlebox}>
                    <p className={styles.title}>당신의 AI 세탁 도우미</p>
                    <p className={styles.title}>세로에게 물어보세요!</p>
                </div>
                <div className={styles.mobilelogo}></div>
                <button
                    type="button" // 폼 제출 대신 일반 버튼으로 설정
                    className={styles.chatbutton}
                    onClick={chathandleClick} // onClick 이벤트에 로직을 연결
                >
                    채팅 시작하기
                </button>
                <button
                    type="button" // 폼 제출 대신 일반 버튼으로 설정
                    className={styles.loginbutton}
                    onClick={loginhandleClick} // onClick 이벤트에 로직을 연결
                >
                    로그인
                </button>
            </div>
        </div>
    )
}

export default Home