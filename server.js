import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import { socketHandlers } from './socket/socketHandlers.js';
import cors from 'cors';

const app = express();

app.use(cors({
    origin: "https://muntajir11.github.io", 
    methods: ["GET", "POST"]
}));

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "https://muntajir11.github.io", 
        methods: ["GET", "POST"]
    }
});

const PORT = process.env.PORT || 5000;
socketHandlers(io);

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
