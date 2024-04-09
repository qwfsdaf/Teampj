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
        // 챗봇의 응답 받기 (이전 대화 기록 포함)
        const botResponse = await generateChatText(inputValue, chatHistory);
        setInputValue("");

        // 채팅 기록 업데이트
        setChatHistory(prevHistory => [
            ...prevHistory,
            { id: prevHistory.length, user: userInput, response: botResponse }
        ]);
    };



    async function generateChatText(input, chatHistory) {
        // 이전 대화 내용을 포함하여 messages 배열 생성
        const messages = chatHistory.map(chat => ({ role: "system", content: `User: ${chat.user}\nBot: ${chat.response}` }));
        messages.push({ role: "user", content: input }); // 현재 사용자 입력 추가

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
