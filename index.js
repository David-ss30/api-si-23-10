import http from "http"

const PORT = 3000

function routes(req, res) {
    res.writeHead(404, {"Content-Type": "text/html"})
}

const server = http.createServer(routes)

server.listen(PORT, () => {
    console.log(`Servidor está no http://localhost:${PORT}`);
    
})