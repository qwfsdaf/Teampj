import React, { useState, useRef } from 'react';
import styles from './Communitywrite.module.css';
import Header from '../Header/Header';
import { CiCamera } from "react-icons/ci";

function Communitywrite() {
    const [images, setImages] = useState([]);
    const [title, setTitle] = useState('');
    const [context, setContext] = useState('');
    const fileInputRef = useRef(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleImageUpload = (event) => {
        const files = Array.from(event.target.files);
        if (files.length + images.length > 3) {
            alert('최대 3개의 이미지만 업로드할 수 있습니다.');
            return;
        }
        files.forEach(file => {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImages(prevImages => [...prevImages, reader.result]);
            };
            reader.readAsDataURL(file);
        });
    };

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleContextChange = (e) => {
        setContext(e.target.value);
    };

    const triggerFileInput = () => {
        fileInputRef.current.click();
    };

    const handleSubmit = () => {
        // 등록하기 버튼 클릭 시 처리할 로직
        // 예: 서버에 데이터 전송
        console.log({ title, context, images });
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(prevState => !prevState);
    };

    return (
        <div className={styles.container}>
            <Header title="Community" isSidebarOpen={isSidebarOpen} onSidebarToggle={toggleSidebar} />
            <div className={isSidebarOpen ? styles.form : styles.formsidebar}>
                <div className={styles.imageUploadContainer}>
                    <button type="button" className={styles.startbutton} onClick={triggerFileInput}>
                        <CiCamera />
                    </button>
                    {images.length < 3 && (
                        <input
                            type="file"
                            id="imageInput"
                            ref={fileInputRef}
                            accept="image/*"
                            onChange={handleImageUpload}
                            style={{ display: 'none' }}
                            multiple
                        />
                    )}
                    <div className={styles.previewContainer}>
                        {images.map((image, index) => (
                            <img key={index} src={image} alt={`Uploaded ${index + 1}`} className={styles.previewImage} />
                        ))}
                    </div>
                </div>
                <input
                    className={styles.title}
                    type="text"
                    onChange={handleTitleChange}
                    placeholder="글 제목"
                    value={title}
                />
                <textarea
                    className={styles.context}
                    onChange={handleContextChange}
                    placeholder="내용을 입력하세요"
                    value={context}
                />
            </div>
            <button className={styles.button} onClick={handleSubmit}>
                등록하기
            </button>
        </div>
    );
}

export default Communitywrite;
