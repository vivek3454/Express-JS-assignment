const http = require('http');

// Sample data for men's products
const menProducts = [
    { id: 1, name: 'Product 1 (Men)' },
    { id: 2, name: 'Product 2 (Men)' },
    { id: 3, name: 'Product 3 (Men)' },
];

// Sample data for women's products
const womenProducts = [
    { id: 1, name: 'Product 1 (Women)' },
    { id: 2, name: 'Product 2 (Women)' },
    { id: 3, name: 'Product 3 (Women)' },
];

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome to Men & Women Dummy Data');
    } else if (req.url === '/men') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(menProducts));
    } else if (req.url === '/women') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(womenProducts));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page not found');
    }
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
