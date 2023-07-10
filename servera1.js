const http = require('http');

const hostname='127.0.0.1';
const port =8081;
const a=10;
const b=20;
const c=a+b;
const server= http.createServer((req,res)=>{
	res.statusCode=200;
	res.setHeader('Content-Type','text/plain');
	
	res.end(`The sum is ${c}`);
});

server.listen(port, hostname,()=> {
	console.log(`server running at http://${hostname}:${port}/`);
	console.log("a=10");
	console.log("b=20");
});



