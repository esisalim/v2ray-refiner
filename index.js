import { readFileSync } from 'fs';
import http from 'http';
import path from 'path';

const html = readFileSync(path.join('assets', 'index.html'), 'utf-8');
const js = readFileSync(path.join('assets', 'script.js'), 'utf-8');

http.createServer((req, res) => {
  if (req.url === '/' || req.url === '/index.html') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);
  } else if (req.url === '/script.js') {
    res.writeHead(200, { 'Content-Type': 'application/javascript' });
    res.end(js);
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
}).listen(process.env.PORT || 3000);
