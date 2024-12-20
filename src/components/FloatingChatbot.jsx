import React, { useState } from "react";
import axios from "axios";
import DOMPurify from "dompurify";
import { marked } from "marked";
import "./FloatingChatbot.css";

const FloatingChatbot = () => {
    const [messages, setMessages] = useState([
        {
            type: "bot",
            content: "What legal wisdom do you seek today??",
        },
    ]);
    const [input, setInput] = useState("");
    const [isOpen, setIsOpen] = useState(false); // State to manage modal visibility

    const toggleChatbot = () => {
        setIsOpen((prevIsOpen) => !prevIsOpen);
    };

    const handleSendMessage = async () => {
        if (!input.trim()) return;

        const userMessage = { type: "user", content: input.trim() };
        setMessages((prevMessages) => [...prevMessages, userMessage]);
        setInput("");

        try {
            const response = await axios.post("http://127.0.0.1:8000/api/chat", {
                message: userMessage.content,
            });

            const botResponse = response.data.response;
            const sanitizedContent = DOMPurify.sanitize(botResponse);
            const formattedContent = marked.parse(sanitizedContent);

            const botMessage = { type: "bot", content: formattedContent };
            setMessages((prevMessages) => [...prevMessages, botMessage]);
        } catch (error) {
            console.error("Error communicating with the bot:", error);

            const errorMessage = {
                type: "bot",
                content: "Sorry, I couldn't process your request. Please try again.",
            };
            setMessages((prevMessages) => [...prevMessages, errorMessage]);
        }
    };

    return (
        <>
            {/* Floating Icon */}
            <div className="floating-icon" onClick={toggleChatbot}>
                <video autoPlay muted loop aria-label="Bot animation">
                    <source src="/law.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {/* Fallback icon */}
                <span className="fallback-icon" aria-hidden="true">🤖</span>
            </div>

            {/* Chatbot Modal */}
            <div className={`chat-container ${isOpen ? "modal-open" : ""}`}>
                {/* Header Section */}
                <header className="chat-header">
                    <h1>ChatBot</h1>
                    <button className="close-btn" onClick={toggleChatbot} aria-label="Close chatbot">
                        ×
                    </button>
                </header>

                {/* Main Chat Section */}
                <main>
                    <div className="chat-box" id="chat-box">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`message ${msg.type}-message`}
                                dangerouslySetInnerHTML={{
                                    __html: msg.content,
                                }}
                            ></div>
                        ))}
                    </div>
                </main>

                {/* Input Section */}
                <footer className="chat-input">
                    <input
                        id="input"
                        type="text"
                        placeholder="Type your message here..."
                        aria-label="Message input"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={(e) => {
                            if (e.key === "Enter") handleSendMessage();
                        }}
                        autoFocus
                    />
                    <button id="send-btn" onClick={handleSendMessage} aria-label="Send message">
                        Send
                    </button>
                </footer>
            </div>
        </>
    );
};

export default FloatingChatbot;
