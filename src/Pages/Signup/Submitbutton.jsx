import { useNavigate } from 'react-router-dom';
import styles from './Submitbutton.module.css';

function Submitbutton({ title, url, onValidate }) {
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault(); // 기본 이벤트를 방지합니다.

        // 유효성 검사를 실행합니다. 검사가 성공하면 페이지 이동을 수행합니다.
        if (onValidate && onValidate()) {
            navigate(url);
        }
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

export default Submitbutton;