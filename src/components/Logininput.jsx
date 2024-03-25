import React, { useEffect, useState } from 'react'
import styles from './Logininput.module.css';

function LoginButton({ title, icons, iconsspan, icon, props }) {
    const [text, settext] = useState('');
    const [id, setid] = useState('');
    const [password, setpassword] = useState('');
    const [repassword, setrepassword] = useState('');
    const [nickname, setnickname] = useState('');
    const [email, setemail] = useState('');
    const handleChange = (e) => {
        settext(e.target.value);
        if (title === '아이디') {
            setid(e.target.value)
        } else if (title === '비밀번호') {
            setpassword(e.target.value);
        }
        else if (title === '비밀번호 확인') {
            setrepassword(e.target.value);
        }
        else if (title === '닉네임') {
            setnickname(e.target.value);
        }
        else {
            setemail(e.target.value);
        }
    };
    useEffect(() => {
        localStorage.setItem(`아이디`, JSON.stringify({ id, password, repassword, nickname, email }))
    }, [email, id, nickname, password, repassword])

    return (
        <div className={styles.div}>
            <link rel="stylesheet" href={icons} />
            <span class={iconsspan}>
                {icon}
            </span>
            <input
                className={styles.input}
                type='text'
                placeholder={title}
                value={text}
                onChange={handleChange}
            />
        </div>
    )
}

export default LoginButton