import React, { useState, useRef, useEffect } from 'react'

const ChatScreen = ({ user, sendMessage, messages }) => {
  const [input, setInput] = useState('')
  const messagesEndRef = useRef(null)

  const handleSend = () => {
    if (input.trim()) {
      sendMessage(user, input)
      setInput('')
    }
  }

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  return (
    <div className="flex flex-col h-full">
      <h2 className="text-xl font-bold mb-4">{user}</h2>
      <div className="flex-grow overflow-y-auto mb-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-2 p-2 rounded ${
              msg.user === user ? 'bg-blue-100 ml-auto' : 'bg-gray-100'
            }`}
          >
            <span className="font-bold">{msg.user}: </span>
            {msg.content}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow border rounded-l px-2 py-1"
          placeholder="Type a message..."
        />
        <button
          onClick={handleSend}
          className="bg-blue-500 text-white px-4 py-1 rounded-r"
        >
          Send
        </button>
      </div>
    </div>
  )
}

export default ChatScreen