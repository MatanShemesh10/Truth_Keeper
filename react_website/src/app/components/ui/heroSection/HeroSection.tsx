import React, { useState, useRef, useEffect } from 'react';
import './heroSection.css';
import { HeroSectionComponentProps } from './heroSection.interface';

export const HeroSection: React.FC<HeroSectionComponentProps> = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [buttonText, setButtonText] = useState('Let Me Try!');
  const [messages, setMessages] = useState<{ text: string; sender: string; confidence?: string }[]>([]);
  const [charCount, setCharCount] = useState(0);
  const [showWarning, setShowWarning] = useState(false);
  const chatboxRef = useRef<HTMLDivElement>(null);
  const userInputRef = useRef<HTMLInputElement>(null);
  const sendButtonRef = useRef<HTMLButtonElement>(null);
  const userInputLimit = 140;

  const handleChatboxClick = () => {
    setIsExpanded(true);
    setButtonText('Return to the chat');
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (chatboxRef.current && !chatboxRef.current.contains(event.target as Node)) {
      setIsExpanded(false);
    }
  };

  const sendMessage = async () => {
    const userInput = userInputRef.current?.value;
    if (!userInput) return;

    if (userInput.length > userInputLimit) {
      userInputRef.current.value = userInput.slice(0, userInputLimit);
      setCharCount(userInputLimit);
      return;
    }

    setMessages([...messages, { text: userInput, sender: 'user' }]);
    userInputRef.current.value = '';
    setCharCount(0);
    setShowWarning(false);

    const response = await fetch('http://127.0.0.1:8000/chat/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user_input: userInput }),
    });

    let data = {
      bot_response: "no response from the bot. Please try again later.",
      confidence_score: "no response from the bot. Please try again later."
    };
    let myResponse = await response.json();
    if (myResponse) {
      data.bot_response = myResponse.bot_response;
      data.confidence_score = myResponse.confidence_score;
    }
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: `Bot: ${data.bot_response}`, sender: 'bot', confidence: data.confidence_score[0] },
    ]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (charCount <= userInputLimit) {
      sendMessage();
    } else {
      setShowWarning(true);
      if (sendButtonRef.current) {
        sendButtonRef.current.classList.add('vibrate');
        setTimeout(() => {
          if (sendButtonRef.current) {
            sendButtonRef.current.classList.remove('vibrate');
          }
        }, 1500); // Remove the class after the animation duration
      }
    }
  };

  const handleInputChange = () => {
    if (userInputRef.current) {
      setCharCount(userInputRef.current.value.length);
      if (userInputRef.current.value.length <= userInputLimit) {
        setShowWarning(false);
      }
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <section className="hero-section" id="section_1">
      <div className="container">
        <div className="row">
          <div className="col">
            <h2 className="text-center">Try Truth Keeper Model</h2>
            <h6 className="text-center">We invite you to try our new model! Press on the chat box below.</h6>
            <form className="custom-form" role="search" onSubmit={handleSubmit}>
              {!isExpanded && (
                <button
                  type="button"
                  className="try-button"
                  onClick={handleChatboxClick}
                >
                  {buttonText}
                </button>
              )}
              {(
                <div className={`chatbox-container ${isExpanded ? 'expanded' : ''}`} ref={chatboxRef}>
                  <div className="chat-content">
                    <div id="chat-window">
                      <div id="output">
                        {messages.map((message, index) => (
                          <div key={index} className={`message ${message.sender === 'user' ? 'user-message' : 'bot-message'}`}>
                            {message.sender === 'user' ? `You: ${message.text}` : `${message.text} \n ${message.confidence ? `. Percentage of accuracy: ${parseFloat(message.confidence).toFixed(2)}` : ''}`}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="input-container">
                      <input
                        type="text"
                        id="user-input"
                        ref={userInputRef}
                        placeholder="Say something..."
                        autoComplete="off"
                        onKeyPress={(e) => { if (e.key === 'Enter') sendMessage(); }}
                        onChange={handleInputChange}
                      />
                      <div className={`char-counter ${charCount > userInputLimit ? 'over-limit' : ''}`}>{charCount}/{userInputLimit}</div>
                      <button
                        type="submit"
                        className="submit-button"
                        disabled={charCount > userInputLimit}
                        ref={sendButtonRef}
                      >
                        Send
                      </button>
                    </div>
                    {showWarning && ( //need to fix it
                      <div className="warning-text">You have exceeded the number of letters that the model allows</div>
                    )}
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
