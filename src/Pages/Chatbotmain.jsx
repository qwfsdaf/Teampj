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
        const userInput = { role: 'user', content: inputValue }; // 사용자 입력 저장
        // 챗봇의 응답 받기
        const botResponseContent = await generateChatText(inputValue, chatHistory);
        const botResponse = { role: 'bot', content: botResponseContent };

        setInputValue("");

        // 채팅 기록 업데이트
        setChatHistory(prevHistory => [
            ...prevHistory,
            userInput,
            botResponse
        ]);
    };




    async function generateChatText(input, chatHistory) {
        // 이전 대화 내용을 포함하여 messages 배열 생성
        const messages = chatHistory.map(chat => ({
            role: chat.role === 'user' ? "user" : "assistant", // 'user' 또는 'assistant' 역할 적용
            content: chat.content
        }));
        // 현재 사용자 입력 추가
        messages.push({ role: "user", content: input });

        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${process.env.REACT_APP_CHAT_API_KEY}`,
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo", // 사용 가능한 최신 챗 모델
                messages: messages,
                temperature: 0.8,
                max_tokens: 150,
                top_p: 1,
                frequency_penalty: 0.5,
                presence_penalty: 0.5,
                stop: ["Human"],
            }),
        });

        const data = await response.json();
        return data.choices[0].message.content;
    }



    return (
        <main className={styles.container}>
            <Header />
            <div className={styles.chatting}>
                <div className={styles.chathistory}> {/* chat-history 클래스 적용 */}
                    {chatHistory.map((chat, index) => (
                        <div key={index} className={`${styles.messagebox} ${chat.role === 'user' ? styles.userMessage : styles.botMessage}`}>
                            <div>{chat.content}</div>
                        </div>
                    ))}
                </div>
                <form className={styles.chatform} onSubmit={handleFormSubmit}>
                    <div className={styles.nav}>
                        <input className={styles.input} type="text" value={inputValue} onChange={handleInputChange} />
                        <button className={styles.button}
                            type="submit"></button>
                    </div>
                </form>
            </div>
        </main>
    );


}
