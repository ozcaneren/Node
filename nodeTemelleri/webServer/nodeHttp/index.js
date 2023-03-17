const http = require('http');

const server = http.createServer((req, res) => {
  //console.log('bir istek gonderildi');
  
  const url = req.url;

  if (url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('</h1>Home Page</h1>');
  }

  else if (url === '/about') {
    res.write('about page');
  }

  else if (url === '/contact') {
    res.write('contact page');
  }

  else {
    res.write('404 not found');
  }

  res.end();
});

const port = 3000;

server.listen(port, () => {
  console.log(`Sunucu ${port} portunda calisiyor`);
});