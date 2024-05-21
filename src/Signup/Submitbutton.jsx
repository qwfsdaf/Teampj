import { useNavigate } from 'react-router-dom';
import styles from './Submitbutton.module.css';

const Submitbutton = ({ title, url, onValidate, onClick }) => {
    const handleClick = () => {
      if (onValidate && !onValidate()) {
        alert('유효하지 않은 입력입니다.');
        return;
      }
      if (onClick) {
        onClick(); // 클릭 이벤트 실행
      }
    };
  
    return (
      <button onClick={handleClick} type="submit">
        {title}
      </button>
    );
  };
  
  export default Submitbutton;

