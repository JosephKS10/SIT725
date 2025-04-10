const express = require('express');
const app = express();
const PORT = 3000;
// Import route file
const helloRoute = require('./routes/hello');


app.use('/api/hello', helloRoute);


app.get('/', (req, res) => {
res.send('Welcome to the Home Page!');
});

app.use('/api/food', require('./routes/food'));

app.listen(PORT, () => {
console.log(`Server is running at
http://localhost:${PORT}`);
});