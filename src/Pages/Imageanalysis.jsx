import React, { useState, useRef } from 'react';
import styles from './Imageanalysis.module.css';
import Header from "../Header/Header";

function Imageanalysis() {
    const [imageSrc, setImageSrc] = useState(null);
    const [response, setResponse] = useState(null);
    const [parsedResponse, setParsedResponse] = useState(null);
    const fileInputRef = useRef(null);

    const handleFileChange = async (event) => {
        const fileInput = event.target;
        const formData = new FormData();
        formData.append('image', fileInput.files[0]);

        // 이미지 파일을 읽어서 미리보기로 보여주기
        if (fileInput.files && fileInput.files[0]) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImageSrc(e.target.result);
            };
            reader.readAsDataURL(fileInput.files[0]);
        }

        // 서버로 이미지 파일을 전송하고 응답 받기
        try {
            const response = await fetch('/upload', {
                method: 'POST',
                body: formData,
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setResponse(data.description);
            parseResponse(data.description);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const parseResponse = (description) => {
        const cleanedDescription = description.replace(/\*\*/g, ''); // 별표 제거
        const lines = cleanedDescription.split(/[\d]+\.\s/).filter(Boolean);
        const parsed = {
            laundryMethod: lines[0]?.replace("빨래 방법:", "").trim(),
            ironing: lines[1]?.replace("다리미질 가능여부:", "").trim(),
            dryingMethod: lines[2]?.replace("건조 방법:", "").trim()
        };
        setParsedResponse(parsed);
    };

    const handleResubmit = () => {
        setImageSrc(null);
        setResponse(null);
        setParsedResponse(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const triggerFileInput = () => {
        fileInputRef.current.click();
    };

    return (
        <main className={styles.container}>
            <Header />
            {!imageSrc ? (
                <>
                    <input
                        type="file"
                        id="imageInput"
                        ref={fileInputRef}
                        accept="image/*"
                        onChange={handleFileChange}
                        style={{ display: 'none' }}
                    />
                    <button type="button" className={styles.startbutton} onClick={triggerFileInput}>
                        세탁 기호 인식
                    </button>
                </>
            ) : (
                <>
                    <div className={styles.imageinpo}>
                        {imageSrc && <img id="uploadedImage" src={imageSrc} alt="Uploaded" className={styles.image} />}
                        <div className={styles.textbox}>
                            {parsedResponse && (
                                <>
                                    <div className={styles.context}>
                                        <div className={styles.text}>1. {parsedResponse.laundryMethod}</div>
                                    </div>
                                    <div className={styles.context}>
                                        <div className={styles.text}>2. {parsedResponse.ironing}</div>
                                    </div>
                                    <div className={styles.context}>
                                        <div className={styles.text}>3. {parsedResponse.dryingMethod}</div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                    <div className={styles.saveform}>
                        <button className={styles.resubmitbutton} onClick={handleResubmit}>다시하기</button>
                        <button className={styles.savebutton}>저장하기</button>
                    </div>
                </>
            )}
        </main>
    );
}

export default Imageanalysis;
