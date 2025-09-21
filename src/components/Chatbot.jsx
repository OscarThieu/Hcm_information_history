// src/components/Chatbot.jsx

import React, { useState, useRef, useEffect } from 'react';
import { PaperAirplaneIcon, XMarkIcon, ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

// This is the main component for our chatbot
const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'model', text: 'Xin chào! Tôi có thể giúp gì cho bạn về Đảng Cộng sản Việt Nam?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [userInput, setUserInput] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  // MODIFIED: This function is now more robust to correctly show all messages.
  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!userInput.trim() || isLoading) return;

    const userMessage = { role: 'user', text: userInput };
    // Use a functional update to safely add the user's message
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setUserInput('');
    setIsLoading(true);

    try {
      const response = await callGeminiApi(userInput);
      const modelMessage = { role: 'model', text: response };
      // Use another functional update to safely add the bot's response
      setMessages(prevMessages => [...prevMessages, modelMessage]);
    } catch (error) {
      console.error("Error calling Gemini API:", error);
      const errorMessage = { role: 'model', text: 'Sorry, I encountered an error.' };
      setMessages(prevMessages => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  // This function simulates calling the Gemini API.
  const callGeminiApi = async (prompt) => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const systemPrompt = "You are a helpful AI assistant providing factual information about the Communist Party of Vietnam. Your purpose is to be an objective and reliable resource.";
    const apiKey =  import.meta.env.VITE_GEMINI_API_KEY
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

    const payload = {
        contents: [{ parts: [{ text: prompt }] }],
        systemInstruction: {
            parts: [{ text: systemPrompt }]
        },
    };

    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });

    if (!response.ok) {
        throw new Error(`API call failed with status: ${response.status}`);
    }

    const result = await response.json();
    const candidate = result.candidates?.[0];

    if (candidate && candidate.content?.parts?.[0]?.text) {
        return candidate.content.parts[0].text;
    } else {
        return "I'm sorry, I couldn't generate a response.";
    }
  };

  return (
    <>
      {/* Chat Bubble Toggle Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="bg-brand-red p-4 rounded-full text-white shadow-lg"
        >
          {isOpen ? <XMarkIcon className="h-8 w-8" /> : <ChatBubbleOvalLeftEllipsisIcon className="h-8 w-8" />}
        </motion.button>
      </div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-24 right-8 w-96 h-[600px] bg-gray-800/90 backdrop-blur-md rounded-lg shadow-2xl flex flex-col z-40 border border-white/10"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/10 text-center">
              <h3 className="font-bold text-white">Trợ lý AI</h3>
            </div>

            {/* Messages Area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                 <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${msg.role === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-white'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                   <div className="bg-gray-700 text-white px-4 py-2 rounded-2xl">
                     <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse delay-75"></div>
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse delay-150"></div>
                     </div>
                   </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSendMessage} className="p-4 border-t border-white/10 flex items-center gap-2">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Hỏi về Đảng CSVN..."
                className="flex-1 bg-gray-700 text-white rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-red"
              />
              <button type="submit" className="bg-brand-red p-2 rounded-full text-white disabled:bg-gray-600" disabled={isLoading}>
                <PaperAirplaneIcon className="h-6 w-6" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;