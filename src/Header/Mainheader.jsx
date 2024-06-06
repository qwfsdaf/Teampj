import React from 'react'
import styles from './Mainheader.module.css'
import Mainheaderbutton from '../components/Mainheaderbutton'
import img from './logo.png'

function Mainheader() {
    return (
        <div className={styles.container}>
            <div className={styles.homeheader}>
                <img className={styles.img} src={img} alt='logo' />
            </div>
            <div className={styles.subheader}>
                <Mainheaderbutton
                    title='챗봇'
                    url='/chat' />
                <Mainheaderbutton
                    title='세탁 기호 인식'
                    url='/imageanalysis'
                />
                <Mainheaderbutton
                    title='커뮤니티'
                    url='/community'

                />
                <Mainheaderbutton
                    title='로그인'
                    url='/Login'
                />
            </div>
        </div>
    )
}

export default Mainheader