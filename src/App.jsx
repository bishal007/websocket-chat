import React from 'react'
import useStore from './store'
import ChatScreen from './components/ChatScreen'

function App() {
  const { messages, sendMessage } = useStore()

  return (
    <div className="flex h-screen">
      <div className="w-1/2 p-4 border-r">
        <ChatScreen user="User 1" sendMessage={sendMessage} messages={messages} />
      </div>
      <div className="w-1/2 p-4">
        <ChatScreen user="User 2" sendMessage={sendMessage} messages={messages} />
      </div>
    </div>
  )
}

export default App