import { useNavigate } from 'react-router-dom';
import styles from './SidebarSelete.module.css';

function SidebarSelete({ title, url }) {
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault(); // 기본 이벤트를 방지합니다.

        navigate(url);
    };

    return (
        <button
            type="button" // 폼 제출 대신 일반 버튼으로 설정
            className={styles.button}
            onClick={handleClick} // onClick 이벤트에 로직을 연결
        >
            {title}
        </button>
    );
}

export default SidebarSelete;