const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('I love IronMan');
});

app.get('/Kaget', (req, res) => {
    res.send('duarrrrr');
});

app.post('/register', (req, res) => {
    res.send('Request POST for register!');
})

app.put('/update', (req, res) => {
    res.send('status');
})

app.delete('/delete', (req, res) => {
    res.send('mantan');
})

app.listen(port, ()=> console.log(`App listen on port ${port}`))