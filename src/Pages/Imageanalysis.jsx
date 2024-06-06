import React, { useState, useRef } from 'react';
import styles from './Imageanalysis.module.css';
import Mainheader from '../Header/Mainheader';

function Imageanalysis() {
    const [fileSelected, setFileSelected] = useState(null);
    const [imagePreviewUrl, setImagePreviewUrl] = useState('');
    const fileInputRef = useRef();

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file && file.type.startsWith('image/')) {
            setFileSelected(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreviewUrl(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleClick = () => {
        fileInputRef.current.click();
    };

    return (
        <main className={styles.container}>
            <Mainheader />
            <input
                type="file"
                accept="image/*" // 이미지 파일만 선택하도록 설정
                style={{ display: 'none' }}
                onChange={handleFileChange}
                ref={fileInputRef}
            />
            {!fileSelected ? (
                <button className={styles.startbutton} onClick={handleClick}>세탁 기호 인식</button>
            ) : (
                <>
                    <div className={styles.imageinpo}>
                        {imagePreviewUrl && (
                            <img src={imagePreviewUrl} alt="Preview" className={styles.image} />
                        )}
                        <div className={styles.textbox}>
                            <p className={styles.title}>빨래방법</p>
                            <p>: 손세탁</p>
                        </div>
                    </div>
                    <div className={styles.saveform}>
                        <button className={styles.resubmitbutton}>다시하기</button>
                        <button className={styles.savebutton}>저장하기</button>
                    </div>
                </>
            )}
        </main>
    );
}

export default Imageanalysis;
