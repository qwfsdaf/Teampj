import { useNavigate } from 'react-router-dom';
import styles from './Submitbutton.module.css'

function Submitbutton({ title, url }) {
    const navigate = useNavigate();

    const handleUserHistory = () => navigate(url)
    const handleUpdate = (e) => {
        e.preventDefault();
    }
    return (
        <button
            onClick={handleUserHistory}
            onChange={handleUpdate}
            className={styles.button}>{title}</button>
    )
}

export default Submitbutton