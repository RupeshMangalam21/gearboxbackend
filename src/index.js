const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');

// Import routes
const usersRouter = require('./routes/users'); // Place this here, but use it later in the code

// Load environment variables
dotenv.config();

// Initialize app and Prisma client
const app = express();
const prisma = new PrismaClient();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', usersRouter); // Use the routes after initializing app

// Test route
app.get('/', (req, res) => {
  res.send('GearBox Backend is running');
});

// Listen on a port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
