const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello World');
});

app.get('/about', (req, res) => {
  res.status(200).send('About Page');
});

app.get('/contact', (req, res) => {
  res.status(200).send('Contact Page');
});

app.all('*', (req, res) => { //* anlami yukaridakilerin disinda else gibi
  res.status(404).send('<h1>404 Not Found</h1>');
});

const port = 3000;

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda calisiyor`);
});