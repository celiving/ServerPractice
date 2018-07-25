const http = require('http');
const PORTa = 7000;
const PORTb = 7500;
const handleRequestA = (request, response)=>
    {
        response.end("THE WORLD IS A MIRACLE, AND YOU'RE A PART OF THAT MIRACLE!")
    }
    const serverA = http.createServer(handleRequestA);
    
    serverA.listen(PORTa, function(){
        console.log('the good server is listeningon port'+ PORTa)
    });

    //--------*-
    const handleRequestB = (request, response)=>
    {
        response.end('You are ultimately a meaningless piece of carbon that will never escape the heat death of the universe.')
    }
    const server = http.createServer(handleRequestB);
    
    server.listen(PORTb, function(){
        console.log('the evil server is listening on port'+ PORTb)
    });