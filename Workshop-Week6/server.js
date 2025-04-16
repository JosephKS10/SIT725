var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var path = require('path');
var cors = require('cors');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

let quotes = [
    "The best way to predict the future is to invent it.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "Do not wait to strike till the iron is hot; but make it hot by striking.",
];

app.get('/quote', (req, res) => {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    let randomQuote = quotes[randomIndex];
    res.json({ quote: randomQuote });
});


app.post('/quote', (req, res) => {
    let newQuote = req.body.quote;
    quotes.push(newQuote);
    res.send('Quote added successfully');
});

// Addition API
app.post('/add', (req, res) => {
    let { num1, num2 } = req.body;
    let result = num1 + num2;
    res.json({ result });
});

// Subtraction API
app.post('/subtract', (req, res) => {
    let { num1, num2 } = req.body;
    let result = num1 - num2;
    res.json({ result });
});

//Multiplication API
app.post('/multiply', (req, res) => {
    let { num1, num2 } = req.body;
    let result = num1 * num2;
    res.json({ result });
});

// Division API
app.post('/divide', (req, res) => {
    let { num1, num2 } = req.body;
    
    if (num2 === 0) {
        return res.status(400).json({ error: "Cannot divide by zero" });
    }

    let result = num1 / num2;
    res.json({ result });
});

app.listen(port, () => {
    console.log('App listening on port ' + port);
});

module.exports = app;  // This makes the app available for testing
