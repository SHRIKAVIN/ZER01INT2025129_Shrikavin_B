const express = require('express');
const connectDB = require('./DataBase/db');
const authRoute = require('./Routes/AuthRoute');

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/auth', authRoute);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
