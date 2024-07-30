import { create } from 'zustand'
import io from 'socket.io-client'

const socket = io('http://localhost:3001') // Connect to your WebSocket server

const useStore = create((set) => ({
  messages: [],
  addMessage: (message) => set((state) => ({ messages: [...state.messages, message] })),
  sendMessage: (user, content) => {
    const message = { user, content, timestamp: new Date().toISOString() }
    socket.emit('chat message', message)
  },
}))

socket.on('chat message', (message) => {
  useStore.getState().addMessage(message)
})

export default useStore