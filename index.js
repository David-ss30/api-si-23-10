import http from "http"
import { poll } from "./db.js"

const PORT = 3000

async function routes(req, res) {

    
    if (req.url === "/products"){
        const [ rows ] = await poll.query("SELECT * from products")
        
        const lines = rows.map((p) => `
        /* html */
        <tr>
        <td>${p.id}</td>
        <td>${p.name}</td>
        <td>${p.price}</td>
        </tr>
        `).join(" ")
        
        const html = /* html */ `
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        </head>
        <body>
        <h1>Products</h1>
        <table>
        <tr>
        <th>ID</th>
        <th>Name</th>
        <th>price</th>
        </tr>
        ${lines}
        </table>
        </body>
        </html>
        `
        
        res.writeHead(200, {"Content-Type": "text/html"})
        res.end("<h1>Ola, você</h1>")
        return
    }
    if(req.url === "/"){
        res.writeHead(202, {"Content-Type": "text/html"})
        res.end("<h1>Ola, você</h1>")
        return
    }

    res.writeHead(404, {"Content-Type": "text/html"})
    res.end("<h1>Not Found - 404</h1>")
    return
}

const server = http.createServer(routes)

server.listen(PORT, () => {
    console.log(`Servidor está no http://localhost:${PORT}`);
    
})