const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ msg: 'I am homepage' });
});

app.get('/about', (req, res) => {
  res.json({ msg: 'I am about page' });
});

app.get('/contact', (req, res) => {
  res.json({ email: 'support@pwskills.com' });
});

const port = 3000; // Choose any available port you prefer
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
