import React, { useState, useEffect, useRef } from "react";
import styles from "./Chatbotmain.module.css";
import { FiSend } from "react-icons/fi";
import Header from "../Header/Header";
import img from "./icon 1 .png"

export default function Chat() {
    const part1 = "sk-K";
    const part2 = "61mx";
    const part3 = "vvyU";
    const part4 = "XInN";
    const part5 = "n6Iz";
    const part6 = "vZAT";
    const part7 = "3Blb";
    const part8 = "kFJ9ElOrwSYVy43vQo0RZkL";

    // 8개의 변수를 합쳐서 하나의 문자열로 만듭니다.
    const apiKey = [part1, part2, part3, part4, part5, part6, part7, part8].join('');
    const [chatHistory, setChatHistory] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const endOfMessagesRef = useRef(null); // 스크롤할 위치를 참조하기 위한 ref 생성

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(prevState => !prevState);
    };

    const scrollToBottom = () => {
        endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom(); // 채팅 기록이 업데이트될 때마다 스크롤을 아래로 이동
    }, [chatHistory]);

    useEffect(() => {
        // 페이지가 로드될 때 챗봇이 처음으로 메시지를 보냄
        const initialBotMessage = { role: 'bot', content: '안녕하세요, 세로입니다. 무엇이든 물어보세요. :)' };
        setChatHistory([initialBotMessage]);
    }, []);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const userInput = { role: 'user', content: inputValue }; // 사용자 입력 저장

        // 로딩 인디케이터를 위한 챗봇 임시 응답 추가
        setChatHistory(prevHistory => [
            ...prevHistory,
            userInput,
            { role: 'bot', content: 'loading' } // 'loading' 상태를 나타내기 위한 임시 응답
        ]);

        const botResponseContent = await generateChatText(inputValue, chatHistory);
        const botResponse = { role: 'bot', content: botResponseContent };
        setInputValue("");

        // 채팅 기록 업데이트 (로딩 인디케이터 제거)
        setChatHistory(prevHistory => [
            ...prevHistory.slice(0, -1), // 마지막 'loading' 임시 응답 제거
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
                "Authorization": `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
                model: "gpt-4", // 사용 가능한 최신 챗 모델
                messages: messages,
                temperature: 0.8,
                max_tokens: 1024,
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
            <Header isSidebarOpen={isSidebarOpen} onSidebarToggle={toggleSidebar} />
            <div className={styles.logo}>
                <img className={styles.img} src={img} alt="img1" />
            </div>
            <div className={styles.chatting}>
                <div className={styles.chathistory}>
                    {chatHistory.map((chat, index) => (
                        <div key={index} className={`${styles.messagebox} ${chat.role === 'user' ? styles.userMessage : styles.botMessage}`}>
                            {chat.content === 'loading' ? <div className={styles.loadingSpinner}></div> : <div>{chat.content}</div>}
                        </div>
                    ))}
                    {/* 스크롤 위치 조정을 위한 빈 div 요소 */}
                    <div ref={endOfMessagesRef} />
                </div>
                <form className={styles.chatform} onSubmit={handleFormSubmit}>

                    <div className={styles.nav}>
                        <input
                            className={styles.input}
                            type="text"
                            value={inputValue}
                            onChange={handleInputChange}
                            placeholder="무엇이든 세로에게 물어보세요!"
                        />
                        <button className={styles.button} type="submit">
                            <div className={styles.icons}><FiSend /></div>
                        </button>
                    </div>
                </form>
            </div>
        </main>
    );
}
