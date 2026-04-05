require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { createClient } = require('redis');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Redis Client
const redisClient = createClient({
  url: process.env.REDIS_URL
});

redisClient.on('error', (err) => console.error('Redis Client Error:', err));
redisClient.on('connect', () => console.log('Connected to Redis successfully'));

const connectRedis = async () => {
  try {
    await redisClient.connect();
  } catch (err) {
    console.error('Failed to connect to Redis:', err);
  }
};

connectRedis();

// Contact Endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    const payload = JSON.stringify({
      name,
      email,
      message,
      timestamp: new Date().toISOString()
    });

    // Store in a Redis List named 'contact_messages'
    await redisClient.lPush('contact_messages', payload);

    console.log('New message received from:', email);
    res.status(200).json({ success: true, message: 'Message saved securely.' });
  } catch (error) {
    console.error('Error saving message to Redis:', error);
    res.status(500).json({ error: 'Failed to process request.' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend API running on port ${PORT}`);
});
