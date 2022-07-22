const http = require('http')
const portNumber = 3000

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to Our Home Page')
    }
    if (req.url === '/about') {
        res.end('Welcome to Our About Page')
    }
    res.end(`
    <h1>Oopps!!!</h1>
    <p>We can not seem to find the page your are looking for </p>
    <a href="/">back home</a>
    `)
})

server.listen(portNumber);
