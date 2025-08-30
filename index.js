require('dotenv').config();
const express = require('express');

const app = express();

const port = 4000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/twitter', (req, res) => {
    res.send('This is Twitter');
});

app.get('/login', (req, res) => {
    res.send('<h1>This is Login Page</h1>');
})

app.get('/signup', (req, res) => {
    res.send('<h2>This is Signup Page</h2>')
}); 

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`);
});
