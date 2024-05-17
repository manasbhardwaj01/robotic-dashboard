const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const PORT = 5000;

app.use(cors());

app.get('/api/data/real-time', (req, res) => {
  fs.readFile('data.json', (err, data) => {
    if (err) throw err;
    const jsonData = JSON.parse(data);
    res.json(jsonData);
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
