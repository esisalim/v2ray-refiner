import http from 'http';
import { readFile } from 'fs/promises';

const port = process.env.PORT || 3000;

const requestListener = async function (req, res) {
  try {
    const content = await readFile('./tls_worker.js', 'utf-8');

    res.writeHead(200, {
      'Content-Type': 'application/javascript',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    });

    res.end(content);
  } catch (err) {
    res.writeHead(500);
    res.end('Internal Server Error');
  }
};

const server = http.createServer(requestListener);
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
