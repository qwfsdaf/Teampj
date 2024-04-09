import React, { useState } from "react";
import Header from "../Header/Header";
import styles from "./Chatbotmain.module.css"

export default function Chat() {
    const [chatHistory, setChatHistory] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const userInput = inputValue; // 사용자 입력 저장
        const botResponse = await generateChatText(inputValue); // 챗봇의 응답 받기
        setInputValue("");

        // 채팅 기록 업데이트
        setChatHistory(prevHistory => [
            ...prevHistory,
            { id: prevHistory.length, user: userInput, response: botResponse }
        ]);
    };


    async function generateChatText(input) {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${process.env.REACT_APP_CHAT_API_KEY}`,
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo", // 사용 가능한 최신 챗 모델로 대체하세요.
                messages: [{ role: "user", content: input }],
                temperature: 0.8, // 모델의 출력 다양성
                max_tokens: 150, // 응답받을 메시지 최대 토큰(단어) 수 설정
                top_p: 1, // 토큰 샘플링 확률을 설정
                frequency_penalty: 0.5, // 일반적으로 나오지 않는 단어를 억제하는 정도
                presence_penalty: 0.5, // 동일한 단어나 구문이 반복되는 것을 억제하는 정도
                stop: ["Human"], // 생성된 텍스트에서 종료150 구문을 설정

            }),
        });

        const data = await response.json();
        return data.choices[0].message.content;
    }

    return (
        <main className={styles.container}>
            <Header />
            <div className={styles.form}>
                <div className="chat-history">
                    {chatHistory.map((chat, index) => (
                        <div key={index} className="chat-message">
                            <div className={styles.grid}>User: {chat.user}</div>
                            <div className={styles.grid}>Bot: {chat.response}</div>
                        </div>
                    ))}
                </div>
                <form className={styles.button} onSubmit={handleFormSubmit}>
                    <input type="text" value={inputValue} onChange={handleInputChange} />
                    <button type="submit">Send</button>
                </form>
            </div>
        </main>
    );
}
