var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var path = require('path');
var cors = require('cors');
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

let quotes =[
    "The best way ot predict the future is to invent it.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "Do not wait to strike till the iron is hot; but make it hot by striking.",
]

// Get endpoint to retrieve a random quote
app.get('/quote', (req, res) => {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    let randomQuote = quotes[randomIndex];
    res.json({ quote: randomQuote });  // ✅ Return a JSON response
});

// Post endpoint to add a new quote
app.post('/quote', (req, res) => {
    let newQuote = req.body.quote;
    quotes.push(newQuote);
    res.send('Quote added successfully');
    });

app.listen(port, () => {
    console.log('App listening on port ' + port);
    });