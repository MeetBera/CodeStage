const express = require('express')
const http = require('http')
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const codeRoute = require("./routes/code");

const connectDB = require('./controllers/db')

const app = express()
dotenv.config()
connectDB()
const server = http.createServer(app)
app.use(cors());

const initializeSocket = require('./sockets/socket.io'); 
initializeSocket(server);

//middlewares
app.use(cors())
app.use(express.json())

//routes
app.use('/api/auth', require('./routes/authRoutes'))
app.use("/api/questions", require("./routes/questionRoute"));
app.use("/api/code", codeRoute);



const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));