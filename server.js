const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/api/add', (req, res) => {
    const { num1, num2 } = req.query;

    if (!num1 || !num2) {
        return res.status(400).json({ error: 'Please provide both numbers' });
    }

    const result = parseFloat(num1) + parseFloat(num2);
    res.json({ result });
});

app.get('/api/subtract', (req, res) => {
    const { num1, num2 } = req.query;

    if (!num1 || !num2) {
        return res.status(400).json({ error: 'Please provide both numbers' });
    }

    const result = parseFloat(num1) - parseFloat(num2);
    res.json({ result });
});

app.get('/api/multiply', (req, res) => {
    const { num1, num2 } = req.query;

    if (!num1 || !num2) {
        return res.status(400).json({ error: 'Please provide both numbers' });
    }

    const result = parseFloat(num1) * parseFloat(num2);
    res.json({ result });
});

app.get('/api/divide', (req, res) => {
    const { num1, num2 } = req.query;

    if (!num1 || !num2) {
        return res.status(400).json({ error: 'Please provide both numbers' });
    }

    if (parseFloat(num2) === 0) {
        return res.status(400).json({ error: 'Cannot divide by zero' });
    }

    const result = parseFloat(num1) / parseFloat(num2);
    res.json({ result });
});



app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
