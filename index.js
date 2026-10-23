import http from "http"

const PORT = 3000

function routes(req, res) {

    if(req.url === "/"){
        res.writeHead(202, {"Content-Type": "text/html"})
        res.end("<h1>Ola, você</h1>")
    }

    res.writeHead(404, {"Content-Type": "text/html"})
    res.end("<h1>Not Found - 404</h1>")
}

const server = http.createServer(routes)

server.listen(PORT, () => {
    console.log(`Servidor está no http://localhost:${PORT}`);
    
})