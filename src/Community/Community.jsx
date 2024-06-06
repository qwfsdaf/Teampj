import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import styles from './Community.module.css';
import { FaPen } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const TimeAgo = ({ timestamp }) => {
    const [timeAgo, setTimeAgo] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const secondsAgo = Math.floor((now - new Date(timestamp)) / 1000);

            if (secondsAgo < 60) {
                setTimeAgo('방금 전');
            } else {
                const minutesAgo = Math.floor(secondsAgo / 60);
                setTimeAgo(`${minutesAgo}분 전`);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [timestamp]);

    return <span>{timeAgo}</span>;
};

function Community() {
    const [formData, setFormData] = useState([
        {
            id: 1,
            nickname: '대각선',
            title: '청바지랑 흰티를 같이 빨았어요',
            context: '어떡하죠..',
            timestamp: new Date()
        }
    ]);
    const [image, setImage] = useState(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(prevState => !prevState);
    };

    const navigate = useNavigate();

    const handleNavigator = (e) => {
        e.preventDefault();
        navigate('/communitywrite');
    };

    return (
        <div className={styles.container}>
            <Header title="Community" isSidebarOpen={isSidebarOpen} onSidebarToggle={toggleSidebar} />
            {isSidebarOpen ? (
                <div className={styles.communitysidebar}>
                    {formData.map((data) => (
                        <div key={data.id} className={styles.post}>
                            <div>
                                <h2 className={styles.title}>{data.title}</h2>
                                <p className={styles.context}>{data.context}</p>
                                <div className={styles.info}>
                                    <p className={styles.infotime}><TimeAgo timestamp={data.timestamp} /></p>
                                    <span className={styles.divider}></span>
                                    <p className={styles.infonickname}>{data.nickname}</p>
                                </div>
                            </div>
                            <img className={styles.img} src="https://via.placeholder.com/150" alt="Image 1" />
                        </div>
                    ))}
                    <button className={styles.writebutton} onClick={handleNavigator}>
                        <FaPen />
                    </button>
                </div>
            ) : (
                <div className={styles.community}>
                    {formData.map((data) => (
                        <div key={data.id} className={styles.post}>
                            <div>
                                <h2 className={styles.title}>{data.title}</h2>
                                <p className={styles.context}>{data.context}</p>
                                <div className={styles.info}>
                                    <p className={styles.infotime}><TimeAgo timestamp={data.timestamp} /></p>
                                    <span className={styles.divider}></span>
                                    <p className={styles.infonickname}>{data.nickname}</p>
                                </div>
                            </div>
                            <img className={styles.img} src="https://via.placeholder.com/150" alt="Image 1" />
                        </div>
                    ))}
                    <button className={styles.writebutton} onClick={handleNavigator}>
                        <FaPen />
                    </button>
                </div>
            )}
        </div>
    );
}

export default Community;
