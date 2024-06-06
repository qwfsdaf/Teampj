import React, { useState } from 'react';

const App = () => {
    const [imageSrc, setImageSrc] = useState(null);
    const [response, setResponse] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const fileInput = document.getElementById('imageInput');
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
            setResponse(JSON.stringify(data, null, 2));
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>이미지 업로드 및 분석</h1>
            <form id="uploadForm" onSubmit={handleSubmit} style={styles.form}>
                <input type="file" id="imageInput" accept="image/*" required style={styles.fileInput} />
                <button type="submit" style={styles.button}>이미지 분석</button>
            </form>
            {imageSrc && <img id="uploadedImage" src={imageSrc} alt="Uploaded" style={styles.uploadedImage} />}
            {response && <div id="responseArea" style={styles.responseArea}>{response}</div>}
        </div>
    );
};

const styles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f4f4f9',
        margin: 0,
        padding: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        textAlign: 'center',
    },
    heading: {
        color: '#333',
    },
    form: {
        marginTop: '20px',
    },
    fileInput: {
        border: '2px solid #ccc',
        display: 'block',
        padding: '10px',
        width: '90%',
        margin: '10px auto',
        borderRadius: '4px',
    },
    button: {
        backgroundColor: '#5c67f2',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '16px',
    },
    uploadedImage: {
        maxWidth: '100%',
        marginTop: '20px',
    },
    responseArea: {
        marginTop: '20px',
        padding: '10px',
        backgroundColor: '#eef',
        border: '1px solid #ccd',
        borderRadius: '4px',
        textAlign: 'left',
        whiteSpace: 'pre-wrap',
        wordWrap: 'break-word',
    },
};

export default App;