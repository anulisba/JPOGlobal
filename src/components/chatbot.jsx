import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import "./chatBot.css";
import { FaComments, FaTimes } from "react-icons/fa";

const mainMenu = [
    "Accounting & Bookkeeping",
    "VAT & Corporate Tax",
    "Audit & Assurance",
    "Business Setup Services",
    "CFO & Advisory",
    "Payroll Services",
    "Contact Us"
];

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [step, setStep] = useState("name");
    const [messages, setMessages] = useState([]);
    const [typing, setTyping] = useState(false);
    const [showTooltip, setShowTooltip] = useState(true);
    const [shake, setShake] = useState(false);
    const messagesEndRef = useRef(null);

    /* -------------------------------
       AUTO SCROLL
    -------------------------------- */
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, typing]);

    /* -------------------------------
       INITIAL WELCOME
    -------------------------------- */
    useEffect(() => {
        if (isOpen && messages.length === 0) {
            addBotMessage("Welcome to JPO Global 👋");
            setTimeout(() => {
                addBotMessage("May I know your name?");
            }, 600);
        }
    }, [isOpen]);

    /* -------------------------------
       SHAKE EFFECT
    -------------------------------- */
    useEffect(() => {
        if (isOpen) return;

        const interval = setInterval(() => {
            setShake(true);
            setTimeout(() => setShake(false), 600);
        }, 6000);

        return () => clearInterval(interval);
    }, [isOpen]);

    /* -------------------------------
       TOOLTIP AUTO HIDE
    -------------------------------- */
    useEffect(() => {
        if (isOpen) return;

        const timer = setTimeout(() => {
            setShowTooltip(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, [isOpen]);

    /* -------------------------------
       MESSAGE HELPERS
    -------------------------------- */
    const addBotMessage = (text, options = null) => {
        setTyping(true);
        setTimeout(() => {
            setTyping(false);
            setMessages(prev => [...prev, { sender: "bot", text, options }]);
        }, 700);
    };

    const addUserMessage = (text) => {
        setMessages(prev => [...prev, { sender: "user", text }]);
    };

    /* -------------------------------
       USER INPUT HANDLER
    -------------------------------- */
    const handleUserInput = (text) => {
        if (!text.trim()) return;

        addUserMessage(text);

        if (step === "name") {
            setStep("menu");
            setTimeout(() => {
                addBotMessage(
                    `Nice to meet you, ${text} 😊 How can we assist you today?`,
                    mainMenu
                );
            }, 500);
            return;
        }

        generateResponse(text);
    };

    /* -------------------------------
       RESPONSE LOGIC
    -------------------------------- */
    const generateResponse = (input) => {
        const q = input.toLowerCase();

        if (q.includes("accounting")) {
            addBotMessage(
                "📊 Accounting & Bookkeeping\n\n• Daily bookkeeping\n• Ledger maintenance\n• Financial statements\n• Cloud accounting setup\n• MIS reporting",
                ["Back to main menu"]
            );
        }

        else if (q.includes("tax")) {
            addBotMessage(
                "🧾 VAT & Corporate Tax\n\n• VAT Registration\n• VAT Filing\n• Corporate Tax Registration\n• FTA Compliance Support",
                ["Back to main menu"]
            );
        }

        else if (q.includes("audit")) {
            addBotMessage(
                "🔎 Audit & Assurance\n\n• Internal Audit\n• External Audit\n• Risk Assessment\n• Compliance Review",
                ["Back to main menu"]
            );
        }

        else if (q.includes("business")) {
            addBotMessage(
                "🏢 Business Setup Services\n\n• Mainland Formation\n• Free Zone Setup\n• Trade License Processing\n• Bank Account Assistance",
                ["Back to main menu"]
            );
        }

        else if (q.includes("cfo")) {
            addBotMessage(
                "📈 CFO & Advisory\n\n• Cash Flow Planning\n• Budget Forecasting\n• Financial Strategy\n• Growth Advisory",
                ["Back to main menu"]
            );
        }

        else if (q.includes("payroll")) {
            addBotMessage(
                "💼 Payroll Services\n\n• Salary Processing\n• WPS Compliance\n• Payslip Generation\n• Employee Records",
                ["Back to main menu"]
            );
        }

        else if (q.includes("contact")) {
            addBotMessage(
                "📞 Contact Details\n\nIndian Office:\nJPO Global Business Solutions Pvt Ltd.\nFirst Floor, Golden Plaza Building,\nAngamaly, Ernakulam\nKerala – 683572\n\nPhone: 8075595187\nEmail: jpoglobal.info@gmail.com",
                [
                    { label: "Call Now", action: () => window.open("tel:8075595187") },
                    { label: "Send Email", action: () => window.open("mailto:jpoglobal.info@gmail.com") },
                    "Back to main menu"
                ]
            );
        }

        else if (q.includes("back")) {
            addBotMessage("How else can we assist you?", mainMenu);
        }

        else {
            addBotMessage("Please select one of the available options.", mainMenu);
        }
    };

    const handleOptionClick = (option) => {
        if (typeof option === "object") {
            option.action();
            return;
        }
        handleUserInput(option);
    };

    /* -------------------------------
       PORTAL RENDER
    -------------------------------- */
    return createPortal(
        <>
            {!isOpen && showTooltip && (
                <div className="chat-tooltip">
                    Need help? Chat with us 👋
                </div>
            )}

            <div
                className={`chat-toggle ${shake ? "shake" : ""}`}
                onClick={() => {
                    setIsOpen(!isOpen);
                    setShowTooltip(false);
                }}
            >
                {isOpen ? <FaTimes /> : <FaComments />}
            </div>

            {isOpen && (
                <div className="chat-container">
                    <div className="chat-header">
                        <div>
                            <h4>JPO Global</h4>
                            <span>Business Solutions</span>
                        </div>
                    </div>

                    <div className="chat-body">
                        {messages.map((msg, i) => (
                            <div key={i} className={`chat-message ${msg.sender}`}>
                                {msg.text.split("\n").map((line, index) => (
                                    <p key={index}>{line}</p>
                                ))}

                                {msg.options && (
                                    <div className="chat-options">
                                        {msg.options.map((opt, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => handleOptionClick(opt)}
                                            >
                                                {typeof opt === "object" ? opt.label : opt}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}

                        {typing && (
                            <div className="chat-message bot typing">
                                <span></span><span></span><span></span>
                            </div>
                        )}

                        <div ref={messagesEndRef} />
                    </div>

                    {step === "name" && (
                        <ChatInput onSend={handleUserInput} />
                    )}
                </div>
            )}
        </>,
        document.body
    );
};

/* -------------------------------
   INPUT COMPONENT
-------------------------------- */
const ChatInput = ({ onSend }) => {
    const [input, setInput] = useState("");

    const submit = (e) => {
        e.preventDefault();
        onSend(input);
        setInput("");
    };

    return (
        <form className="chat-input" onSubmit={submit}>
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
            />
            <button type="submit">Send</button>
        </form>
    );
};

export default ChatBot;
