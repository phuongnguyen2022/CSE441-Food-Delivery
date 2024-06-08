const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware to parse JSON request body
app.use(express.json());

// Auth route handler
app.post('/auth', (req, res) => {
  // Get username and password from request body
  const { username, password } = req.body;

  // Perform authentication logic here
  // For example, check username and password against database

  // Send response based on authentication result
  if (username === 'example' && password === '123') {
    res.status(200).json({ message: '++++++++Authentication successful' });
  } else {
    res.status(401).json({ message: '======Authentication failed' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
