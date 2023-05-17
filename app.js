const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res) => {
    const { url, method, headers } = req;
    // console.log("url" , url);
    // console.log("method" , method);
    // console.log("headers" , headers);

    if (url === '/hello') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<header><title>Hello world</title></header>');
        res.write('<body><center><h1>Hello davod jonam</h1></center></body>');
        res.write('</html>');
        return res.end();
    } else if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<header><title>Home page</title></header>');
        res.write('<body><center>');
        res.write('<h1>Home page</h1>');
        res.write('<form action="/message" method="Post">');
        res.write('<input type="text" name="message"/>');
        res.write('<input type="submit"/>');
        res.write('</form>');
        res.write('</center></body>');
        res.write('</html>');
        return res.end();
    } else if (url === '/message' && method === 'POST') {
        const body = [];
        req.on("data", chunk => {
            body.push(chunk);
            console.log(body);
        })
        req.on("end" , () => {
            const parseBody = Buffer.concat(body).toString();
            const message = parseBody.split('=')[1]
            fs.writeFileSync('message.txt', message);
        })
        // res.statusCode = 302;
        // res.setHeader("Location", "/");
        res.writeHead(302, { Location: '/' })
        return res.end();
    } else {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<header><title>Hello world</title></header>');
        res.write('<body><center><h1>not found</h1></center></body>');
        res.write('</html>');
        return res.end();
    }

})

server.listen(3000)