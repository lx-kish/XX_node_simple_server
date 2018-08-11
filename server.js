const http = require('http');
const fs = require('fs');

let HTML = fs.readFileSync('./index.html');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-type': 'application/json' });
    const json = JSON.stringify({
        name:'Alex',
        cars:['Toyota','Subaru']
    })

    res.end(json.toString());
})


server.listen(8181, '127.0.0.1');
console.log('server is running on port 8181')