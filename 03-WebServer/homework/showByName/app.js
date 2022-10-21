var fs  = require("fs")
var http  = require("http")

// Escribí acá tu servidor
http.createServer(function(req,res){
	if( req.url === '/'){
        res.writeHead(200, { 'Content-Type':'text/plain' }) //Le ponemos el status code y algunos pair-values en el header
	    res.end('Hola, Mundo!\nPodes probar poniendo:\n/arcoiris\n/badboy\n/code\n/resaca\n/retrato\n/sexy\n');
    }
    else if( req.url === '/arcoiris'){
		res.writeHead(200, { 'Content-Type':'image/jpeg' })
		var doge1 = fs.readFileSync(__dirname +'/images/arcoiris_doge.jpg');
		res.end(doge1);
	}else if(req.url === '/badboy'){
		res.writeHead(200, { 'Content-Type':'image/jpeg' })
		var doge2 = fs.readFileSync(__dirname +'/images/badboy_doge.jpg');
		res.end(doge2);
    }else if(req.url === '/code'){
		res.writeHead(200, { 'Content-Type':'image/jpeg' })
		var doge3 = fs.readFileSync(__dirname +'/images/code_doge.jpg');
		res.end(doge3);
    }else if(req.url === '/resaca'){
		res.writeHead(200, { 'Content-Type':'image/jpeg' })
		var doge4 = fs.readFileSync(__dirname +'/images/resaca_doge.jpg');
		res.end(doge4);
    }else if(req.url === '/retrato'){
		res.writeHead(200, { 'Content-Type':'image/jpeg' })
		var doge5 = fs.readFileSync(__dirname +'/images/retrato_doge.jpg');
		res.end(doge5);
    }else if(req.url === '/sexy'){
		res.writeHead(200, { 'Content-Type':'image/jpeg' })
		var doge6 = fs.readFileSync(__dirname +'/images/sexy_doge.jpg');
		res.end(doge6);
	} else{
		res.writeHead(404); //Ponemos el status del response a 404: Not Found
		res.end(); //No devolvemos nada más que el estado.
	}
}).listen(3000,'127.0.0.1')