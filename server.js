const http = require('http');
const fs = require('fs');
const hostname = 'localhost';
const port = 80;

fs.readFile('hello.html',(err,html) => {
    if (err) {
        throw err;
    }

    const server = http.createServer((req,res) => {
        res.statusCode = 200;
        res.setHeader('Const-type','text/plain');
        res.write(html);
        res.end();
    });
    
    server.listen(port, hostname, () => {
        console.log('Server started on port '+port);
    })

})

