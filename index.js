const http = require('http');
const port = process.env.PORT || 3006;
const port2 = process.env.PORT2 || 3007;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg1 = 'Hello Node!\n'
  res.end(msg1);
});

const server2 = http.createServer((req, res) => {
	res.statusCode = 200;
	const msg2 = 'Hello again from Node!\n'
	res.end(msg2);
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});

server2.listen(port2, () => {
	console.log(`Server2 running on http://localhost:${port2}/`);
})
