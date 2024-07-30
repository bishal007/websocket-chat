// const express = require('express')
import express from 'express';
import { Server } from 'socket.io';
// const http = require('http')
import http from 'http';
// const { Server } = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173", // Allow connections from Vite dev server
    methods: ["GET", "POST"]
  }
})

io.on('connection', (socket) => {
  console.log('New client connected')

  socket.on('chat message', (msg) => {
    io.emit('chat message', msg)
  })

  socket.on('disconnect', () => {
    console.log('Client disconnected')
  })
})

const PORT = 3001
server.listen(PORT, () => console.log(`Server running on port ${PORT}`))