const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors()); // allow frontend to access backend
app.use(express.json()); // parse JSON data

// Dummy login data (for demo)
const USER = { username: 'hari', password: '1234' };

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === USER.username && password === USER.password) {
    res.json({ success: true, message: 'Login successful!' });
  } else {
    res.json({ success: false, message: 'Invalid username or password.' });
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));
