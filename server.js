
const express = require('express');


const app = express();


const PORT = process.env.PORT || 3000;


app.get('/', (req, res) => {
    res.status(200).send('Welcome to my Node.js server!');
});


app.get('/about', (req, res) => {
    res.status(200).json({
        name: 'P.Hitesh sai',
        section: 'S-26'
    });
});


app.get('/time', (req, res) => {
    res.status(200).json({
        currentTime: new Date().toISOString()
    });
});


app.use((req, res) => {
    res.status(404).send('404 - Page Not Found');
});


app.listen(PORT, () => {
    console.log(`Express server running at http://localhost:${PORT}`);
});
