import { log } from "console"
import { poll } from "./db.js"

//Buscar dentro do banco
// const promessa = poll.query("SELECT * FROM products");
// //sem await ele manda apenas o status
// console.log("1:", promessa);
// // await - aguarda a promise
// const [ rows ] = await promessa

// console.log("2:", rows);

//inserir

const [ result ] = await poll.query("IF NOT EXIST INSERT INTO products (name, price) VALUES (?, ?)", 
    ["Headset", 250])
console.log(result);
