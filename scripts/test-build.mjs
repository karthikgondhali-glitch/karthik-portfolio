import { preview } from 'vite';
import http from 'http';

async function test() {
  const server = await preview({
    preview: { port: 4173 }
  });
  console.log('Preview server started at port 4173');

  http.get('http://localhost:4173', (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      console.log('GET / returned HTTP', res.statusCode);
      console.log('HTML contains title:', data.includes('Karthik V.G.'));
      console.log('HTML contains root element:', data.includes('id="root"'));
      server.httpServer.close();
      process.exit(0);
    });
  }).on('error', (err) => {
    console.error('Request failed:', err.message);
    server.httpServer.close();
    process.exit(1);
  });
}

test();
